///// MME 15-B MM-B Jeffrey Westerkamp /////
///// Revealing module 

var radio = (function () {
    
    'use strict';
        
    // subscribe function lets functions register themselves to custom events. As soon there is one subscriber, a broadcast for that even may take place. If there is no subscriber to a publish request, no publish will take place.
    
    var subscribe = function (channel, fn) {
        
        // if a subscription applies to a not-yet-existing channel, create it.
        if (!this.channels[channel]) this.channels[channel] = [];
        
        var index = this.channels[channel].length;
        
        console.log('%c Function ' + fn.name + ' subscribed to radio channel ' + channel + ' at indx ' + index + '. ', 'background: #bada55; color: #222');
        
        // add the callback function to the array of subscribers. a context is automatically passed for when a radio is installed as feature to another object.
        this.channels[channel].push({ context: this, callback: fn });
        
        // return an object that can be used to unsubscribe this entry.
        return {
            channel: channel,
            index: index
        };
    },
 
    unsubscribe = function ( query ) {
        
        var subscription = this.channels[query.channel][query.index];
        
        console.log('%c Function ' + subscription.callback.name + ' unsubscribed from radio channel ' + query.channel + ' at indx ' + query.index + '. ', 'background: #191919; color: #b52c0b');
        
        this.channels[query.channel][query.index] = null;
        
        return this;
    },
        
    // Publish function first checks if there is anyone subscribed to a message requested to publish. If not, it returns, else it 'broadcasts' the message for anyone listening. (the entire channel array with callbacks is invoked)
    publish = function (channel) {
        
        // if a channel doesn't exist (has no subscribers), return.
        if (!this.channels[channel]) return false;
        
        console.log('%c Radio broadcasts "' + channel + '". ', 'background: #222; color: #bada55');
        
        // get all arguments passed when called and 'pop' the first (the channel name)
        var args = Array.prototype.slice.call(arguments, 1);
        
        // call each subscriber to tell the news
        for (var i = 0, l = this.channels[channel].length; i < l; i++) {
            
            var subscription = this.channels[channel][i];
            
            // if this index is not null (unsubscribed) && it has a method 'callback'
            if ( subscription && typeof(subscription.callback) == 'function') {
                
                // Call the supplied callback, apply the context of the subscription, and pass the args.
                subscription.callback.apply(subscription.context, args);
            }
        }
        return this;
    };
 
    
    // Public API for all other scripts to interact with:
    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
 
})();