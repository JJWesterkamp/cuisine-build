(function (window, document, $, r) {

    'use strict';
    
    
    var maps,
        fadeSpeedMs = 150,
        
        attachMap = function () {
        
            var $container = $(this),
                mapName = this.dataset.mapname,
                $mapImage = $container.find('.mappedImage'),
                $underlay = $container.find('.underImg'),
                $map = $container.find('map'),


                // timeout boolean flag. we don't want timeOut objects stacking
                timeOut = false,

                // newSource is bound in real time because multiple source update requests can occur during one transition interval
                // so we want a dynamically updatable, realtime injectable, and always accessible source reference.
                newSource = '',

                // function expression variables to shut up JSLint and code highlighting. They're defined now!
                preloadImages,
                set_newSource,
                bindMapEvents;

            console.log('%c Registering and attaching image map DOM container for map "' + mapName + '": ', 'background: #202e33; color: #55bbda');
            console.log(this);

                // Image map: importing data and define methods.
            var MAP = {

                    data: window.imageMaps[mapName],
                
                    // Event handlers for user interaction with map areas 
                    enterArea: function () {
                        updateInfo( this.dataset.area);
                        set_newSource(this.dataset.area);

                        // always assign the source matching the latest event, regardless of which event called this function. When a transition is already running, this image swap is noticable, because the swap never waits for a transition to finish. Let's rather block initialization of a new transition when one is already running. A measured decision giving priority to usability and responsiveness over animation quality. It is in this case nearly impossible to deliver both at their best.
                        $mapImage.attr('src', newSource);
                        MAP.startTransition();
                    },

                    // Conditionally start the image map fade transition. This functionality uses two images.
                    // In this first part the mapped image has an opacity of 0 initially, and has the
                    // new image source by the time this function is called. addClass('fadeIn') lets
                    // CSS do its magic with a transition. Lastly, a timeout is set with finalizeTransition
                    // as callback.
                    startTransition: function () {
                        if (!timeOut) {
                            timeOut = true;
                            $mapImage.addClass('fadeIn');

                            window.setTimeout(this.finalizeTransition, fadeSpeedMs);
                        }
                    },

                    // When the timeout has expired the new mapped image should be fully visible.
                    // That's where this function comes in. The new source is copied to the image directly
                    // behind the mapped image, so that the mapped image can become transparent, and the whole
                    // sequence can now start over, as soon as timeOut is flagged false. There is intentionally
                    // no queue waiting for this flag: functionality over visuals is the only way to go with
                    // image maps...
                    finalizeTransition: function () {
                        $underlay.attr('src', newSource);
                        $mapImage.removeClass('fadeIn');
                        timeOut = false;
                    }
                };

            MAP.info = MAP.data.areas;
            MAP.imgFolder = MAP.data.imgFolder;
            MAP.areas = Object.keys(MAP.info);
            
            // define initial state for the map
            MAP.data.areas.initial = {
                
                en: '<span class="placeholder">geen selectie gemaakt.</span>', 
                nl: '<span class="placeholder">beweeg met je muis over de afbeelding...</span>', 
                usedFor: []
            
            };
            
            console.log('%c Finished importing data and registering methods for map "' + mapName + '": ', 'background: #202e33; color: #55bbda');
            console.log(MAP);


            var infoNodes = {
                en: $container.find('.en'),
                nl: $container.find('.nl'),
                uses: $container.find('.uses')
            };
            
            function updateInfo( area ) {
                infoNodes.en.html(MAP.data.areas[area].en);
                infoNodes.nl.html(MAP.data.areas[area].nl);
                infoNodes.uses.html(MAP.data.areas[area].usedFor.join(', '));
            }
            
            
            
            // I don't like huge lists of literal filepath/name notation,
            // so let's compute the lot using the MAP object again.
            // Consistent filenames, data attributes and JS object keys do the trick here

            // let's subscribe to the 'referrer:updated' broadcast, so that we are going to use the right value for options.toRoot:
            function preloadImages() {

                // procedural updated path string for reference by for loops
                var path,

                // iterator variables
                    i,
                    l,

                // array with paths to preload.
                    imagePaths = [],

                // use keys of MAP.areas object to construct image filenames
                    areas = MAP.areas,

                // image objects array
                    images = [];



            // push 'map section image' paths to array

                path = MAP.imgFolder;

                for (i = 0, l = areas.length; i < l; i++) {
                    imagePaths.push(options.toRoot + path + areas[i] + '.jpg');
                }

            // fill images with image objects
                for (i = 0, l = imagePaths.length; i < l; i++) {
                    images[i] = new Image();
                    images[i].src = imagePaths[i];
                }

                console.log('%c Finished preloading images for map "' + mapName + '": ', 'background: #2f261e; color: #ff9436');
                console.log(images);
            };
            
            var referrerSubscr = r.subscribe('referrer:accurate', preloadImages),
                unloadSubscr;
            
            
            function unloadMap() {
                
                // unsubscribe image preloader
                r.unsubscribe(referrerSubscr)
                 .unsubscribe(unloadSubscr);
                
                // detach event handlers
                $map.off('mouseenter', 'area')
                    .off('mouseleave', 'area')
                    .off('click', 'area');
                
                $container.off('mouseenter')
                          .off('mouseleave'); 
            }
            
            unloadSubscr = r.subscribe('unloadMainContent', unloadMap);
            
            // assign a new source to newSource variable. This way we always assign the source
            // corresponding the latest user action to the image.src property, regardless of contents
            // of the javascript event queue.
            set_newSource = function (imgFileName) {

                // call with filename without extension
                newSource = options.toRoot + MAP.imgFolder + imgFileName + '.jpg';
            };

            $container.on('mouseenter', function () {

                // bind event handlers for map areas
                $map
                    .on('mouseenter', 'area', MAP.enterArea)
                    .on('click', 'area', function (e) {
                        e.preventDefault();
                    });

            }).on('mouseleave', function () {
                updateInfo('initial');
                set_newSource('initial');

                // Note of the previous method 'enterArea' is just as true here...
                $mapImage.attr('src', newSource);
                MAP.startTransition();
                
                $map
                    .off('mouseenter', 'area')
                    .off('click', 'area');

            });
        };
    
    function initMaps() {
        var maps = document.getElementsByClassName('imageMap'), i, l;
        
        for (i = 0, l = maps.length; i < l; i++) {
            attachMap.call(maps[i]);
        }
    }
    

    
    $(document).ready(initMaps);
    
}(window, document, jQuery, radio));
