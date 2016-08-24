// MME 15-B MM-B Jeffrey Westerkamp //

/*
Revealing module for adding support for multiple createJS stages on a single page:

When multiple canvases are just doing their thing there's no problem at all, but when any of them references
one of the global variables set by default by Flash/Animate at runtime (in an event listener for example)
we run into problems when a future init function overrides the value of 'stage' or 'exportroot' associated with that event.

The last initialised canvas' stage or exportroot will always be referenced by these global namespaces.

Still, neither the standard export format of Animate, nor the createJS API seem to have proper support for this issue,
so let's write something that actually works.
*/

var animations = (function (w, d, r) {
    
    'use strict';
    
    var myLib = {},
        stages = {},
        fps = 30;
    
    // Modified Animate export
    createjs.MotionGuidePlugin.install();
    createjs.Ticker.setFPS(fps);
    
    
    
    ///// Header logo /////
    
    myLib.turningPage = {
        stage: new createjs.Stage(document.getElementById("headerLogo")),
        rebindStage : function() {
            var s = this.stage;
            s = new createjs.Stage(document.getElementById("drivingCar"));
            s.removeAllChildren();
            s.addChild(this.exportRoot);
            s.update();
        },
        exportRoot: undefined,
        init: function () {

            var turningPage = this;
            
            // Modified Animate export
            this.exportRoot = new lib_turningPage.turningPage();
            this.stage.addChild(this.exportRoot);
            this.stage.update();

            createjs.Ticker.addEventListener("tick", turningPage.stage);
        }
    };
    
    stages.turningPage = myLib.turningPage.stage;
    
    
    ///// Driving car (homepage) /////
    
    // This one was a bit trickier because it has to be reloaded everytime a user returns to the homepage. Because the website is AJAX powered, old js objects remain in memory, so let's use as many of those as possible, instead of duplicating data and leaking memory doing so:
    
    // THE IMPORTANT PART //
    // - the library is only loaded once as part of the footer
    // - the exportroot of the library is only constructed once, and is being referenced by all stage instances over time.

    myLib.drivingCar = {

        element     : d.getElementById("drivingCar"),
        stage       : null,
        exportRoot  : undefined,
        
        // assign a new createJS stage 'instance' to this.stage if the canvas container exists
        createStage : function(){
            if(d.getElementById('drivingCar')) {
                this.element = d.getElementById('drivingCar');
                this.stage = new createjs.Stage(this.element);
            }
        },
        
        // rebind the stage to the library and add event listener
        rebindStage : function() {
            
            // if exportroot is not assigned a value yet, attach library. 
            // (this happens when the application was bootstrapped on another page than the homepage.
            // In that case, init() was never called. )
            this.exportRoot = this.exportRoot || new lib_drivingCar.drivingCar();
            this.createStage();
            
            var drivingCar = this,
                s = this.stage;
            
            s.removeAllChildren();
            s.addChild(this.exportRoot);
            s.update();
            
            createjs.Ticker.addEventListener("tick", drivingCar.stage);
        },
        
        init        : function () {

            var drivingCar = this;

            this.exportRoot = new lib_drivingCar.drivingCar();
            this.stage.addChild(this.exportRoot);
            this.stage.update();

            createjs.Ticker.addEventListener("tick", drivingCar.stage);
        }
    }
    
    myLib.drivingCar.createStage();
    r.subscribe('rebindStage:drivingCar', myLib.drivingCar.rebindStage.bind(myLib.drivingCar));
    
    stages.drivingCar = myLib.drivingCar.stage;
    
    
    
    
    // Canvas init function takes the array of canvases defined in the global page options object, and calls the required init functions in the myLib object
    var init = function ( array ) {

            var i, l;
            for (i = 0, l = array.length; i < l; i++) {
                myLib[array[i]].init();
            }
        },
        
        rebind = function( canvas ) {
            myLib[ canvas ].rebindStage();
        };
    
    // Return Public API for application to call initialisation of canvas elements, and for correct references to createJS stages used by canvas libraries their custom functions
    var publicAPI = {
        
        // These properties should be bound to a var 'stage' in the respective canvas libraries, when 'stage' namespace is used in custom scripts created in Animate. 
        stages: stages,
        
        // init function to be called at DOM Ready
        init: init,
        
        rebind: rebind
    };
    
    return publicAPI;
    
}(window, document, radio));