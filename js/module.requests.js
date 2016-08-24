(function( r ){

	///// REQUEST HANDLERS /////
    
	var request = {
		// GET method
		GET: {
			json: function ( data ) {
				//-----------------------------------------------//
				var p = new Promise(function(resolve, reject){
					var xhr = new XMLHttpRequest();
					xhr.onload = function() {
						resolve(this.responseText);
					};
					xhr.open('GET', data.url, true);
					xhr.send(null);
					xhr = null;
				});
				// broadcast the promise
				r.publish('XHRpromise:JSON:' + data.ID, p);
				//-----------------------------------------------//
			},
            
            markup: function ( data ) {
				//-----------------------------------------------//
				var p = new Promise(function(resolve, reject){
					var xhr = new XMLHttpRequest();
					xhr.onload = function() {
						resolve(this.responseText);
					};
					xhr.open('GET', data.url, true);
					xhr.send(null);
					xhr = null;
				});
				// broadcast the promise
				r.publish('XHRpromise:markup:' + data.ID, p);
				//-----------------------------------------------//
			},

			page: function ( data ) {
				//-----------------------------------------------//
				var responsePromise = new Promise(function(resolve, reject){
					
					var xhr = new XMLHttpRequest();
					
					xhr.onload = function() {
						resolve(this.responseText);
					};
					xhr.open('GET', data.url, true);
					xhr.send(null);
					xhr = null;

				});

				// broadcast the promise
				
				r.publish('XHRpromise:page',
					{
						responsePromise	:	responsePromise,
						passThru		:	data.passThru
					}
				);		
				//-----------------------------------------------//
			}
		},

		POST: {

		}
	};
	
	///// REQUEST RECEIVER /////

	function receive( data ) {
		request[ data.Method ][ data.Type ](data);
	}

	///// RADIO SUBSCRIPTION /////

	r.subscribe('newXHR', receive);
})( radio );