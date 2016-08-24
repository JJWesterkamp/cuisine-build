///// USER INTERFACE /////

/*
This revealing module handles all events within the user interface.
Since we are dealing with a single page application, Separation of Concerns is the key to succes.

All communication with other scripts (scopes / closures) should go through the mediator, called 'radio', abbreviated 'r' in this constructor. This way, any script can subscribe and unsubscribe to events whenever needed. Still, all scripts are able to function without requiring presence of one another.

The application should be able to be bootstrapped from any page within the site, regardless of its documents' relative position to the site root. PHP takes care of construction of proper relative links.

*/


var ui = (function(w, d, $, r, animations){
	
///////////////////////////////// references ///////////////////////////////////

    'use strict';
    
    // jQuery object wrappers
    
        // navigation menus
	var $menu = $('#pagesNav'),
        $userMenu = $('#userNav'),
        $footerPages = $('#footerPages'),
        $mobilePages = $('#mobilePages'),
        
        // content division
	    $wrapper = $('#main'),
        
        // window jQuery
	    $window = $(w),
        $htmlbody = $('html, body'),
        $body = $('body');
    
	setContentHeight();

    
    
    
/////////////////////////////////// init ui ////////////////////////////////////

	r.subscribe('domContentLoaded', function initialize(){
		
        // Initialize createJS stages
        animations.init( options.canvas );
        
        // Register page links
        register_page_links([
            { scope: $userMenu, selector: 'a'},
            { scope: $menu, selector: 'a' },
            { scope: $mobilePages, selector: 'a' },
            { scope: $footerPages, selector: 'a' },
            { scope: $wrapper, selector: '.crossPage' }
        ]);
        
        history.replaceState(
            {
                name: options.currentPage,
                pagegroup: options.currentPagegroup,
                href: window.location.href
            },
            options.currentPage,
            window.location.href
        );
	});


	function delayedPromise( time ) {
		// return a promise with delayed resolve..
		return new Promise(function(resolve, reject){
			setTimeout(resolve, time);
		});
	}
    
    
    
    
///////////////////////////////// page requests /////////////////////////////////
    
    // Register new (local origin) cross-page links. This is used when an AJAX response is dynamically loaded into the #main wrapper. The links of the newly created markup should be registered to the application in order for them to make use of the AJAX functionality when clicked.
    
    // This function is later revealed as public method of the ui Object
    
    function register_page_links( array ) {
        var i, l;
        
        // for each array item (Object) register Object.selector (string) within Object.scope (jQuery container)
        for(i = 0, l = array.length; i < l; i++) {
            console.log('Registering new "crossPage" links matching selector "' + array[i].selector + '" within scope', array[i].scope);
            array[i].scope.on('click', array[i].selector, receive_page_request);
        }
    }
    
    
    
    // unregister (local origin) cross-page links. This is used when content of #main is about to be replaced. We should properly detach any event handlers on these buttons before they're wiped from the DOM.
    
    // This function is later revealed as public method of the ui Object
    
    function unregister_page_links( array ) {
        var i, l;
        
        // for each array item (Object) register Object.selector (string) within Object.scope (jQuery container)
        for(i = 0, l = array.length; i < l; i++) {
            console.log('unregistering "crossPage" links matching selector "' + array[i].selector + '" within scope', array[i].scope);
            array[i].scope.off('click', array[i].selector);
        }
    }
    
    
    
    // Actual cross-page / local-origin page links click handler. This is a private method of ui. Regarding elements referenced outside this closure, this handler can only be attached to those via the public API methods defined above to prevent unauthorized page requests.
    function receive_page_request ( e ) {
        
        // prevent default behaviour: we are doing AJAX shizzle instead!
        e.preventDefault();
        
        // if the clicked button references a different than the current page:
        if(!(options.currentPage === this.dataset.page)) {
            
            // update the currentPage value
            options.currentPage = this.dataset.page;
            options.previousPagegroup = options.currentPagegroup;
            options.currentPagegroup = this.dataset.pagegroup;
            
            console.log(options);
            // request the page
            request_page( this, true, false );
        }
    }
    
	
    
    
    // Request the page to be loaded. A request object which the request method
	// (inside module.requests.js) understands, is constructed. the 'pageParams'
	// object contains data for the response handlers, and is attached as 'passThru'
    // to the request object. The request handler will pass this forth to the XHR response handler,
    // wrapped in a Promise.

	function request_page ( eventTarget, delay, pop ) {
		
		var url = eventTarget.href;
        
        console.log('%c preparing XHR for url: ' + url, 'background: #361f45; color: #c26ff8');

        
        // check if there is already a querystring in the url...
        // if so, extend the querystring (&), else start querystring (?)
        url += url.indexOf('?') != -1 ? '&' : '?';
        
        // extend url with querystring so PHP knows its dealing with an AJAX request.
        url += 'ajax=true';
        
        ///// START PROCEDURE /////
        
        unregister_page_links([
            { scope: $wrapper, selector: '.crossPage' }
        ]);
        
        var pageParams = {
            name: eventTarget.dataset.page,
            pagegroup: eventTarget.dataset.pagegroup,
            href: eventTarget.href
        }
        
        console.log('Constructed pageParams for new request: ', pageParams);
        
        // new history entry if this function was not fired as a result of a history pop
        if(!pop) history.pushState(pageParams, pageParams.name, eventTarget.href);
        
        // fadeOut the current content
		$wrapper.addClass('faded');
        
		// set up the request parameters, and info needed by the callback function:
		var req = {
			
            // identifiers for the request receiver to know which function to call
			Method		: 	'GET', 
			Type		:   'page',
			
            // request url
            url			:	url,
            
            // specific to XHR of type 'page': data required for the response handlers
			passThru	: 	pageParams
		};
        
        // if a delayed pageload was requested along with the page, extend passThru with a promise that resolves
        // as soon as the delay expired. Else extend with a immediately resolved promise.
        req.passThru.delayPromise = delay ? delayedPromise(220) : Promise.resolve(true);
        
		// publish the new request, passing the req Object. The request performer should be subscribed to the radio channel.
		r.publish('newXHR', req);
	}

    

//////////////////////////// page response handler /////////////////////////////

	// After the page request publication, the request method returns a promise
	// to the radio, which broadcasts this promise over the following channel.

	r.subscribe('XHRpromise:page',
		function load_page( data ) {

            // 'data' is the object passed by the request handler, and should contain all data needed.
            // It is referenceable (is dat een woord?) from within the scopes of the .then callback functions. 
			Promise.all( [
				// when the response is ready ...
				data.responsePromise,
				// ... and the delay has expired ...
				data.passThru.delayPromise
			] )

			.then(
				function ( values ){
                    
                    // values is an array filled with the fulfillment values of the promises wrapped in  the Promise.all call
                    
                    
                    // let the application know the current container is about to be wiped
                    r.publish('unloadMainContent');
                    
					// ... scroll up ... 
					$htmlbody.scrollTop(0);
					
                    console.log('%c Promises resolved; Replacing main content.', 'background: #006030; color: #00ff9d');
                    
                    // ... then append the markup ...
					$wrapper.html(values[0]).removeClass('faded');
					// ... if request wasn't performed by a history pop ...
                    
                    register_page_links([
                        { scope: $wrapper, selector: '.crossPage' }
                    ]);
                    
					// ... next, update the menu ...
					updateMenuState( data.passThru.pagegroup );
					
                    
				},

				function ( err ) {
                    $wrapper.removeClass('faded');
                    console.log('%c Promise(s) rejected; Failed replacing main content!', 'background: #340000; color: #ff0000');
                    
				}
			);
		}
	);


    
///////////////////////// update menu on page switch ///////////////////////////

    var $headerListItems = $menu.find('li'),
        $mobileListItems = $mobilePages.find('li'),
        $footerListItems = $footerPages.find('li');
    
	function updateMenuState( newPageGroup ){
		
        if( options.previousPagegroup !== options.currentPagegroup) {
            // adjust menu
            $headerListItems.removeClass('current');
            $menu
                .find('a[data-pagegroup="' + newPageGroup + '"]')
                .closest('li')
                    .addClass('current');
            
            $mobileListItems.removeClass('current');
            $mobilePages
                .find('a[data-pagegroup="' + newPageGroup + '"]')
                .closest('li')
                    .addClass('current');
            

            $footerListItems.removeClass('current');
            $footerPages
                .find('a[data-pagegroup="' + newPageGroup + '"]')
                .closest('li')
                    .addClass('current');
            
            console.log('%c Updating appearance of header and footer menus.', 'background: #8CC760; color: #222222');
        } else {
            console.log('%c appearance of header and footer menus already accurate. No update required.', 'background: #8CC760; color: #222222');

        }
        
        options.previousPagegroup = null;
	}
    
    
    
    var $headerLinks = $menu.find('a'),
        $footerLinks = $footerPages.find('a'),
        $mobileLinks = $mobilePages.find('a');
    
    r.subscribe('newReferrerLocation', function updateRoot ( uriComponent ){
        
        if(uriComponent !== options.toRoot) {
            console.log('%c updating permanent links to match new referrer', 'color: #ffc400; background: #222222');

            // update hrefs on userlinks, including cart. Since cart items can change during use, the collection must be constructed at calltime:

            var $userLinks = $userMenu.find('a');

            $userLinks.each(function(){
                var el = $(this);
                el.attr('href', uriComponent + el.data('href'));
            });       

            // update hrefs on headerlinks
            $headerLinks.each(function(){
                var el = $(this);
                el.attr('href', uriComponent + el.data('href'));
            });

             // update hrefs on headerlinks
            $mobileLinks.each(function(){
                var el = $(this);
                el.attr('href', uriComponent + el.data('href'));
            });

            // update hrefs on footerlinks
            $footerLinks.each(function(){
                var el = $(this);
                el.attr('href', uriComponent + el.data('href'));
            });

            // update global options object
            w.options.toRoot = uriComponent;
            console.log('%c Referrer: updated.', 'background: #006030; color: #00ff9d');

            r.publish('referrer:accurate', uriComponent);
        } else {
            console.log('%c No referrer update required. Current value is already accurate.', 'color: #ffc400; background: #222222');
            r.publish('referrer:accurate', uriComponent);
        }
    });

////////////////////// request previous or next page ///////////////////////////

	// When user clicks the back / forward button (popstate event), request the 
	// page that is stored in the popped state object.

	w.onpopstate = function handlePop ( e ) {
        console.log('Popstate event!');
        
        // For now, emulate an event target so we are able to use the link click handler. (Subject to change)
		var pageObj = {
				dataset: {
                    page	: history.state.name,
                    pagegroup : history.state.pagegroup
                },
				href	: history.state.href
			};

		request_page( pageObj, true, true );
	};

///////////////////////////// interface /////////////////////////////

    
	function getWindowHeight() {
		return $window.height();
	}

    // set a minimum height for the main wrapper to prevent the footer from jumping
    // up and down when content is being replaced, and document reflow occurs.
    
	function setContentHeight() {
		var windowHeight = getWindowHeight();
		$('#main').css('min-height', windowHeight - 80);
	}
    
    
////////////////////////////// Mobile Menu //////////////////////////
    
    var $menuToggle = $('#menuToggle'),
        burger = $menuToggle.find('.burger'),
        $mobilePages = $('#mobilePages');

    
    function update_panelHeight() {
        $mobilePages.css('height', window.innerHeight);
    }
    
    update_panelHeight();
    
    function hideMobileMenu(){
        burger.removeClass('open');
        $mobilePages.removeClass('active');
    }
    
    function showMobileMenu(){
        burger.addClass('open');
        $mobilePages.addClass('active');
    }
    
    $window.on('resize', update_panelHeight);
    
    $menuToggle.on('click', function showMenu () {
        $mobilePages.hasClass('active') ? hideMobileMenu() : showMobileMenu();
    });
    
    
    $mobilePages
        .on('click', 'a', hideMobileMenu);
    
    $wrapper
        .on('click', hideMobileMenu);
      
      
      
///////////////////////// Header shrink-logo animation /////////////////////////

    var currentScroll,
        $header = $('#pageHeader');
    
    $window.scroll(function(){
            currentScroll = $window.scrollTop();
            
            if(currentScroll > 10) $header.addClass('shrinked');
            else $header.removeClass('shrinked');
        });
    

    
    
    
/////////////////////////// Header cart interaction ///////////////////////////
    
    (function initCartWidget () {

        
        var $headerCart = $('#headerCart'),
            $cartWidget = $('#cartWidget'),
            
            cartTimeOutID;
        
        function showCartWidget() {
            if(cartTimeOutID) w.clearTimeout(cartTimeOutID);
            $cartWidget.fadeIn(200);
        }
        
        function hideCartWidget() {
            cartTimeOutID = w.setTimeout(function(){
                $cartWidget.fadeOut(200);
            }, 2000);
        }
        
        $headerCart
            .on('mouseenter', showCartWidget)
            .on('mouseleave', hideCartWidget);
        
        $cartWidget
            .on('mouseenter', showCartWidget)
            .on('mouseleave', hideCartWidget);
    }()); 
    
    
    
	////////// public API //////////

	var publicAPI = {
        register_page_links: register_page_links,
        unregister_page_links: unregister_page_links
	};
    
	return publicAPI;
    
})(window, document, jQuery, radio, animations);