(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2000,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96C44A").s().p("AguAuQgTgSAAgcQAAgaATgTQAUgUAaAAQAcAAATAUQATATAAAaQAAAcgTASQgTAUgcAAQgaAAgUgUg");
	this.shape.setTransform(27.3,-21.3,0.582,0.582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAfAAAqQAAArgfAfQgeAfgsAAQgqAAgfgfg");
	this.shape_1.setTransform(20,13.6,0.582,0.582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#96C44A").s().p("AhEBFQgdgdAAgoQAAgnAdgcQAdgdAngBQAoABAdAdQAcAcABAnQgBAogcAdQgdAdgogBQgnABgdgdg");
	this.shape_2.setTransform(-23.9,8.7,0.582,0.582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96C44A").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAXQgXAYghAAQggAAgXgYg");
	this.shape_3.setTransform(-20,-12.4,0.582,0.582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaAAQAbAAATAUQATATAAAaQAAAbgTATQgTAUgbAAQgaAAgTgUg");
	this.shape_4.setTransform(-7.1,-11.9,0.582,0.582);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AgvAxQgVgUAAgdQAAgcAVgTQATgVAcAAQAcAAAVAVQAUATAAAcQAAAdgUAUQgVAUgcAAQgcAAgTgUg");
	this.shape_5.setTransform(16,-21.6,0.582,0.582);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96C44A").s().p("AgyA0QgWgWAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgVgVg");
	this.shape_6.setTransform(7.3,-34,0.582,0.582);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("AhDBEQgcgcAAgoQAAgmAcgdQAcgcAnAAQAnAAAdAcQAcAdAAAmQAAAogcAcQgdAcgnAAQgmAAgdgcg");
	this.shape_7.setTransform(-5.4,-36.5,0.582,0.582);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A954").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
	this.shape_8.setTransform(25.7,-20.1,0.582,0.582);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A954").s().p("AhJBKQgfgfAAgrQAAgrAfgeQAegfArAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgrAAgegfg");
	this.shape_9.setTransform(18.4,14.9,0.582,0.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51A954").s().p("AhDBFQgdgdAAgoQAAgnAdgdQAcgcAnAAQAoAAAdAcQAcAdAAAnQAAAogcAdQgdAcgoAAQgnAAgcgcg");
	this.shape_10.setTransform(-25.5,10,0.582,0.582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51A954").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAXQgXAYghAAQggAAgXgYg");
	this.shape_11.setTransform(-21.6,-11.1,0.582,0.582);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51A954").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_12.setTransform(-8.7,-10.6,0.582,0.582);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51A954").s().p("AgvAwQgVgUAAgcQAAgbAVgUQAUgVAbAAQAcAAAUAVQAVAUAAAbQAAAcgVAUQgUAVgcAAQgbAAgUgVg");
	this.shape_13.setTransform(14.4,-20.3,0.582,0.582);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51A954").s().p("AgyA0QgWgWAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgVgVg");
	this.shape_14.setTransform(5.7,-32.7,0.582,0.582);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51A954").s().p("AhDBEQgcgcAAgoQAAgmAcgdQAcgcAnAAQAnAAAdAcQAcAdAAAmQAAAogcAcQgdAcgnAAQgnAAgcgcg");
	this.shape_15.setTransform(-7,-35.3,0.582,0.582);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#766F6A").s().p("AgKF9IAFkXIgBgBQgPgRgMgLQgRgTghgUQgKALgSAIQgWALgVAAQgcAEgcgFQgagFACgFIAYABQAeABAYgFQATgCARgJQAMgHAIgIQgOgJgQgJQgegNgVgcQgUgbgDgaQgEgUABgUIACgPQACgCAFAvQAOA1AmAbQgEgPAEgRQAGgVAQgJQAPgIAFgaQACgXACAAIADAZQgCAegYARQgMALADAWQACAKAGARIABAAQBKAiAdAeQAGAEAKAKIAFjPQgGgKgbhMQgSgKgMgNQgJgMgEgQQgEgPADABIAFAMQAGAQAJAJQAJAIALAGQgVg7gJgmQgMgvAIgCQgGACAeBUQAbBKAWA3IAAgCQgDg8AAgpQgBglAWgiQAMgRAMgJQgJALgKASQgVAjAEAhQABA2AFA1QAEAxADBkIAOgUQARgVAOgHIAZgOQAPgHAJgHQAMgpgFghQgJgaAEgdQAEgcAHAFQgEABABAWQAAAbAKAaQAHAZgEAfQArgqAPgwQAGgYARgNQAPgNAAAIQgVAIgJAlQgFAbgSAeQgUAfgaAYIgCACIAAAAIgBAAIg5AnQgdATgGAUQgLASgEARQgBACACCNQAVgWAXgPQAPgIAUgFQAKgDAVgEQALgBAIgGIAHgFQgDAQgUAGIgeAKQgSAHgMAIQgaAUgaAjIACCtg");
	this.shape_16.setTransform(2.5,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-42.1,62.5,84.3);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96C44A").s().p("AguAuQgTgSAAgcQAAgaATgTQAUgUAaAAQAcAAATAUQATATAAAaQAAAcgTASQgTAUgcAAQgaAAgUgUg");
	this.shape.setTransform(27.4,-21.3,0.582,0.582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAfAAAqQAAArgfAfQgeAfgsAAQgqAAgfgfg");
	this.shape_1.setTransform(20,13.6,0.582,0.582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#96C44A").s().p("AhEBFQgdgdAAgoQAAgnAdgcQAdgdAngBQAoABAdAdQAcAcABAnQgBAogcAdQgdAdgogBQgnABgdgdg");
	this.shape_2.setTransform(-23.9,8.7,0.582,0.582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96C44A").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAXQgXAYghAAQggAAgXgYg");
	this.shape_3.setTransform(-20,-12.4,0.582,0.582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaAAQAbAAATAUQATATAAAaQAAAbgTATQgTAUgbAAQgaAAgTgUg");
	this.shape_4.setTransform(-7.1,-11.9,0.582,0.582);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AgvAxQgVgUAAgdQAAgcAVgTQATgVAcAAQAcAAAVAVQAUATAAAcQAAAdgUAUQgVAUgcAAQgcAAgTgUg");
	this.shape_5.setTransform(16.1,-21.6,0.582,0.582);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96C44A").s().p("AgyA0QgWgWAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgVgVg");
	this.shape_6.setTransform(7.3,-34,0.582,0.582);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("AhDBEQgcgcAAgoQAAgmAcgdQAcgcAnAAQAnAAAdAcQAcAdAAAmQAAAogcAcQgdAcgnAAQgmAAgdgcg");
	this.shape_7.setTransform(-5.4,-36.5,0.582,0.582);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A954").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
	this.shape_8.setTransform(25.8,-20.1,0.582,0.582);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A954").s().p("AhJBKQgfgfAAgrQAAgrAfgeQAegfArAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgrAAgegfg");
	this.shape_9.setTransform(18.5,14.9,0.582,0.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51A954").s().p("AhDBFQgdgdAAgoQAAgnAdgdQAcgcAnAAQAoAAAdAcQAcAdAAAnQAAAogcAdQgdAcgoAAQgnAAgcgcg");
	this.shape_10.setTransform(-25.5,10,0.582,0.582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51A954").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAXQgXAYghAAQggAAgXgYg");
	this.shape_11.setTransform(-21.5,-11.1,0.582,0.582);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51A954").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_12.setTransform(-8.7,-10.6,0.582,0.582);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51A954").s().p("AgvAwQgVgUAAgcQAAgbAVgUQAUgVAbAAQAcAAAUAVQAVAUAAAbQAAAcgVAUQgUAVgcAAQgbAAgUgVg");
	this.shape_13.setTransform(14.5,-20.3,0.582,0.582);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51A954").s().p("AgyA0QgWgWAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgVgVg");
	this.shape_14.setTransform(5.8,-32.7,0.582,0.582);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51A954").s().p("AhDBEQgcgcAAgoQAAgmAcgdQAcgcAnAAQAnAAAdAcQAcAdAAAmQAAAogcAcQgdAcgnAAQgnAAgcgcg");
	this.shape_15.setTransform(-7,-35.3,0.582,0.582);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#766F6A").s().p("AgKF9IAFkXIgBgBQgPgRgMgLQgRgTghgUQgKALgSAIQgWALgVAAQgcAEgcgFQgagFACgFIAYABQAeABAYgFQATgCARgJQAMgHAIgIQgOgJgQgJQgegNgVgcQgUgbgDgaQgEgUABgUIACgPQACgCAFAvQAOA1AmAbQgEgPAEgRQAGgVAQgJQAPgIAFgaQACgXACAAIADAZQgCAegYARQgMALADAWQACAKAGARIABAAQBKAiAdAeQAGAEAKAKIAFjPQgGgKgbhMQgSgKgMgNQgJgMgEgQQgEgPADABIAFAMQAGAQAJAJQAJAIALAGQgVg7gJgmQgMgvAIgCQgGACAeBUQAbBKAWA3IAAgCQgDg8AAgpQgBglAWgiQAMgRAMgJQgJALgKASQgVAjAEAhQABA2AFA1QAEAxADBkIAOgUQARgVAOgHIAZgOQAPgHAJgHQAMgpgFghQgJgaAEgdQAEgcAHAFQgEABABAWQAAAbAKAaQAHAZgEAfQArgqAPgwQAGgYARgNQAPgNAAAIQgVAIgJAlQgFAbgSAeQgUAfgaAYIgCACIAAAAIgBAAIg5AnQgdATgGAUQgLASgEARQgBACACCNQAVgWAXgPQAPgIAUgFQAKgDAVgEQALgBAIgGIAHgFQgDAQgUAGIgeAKQgSAHgMAIQgaAUgaAjIACCtg");
	this.shape_16.setTransform(2.5,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-42.1,62.5,84.3);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583936").s().p("AAkFBQAVkngQgbQgXgogggdQgogjgsgLQgMgCgogFQgGARgcAQQgdAQgcAZQgMANgIAJQATgjAhgZIAbgWQAKgIACgJQhggNhGgqQgxAthFAFIg7gDQBNgFAigPQAdgNAZgWQgngagkgnIA6ApQBFAsA0ALQgmgqgMgsIgPhhQgJg9gRgRIANAMQAOAUAHAhQAHAbAKBAQAQA8AuAwQBiAIAtAKQBTAUArAuQAHgUAAgZQADgygWgZQgHgHgwgnQgfgagMgfQgEgIgCgLQgPgRgwgjQgngdgFgMQgHgRAEgOIAFgLQgFATALAQQALAQAhAQQAjATATASIAIhGQADgegFgPIAGAOQAJAagDAjQgIBeArAfQAlAbATASQAiAgAFAaQAEgJADgTQAGgkgHgrQgCgMgehmQgWhKAGgqQADgSAEgQIAQg4IAIgaIgEAdQgFAjgJAgQgIAjAOA5QANAtAQAgQAPAcAKBAQAJA9gJAaQAcg+AZgfQAUgWADgLQACgGACguQAFhRACgJQAKg1AmgcIgPAVQgRAYgDALQgEATgEAdQgDAmAEATQAcglAsgVQArgVAighQAegdAQgiIgLAZQgVArgTARQgSARgeAQIgkAVQgLAIgQAQQgSAUgLAPQAAAlgYAqQgXAngKAWQgSAnAAAbQAFgJAKgMQAUgWAagLIBYgaQBBgTAXgPQAFg/AQgtQAOgmAdgZQAYgVAXgEIgdATQghAagLAkQgPAvgIA5IAxgyQAfgeAagFIgVAPQgZATgLAOQgTAbgIAKQgWAYgXALQA5AKAPABQA6AFAYgSIgQAOQgXANglgCQgtgCg/gLQgpAKgyAaQATAGAKAVQALAaAUAVQAYAZAXAFQgKAAgNgGQgcgMgVggQgXgkgZgMIgTAJQggARgPAdQgYAqABBQQACBRAXD4QATDbAHAsIixADQAOiNALiUg");
	this.shape.setTransform(-4.5,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AgRI5QgOgNgBgSQgIASgRAKQgSALgUAAQgcAAgUgSQgUgSgDgbQgRAVgaAAQgWAAgQgQQgQgQAAgWQAAgFACgJIgEgDQgWARgcAAQgiAAgYgYQgYgYAAgiQAAgTAHgQIgHgIQgJACgHAAQgWAAgQgPQgQgQAAgXQAAgQALgPIgCgCQgLADgLAAQgyAAgkgkQgjgjAAgzQAAggAQgcQAQgcAbgQQgVgPAAgZQAAgMAIgMQAIgMAMgGQgTgIgMgSQgMgRAAgWQAAgZAPgTQAPgTAXgGQgagXAAghQAAgfAVgVQAWgVAeAAQALAAAKADQgGgMAAgLQAAgUAQgPQAPgPAVAAQAGAAAJADQgCgGAAgHQAAgWAPgPQAPgPAWAAQATAAAQAOIAGgFIAAgEQAAgQALgMQALgLAQAAQAJAAAGADQgHgPAAgRQAAgfAWgWQAWgWAfAAQAVAAARALQARAKAKARQAEgPANgJQAMgKAQAAQATAAANAOQAOANAAATIAAABIAGAAQADgbATgTQATgSAcAAQAdAAAVAVQAVAVAAAdIAAAGIAEABQALgSAVAAQAQAAAMALQALALAAAQIAAADIADACQAJgQAPgKQAQgKASAAQAbAAAUAUQATATAAAbQAAASgKAQIAGAEQALgPAUAAQAQAAALALQALALAAAQQAAAMgGAJQAKgFAMAAQATAAANANQAOAOAAATQAAALgGALQAKgDAJAAQAeAAAUAVQAVAVAAAdQAAAVgLARQgKARgSAJIAFgBQAQAAALAMQALALAAAQQAAATgQAMIABAAQATAAANANQAOAOAAATIgBAKQARAJAKARQAKARAAASQAAAcgTAUQgSAVgcACQANALAAASQAAALgFAIQAQAHAKAOQAKAPAAASQAAAYgRARQgRARgXAAQgHAAgFgCIAAAFQAAAOgIAKQgJALgMADQAGANAAARQAAAfgWAWQgWAWgfAAQgTAAgQgJQAGAMAAAMQAAAWgPAQQgQAQgXAAQgUAAgQgOIACAKQAAAQgMALQgLAMgQAAQgLAAgKgHIACAQQAAAegVAUQgVAVgdAAQggAAgVgXQgOATgXAAQgQAAgNgKQgPASgWAAQgQAAgNgMg");
	this.shape_1.setTransform(0,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-76.4,120.6,152.8);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583936").s().p("AAkFBQAVkngQgbQgXgogggdQgogjgsgLQgMgCgogFQgGARgcAQQgdAQgcAZQgMANgIAJQATgjAhgZIAbgWQAKgIACgJQhggNhGgqQgxAthFAFIg7gDQBNgFAigPQAdgNAZgWQgngagkgnIA6ApQBFAsA0ALQgmgqgMgsIgPhhQgJg9gRgRIANAMQAOAUAHAhQAHAbAKBAQAQA8AuAwQBiAIAtAKQBTAUArAuQAHgUAAgZQADgygWgZQgHgHgwgnQgfgagMgfQgEgIgCgLQgPgRgwgjQgngdgFgMQgHgRAEgOIAFgLQgFATALAQQALAQAhAQQAjATATASIAIhGQADgegFgPIAGAOQAJAagDAjQgIBeArAfQAlAbATASQAiAgAFAaQAEgJADgTQAGgkgHgrQgCgMgehmQgWhKAGgqQADgSAEgQIAQg4IAIgaIgEAdQgFAjgJAgQgIAjAOA5QANAtAQAgQAPAcAKBAQAJA9gJAaQAcg+AZgfQAUgWADgLQACgGACguQAFhRACgJQAKg1AmgcIgPAVQgRAYgDALQgEATgEAdQgDAmAEATQAcglAsgVQArgVAighQAegdAQgiIgLAZQgVArgTARQgSARgeAQIgkAVQgLAIgQAQQgSAUgLAPQAAAlgYAqQgXAngKAWQgSAnAAAbQAFgJAKgMQAUgWAagLIBYgaQBBgTAXgPQAFg/AQgtQAOgmAdgZQAYgVAXgEIgdATQghAagLAkQgPAvgIA5IAxgyQAfgeAagFIgVAPQgZATgLAOQgTAbgIAKQgWAYgXALQA5AKAPABQA6AFAYgSIgQAOQgXANglgCQgtgCg/gLQgpAKgyAaQATAGAKAVQALAaAUAVQAYAZAXAFQgKAAgNgGQgcgMgVggQgXgkgZgMIgTAJQggARgPAdQgYAqABBQQACBRAXD4QATDbAHAsIixADQAOiNALiUg");
	this.shape.setTransform(-4.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AgRI5QgOgNgBgSQgIASgRAKQgSALgUAAQgcAAgUgSQgUgSgDgbQgRAVgaAAQgWAAgQgQQgQgQAAgWQAAgFACgJIgEgDQgWARgcAAQgiAAgYgYQgYgYAAgiQAAgTAHgQIgHgIQgJACgHAAQgWAAgQgPQgQgQAAgXQAAgQALgPIgCgCQgLADgLAAQgyAAgkgkQgjgjAAgzQAAggAQgcQAQgcAbgQQgVgPAAgZQAAgMAIgMQAIgMAMgGQgTgIgMgSQgMgRAAgWQAAgZAPgTQAPgTAXgGQgagXAAghQAAgfAVgVQAWgVAeAAQALAAAKADQgGgMAAgLQAAgUAQgPQAPgPAVAAQAGAAAJADQgCgGAAgHQAAgWAPgPQAPgPAWAAQATAAAQAOIAGgFIAAgEQAAgQALgMQALgLAQAAQAJAAAGADQgHgPAAgRQAAgfAWgWQAWgWAfAAQAVAAARALQARAKAKARQAEgPANgJQAMgKAQAAQATAAANAOQAOANAAATIAAABIAGAAQADgbATgTQATgSAcAAQAdAAAVAVQAVAVAAAdIAAAGIAEABQALgSAVAAQAQAAAMALQALALAAAQIAAADIADACQAJgQAPgKQAQgKASAAQAbAAAUAUQATATAAAbQAAASgKAQIAGAEQALgPAUAAQAQAAALALQALALAAAQQAAAMgGAJQAKgFAMAAQATAAANANQAOAOAAATQAAALgGALQAKgDAJAAQAeAAAUAVQAVAVAAAdQAAAVgLARQgKARgSAJIAFgBQAQAAALAMQALALAAAQQAAATgQAMIABAAQATAAANANQAOAOAAATIgBAKQARAJAKARQAKARAAASQAAAcgTAUQgSAVgcACQANALAAASQAAALgFAIQAQAHAKAOQAKAPAAASQAAAYgRARQgRARgXAAQgHAAgFgCIAAAFQAAAOgIAKQgJALgMADQAGANAAARQAAAfgWAWQgWAWgfAAQgTAAgQgJQAGAMAAAMQAAAWgPAQQgQAQgXAAQgUAAgQgOIACAKQAAAQgMALQgLAMgQAAQgLAAgKgHIACAQQAAAegVAUQgVAVgdAAQggAAgVgXQgOATgXAAQgQAAgNgKQgPASgWAAQgQAAgNgMg");
	this.shape_1.setTransform(0,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-76.4,120.6,152.8);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96C44A").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgXAWQgXAZg1AAQgxAAgYgUg");
	this.shape.setTransform(-14.7,-34.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRABIgBAAQhLAAglgfg");
	this.shape_1.setTransform(-20.2,-10.5,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgVQAZgRA2gIQA2gHAvASQAzAUgeAeQgfAhhHABIAAAAQhCAAgggbg");
	this.shape_2.setTransform(-24.8,13.2,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIAAAAQhCAAgggbg");
	this.shape_3.setTransform(21.4,22.4,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("Ah2AtQgkgeAhgfQAdgdBCgSQBCgSA5AUQA/AWgjAwQgkA0hWAKQgPACgQAAQg6AAgggcg");
	this.shape_4.setTransform(24.7,-5.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AhfAdQgegWAagUQAYgTA1gLQA1gLAvAOQA0AQgbAgQgdAjhGAFIgUABQgzAAgcgUg");
	this.shape_5.setTransform(20.7,-30.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("Ag6L+IAKmCIgDACQggAchPgDIhHgIQBUADAygSQAkgOAPgXIAFjEQgvAmhvgEIhlgLQBwAEBHgXQA1gRAZgfIAJj9IgCACQgrAohogEIhegMQBtAEBCgZQAxgTAUghQAFiFAGiFQgkAjhNgEIhGgMQCMAHAthGQAPkGAKAAQAKAAAMCzQAWAfA1gEQgMAFgPACQgeAEgRgOIAGB1QARAfAnASQAzAYBTgEQghAKgoACQhQAEgjgnQAHCSAFCXQBGBQCvgJQgoAMgyAEQhlAHg1gnIAJEXQBHBMCsgIQgnALgyAEQhkAIg1gmQAIEMAFDVg");
	this.shape_6.setTransform(-0.9,0,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gIQA3gHAuASQAzAUgeAeQgfAihHAAIAAAAQhDAAgfgbg");
	this.shape_7.setTransform(19.7,25.9,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A954").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgWAWQgYAZg1AAIAAAAQgyAAgXgUg");
	this.shape_8.setTransform(-16.4,-31.2,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A954").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRAAIgBAAQhLAAglgeg");
	this.shape_9.setTransform(-22,-7,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIgBAAQhCAAgfgbg");
	this.shape_10.setTransform(-26.6,16.6,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51A954").s().p("Ah2AtQgkgfAhgeQAdgdBCgSQBCgSA5AUQA/AWgiAwQgkAzhXAKQgQACgPAAQg6AAgggbg");
	this.shape_11.setTransform(22.9,-1.9,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51A954").s().p("AhfAcQgegVAagUQAYgUA1gLQA1gLAvAPQA0AQgbAgQgdAjhGAFIgTABQg0AAgcgVg");
	this.shape_12.setTransform(19,-27.1,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-60,71,120.1);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96C44A").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgXAWQgXAZg1AAQgxAAgYgUg");
	this.shape.setTransform(-14.7,-34.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRABIgBAAQhLAAglgfg");
	this.shape_1.setTransform(-20.2,-10.5,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgVQAZgRA2gIQA2gHAvASQAzAUgeAeQgfAhhHABIAAAAQhCAAgggbg");
	this.shape_2.setTransform(-24.8,13.2,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIAAAAQhCAAgggbg");
	this.shape_3.setTransform(21.4,22.4,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("Ah2AtQgkgeAhgfQAdgdBCgSQBCgSA5AUQA/AWgjAwQgkA0hWAKQgPACgQAAQg6AAgggcg");
	this.shape_4.setTransform(24.7,-5.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AhfAdQgegWAagUQAYgTA1gLQA1gLAvAOQA0AQgbAgQgdAjhGAFIgUABQgzAAgcgUg");
	this.shape_5.setTransform(20.7,-30.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("Ag6L+IAKmCIgDACQggAchPgDIhHgIQBUADAygSQAkgOAPgXIAFjEQgvAmhvgEIhlgLQBwAEBHgXQA1gRAZgfIAJj9IgCACQgrAohogEIhegMQBtAEBCgZQAxgTAUghQAFiFAGiFQgkAjhNgEIhGgMQCMAHAthGQAPkGAKAAQAKAAAMCzQAWAfA1gEQgMAFgPACQgeAEgRgOIAGB1QARAfAnASQAzAYBTgEQghAKgoACQhQAEgjgnQAHCSAFCXQBGBQCvgJQgoAMgyAEQhlAHg1gnIAJEXQBHBMCsgIQgnALgyAEQhkAIg1gmQAIEMAFDVg");
	this.shape_6.setTransform(-0.9,0,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gIQA3gHAuASQAzAUgeAeQgfAihHAAIAAAAQhDAAgfgbg");
	this.shape_7.setTransform(19.7,25.9,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A954").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgWAWQgYAZg1AAIAAAAQgyAAgXgUg");
	this.shape_8.setTransform(-16.4,-31.2,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A954").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRAAIgBAAQhLAAglgeg");
	this.shape_9.setTransform(-22,-7,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIgBAAQhCAAgfgbg");
	this.shape_10.setTransform(-26.6,16.6,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51A954").s().p("Ah2AtQgkgfAhgeQAdgdBCgSQBCgSA5AUQA/AWgiAwQgkAzhXAKQgQACgPAAQg6AAgggbg");
	this.shape_11.setTransform(22.9,-1.9,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51A954").s().p("AhfAcQgegVAagUQAYgUA1gLQA1gLAvAPQA0AQgbAgQgdAjhGAFIgTABQg0AAgcgVg");
	this.shape_12.setTransform(19,-27.1,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-60,71,120.1);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583936").s().p("AgYDIQADhkAEhkQAJjHAIAAQAJAAAJDHQAEBkADBkg");
	this.shape.setTransform(-10.5,41,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_1.setTransform(-36.8,35,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_2.setTransform(11.4,35,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("AgbF6IAIl6QAJl5AKAAQALAAAKF5QAFC9ACC9g");
	this.shape_3.setTransform(26.9,27.1,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#583936").s().p("AgODVQABhrADhqQAFjUAFAAQAGAAAFDUIAEDVg");
	this.shape_4.setTransform(38.5,40,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#583936").s().p("AghJNQADknAGkmQAMpMAMAAQANAAAMJMQAGEmADEng");
	this.shape_5.setTransform(-0.8,10.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("AghGFQADjDAGjCQAMmDAMgBQANABAMGDQAGDCADDDg");
	this.shape_6.setTransform(-24.6,26.3,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("Ag+A+QgagaAAgkQAAgjAagbQAbgaAjAAQAlAAAZAaQAaAaAAAkQAAAkgaAaQgZAaglAAQgjAAgbgag");
	this.shape_7.setTransform(-10.9,24.1,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAvgiAiQgiAigvAAQguAAgigig");
	this.shape_8.setTransform(11.2,11.9,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#96C44A").s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkg");
	this.shape_9.setTransform(39.1,17,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#96C44A").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA0A1AABJQAABKg0A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_10.setTransform(27.3,-10.3,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#96C44A").s().p("Ai7C9QhOhPAAhuQAAhtBOhPQBOhOBtAAQBuAABPBOQBNBPAABtQAABuhNBPQhPBOhuAAQhtAAhOhOg");
	this.shape_11.setTransform(-1.7,-35.8,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#96C44A").s().p("AiTCUQg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+QA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_12.setTransform(-23.2,-11.1,0.783,0.783);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96C44A").s().p("AhNBOQghggAAguQAAgsAhghQAgghAtAAQAuAAAgAhQAhAhAAAsQAAAughAgQggAhguAAQgtAAggghg");
	this.shape_13.setTransform(-37.3,16,0.783,0.783);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51A954").s().p("Ag+A+QgagaAAgkQAAgjAagbQAagaAkAAQAkAAAaAaQAaAbAAAjQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_14.setTransform(-13.6,25.6,0.783,0.783);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51A954").s().p("AhQBRQgighAAgwQAAguAigiQAhgiAvAAQAvAAAiAiQAiAiAAAuQAAAwgiAhQgiAigvAAQgvAAghgig");
	this.shape_15.setTransform(8.4,13.4,0.783,0.783);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51A954").s().p("AhVBXQglgkAAgzQAAgyAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgxAAgkgkg");
	this.shape_16.setTransform(36.3,18.4,0.783,0.783);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51A954").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_17.setTransform(24.6,-8.8,0.783,0.783);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51A954").s().p("Ai7C8QhPhOAAhuQAAhtBPhPQBOhOBtAAQBuAABPBOQBOBPAABtQAABuhOBOQhPBPhuAAQhtAAhOhPg");
	this.shape_18.setTransform(-4.4,-34.3,0.783,0.783);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51A954").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_19.setTransform(-26,-9.6,0.783,0.783);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51A954").s().p("AhNBOQghghAAgtQAAgtAhggQAgghAtAAQAtAAAhAhQAhAgAAAtQAAAtghAhQghAhgtAAQgtAAggghg");
	this.shape_20.setTransform(-40.1,17.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.8,-56.7,97.6,113.5);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583936").s().p("AgYDIQADhkAEhkQAJjHAIAAQAJAAAJDHQAEBkADBkg");
	this.shape.setTransform(-10.5,41,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_1.setTransform(-36.8,35,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_2.setTransform(11.4,35,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("AgbF6IAIl6QAJl5AKAAQALAAAKF5QAFC9ACC9g");
	this.shape_3.setTransform(26.9,27.1,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#583936").s().p("AgODVQABhrADhqQAFjUAFAAQAGAAAFDUIAEDVg");
	this.shape_4.setTransform(38.5,40,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#583936").s().p("AghJNQADknAGkmQAMpMAMAAQANAAAMJMQAGEmADEng");
	this.shape_5.setTransform(-0.8,10.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("AghGFQADjDAGjCQAMmDAMgBQANABAMGDQAGDCADDDg");
	this.shape_6.setTransform(-24.6,26.3,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("Ag+A+QgagaAAgkQAAgjAagbQAbgaAjAAQAlAAAZAaQAaAaAAAkQAAAkgaAaQgZAaglAAQgjAAgbgag");
	this.shape_7.setTransform(-10.9,24.1,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAvgiAiQgiAigvAAQguAAgigig");
	this.shape_8.setTransform(11.2,11.9,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#96C44A").s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkg");
	this.shape_9.setTransform(39.1,17,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#96C44A").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA0A1AABJQAABKg0A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_10.setTransform(27.3,-10.3,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#96C44A").s().p("Ai7C9QhOhPAAhuQAAhtBOhPQBOhOBtAAQBuAABPBOQBNBPAABtQAABuhNBPQhPBOhuAAQhtAAhOhOg");
	this.shape_11.setTransform(-1.7,-35.8,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#96C44A").s().p("AiTCUQg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+QA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_12.setTransform(-23.2,-11.1,0.783,0.783);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96C44A").s().p("AhNBOQghggAAguQAAgsAhghQAgghAtAAQAuAAAgAhQAhAhAAAsQAAAughAgQggAhguAAQgtAAggghg");
	this.shape_13.setTransform(-37.3,16,0.783,0.783);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51A954").s().p("Ag+A+QgagaAAgkQAAgjAagbQAagaAkAAQAkAAAaAaQAaAbAAAjQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_14.setTransform(-13.6,25.6,0.783,0.783);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51A954").s().p("AhQBRQgighAAgwQAAguAigiQAhgiAvAAQAvAAAiAiQAiAiAAAuQAAAwgiAhQgiAigvAAQgvAAghgig");
	this.shape_15.setTransform(8.4,13.4,0.783,0.783);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51A954").s().p("AhVBXQglgkAAgzQAAgyAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgxAAgkgkg");
	this.shape_16.setTransform(36.3,18.4,0.783,0.783);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51A954").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_17.setTransform(24.6,-8.8,0.783,0.783);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51A954").s().p("Ai7C8QhPhOAAhuQAAhtBPhPQBOhOBtAAQBuAABPBOQBOBPAABtQAABuhOBOQhPBPhuAAQhtAAhOhPg");
	this.shape_18.setTransform(-4.4,-34.3,0.783,0.783);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51A954").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_19.setTransform(-26,-9.6,0.783,0.783);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51A954").s().p("AhNBOQghghAAgtQAAgtAhggQAgghAtAAQAtAAAhAhQAhAgAAAtQAAAtghAhQghAhgtAAQgtAAggghg");
	this.shape_20.setTransform(-40.1,17.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.8,-56.7,97.6,113.5);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A954").s().p("AhlBmQgqgqAAg8QAAg6AqgrQArgqA6AAQA7AAArAqQAqArAAA6QAAA8gqAqQgrAqg7AAQg6AAgrgqg");
	this.shape.setTransform(22.2,11.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51A954").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_1.setTransform(16.8,-19.9,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51A954").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_2.setTransform(-28,3.4,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("Ag0KaIAFjsQgMgbgSgcQgbgngggaQgmghhBgYQg1gUAAgCQgCgLA9AGQBGAJA3AkQAhAVAeAgIAFjUQghg9grgiQgkgeg9gWQgzgTABgCQgDgLA7AGQBBAJA1AiQAaAQAaAYIAGjgQgHgVgPgWQgVghgagVQgdgagzgSQgpgPAAgDQgCgIAwAGQA1AGArAcQAcARAYAbQAPl8ANgBQARABAQGZQAWgXAYgPQAqgbA2gHQAvgFgBAIQAAACgqAQQgyASgdAaQgnAegaA1IAIDnQAWgVAYgOQA0ghBBgIQA7gHgCALQABADgzASQg+AVgkAfQgoAhgeA1IAFDAQAbgcAfgSQA3glBFgIQA+gIgCALQAAADg1AUQhBAYgmAhQg0AqggBDIAEDrg");
	this.shape_3.setTransform(-2.8,7.2,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("AhvBwQgvguAAhCQAAhAAvgvQAvgvBAAAQBCAAAuAvQAvAvAABAQAABCgvAuQguAvhCAAQhAAAgvgvg");
	this.shape_4.setTransform(-25.2,30.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AiGCHQg4g4AAhPQAAhOA4g4QA4g4BOAAQBPAAA4A4QA4A4AABOQAABPg4A4Qg4A4hPAAQhOAAg4g4g");
	this.shape_5.setTransform(-26.3,-14.4,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96C44A").s().p("AiDCEQg3g3AAhNQAAhMA3g3QA3g3BMAAQBNAAA3A3QA3A3AABMQAABNg3A3Qg3A3hNAAQhMAAg3g3g");
	this.shape_6.setTransform(26.5,19.4,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("AiMCNQg6g7AAhSQAAhRA6g7QA7g6BRAAQBSAAA7A6QA6A7AABRQAABSg6A7Qg7A6hSAAQhRAAg7g6g");
	this.shape_7.setTransform(23.1,-6.3,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("Ah8B9Qg1g0AAhJQAAhJA1g0QA0g0BIAAQBKAAA0A0QA0A0AABJQAABJg0A0Qg0A1hKAAQhIAAg0g1g");
	this.shape_8.setTransform(-2.5,-45.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-59.5,82.5,119);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A954").s().p("AhlBmQgqgqAAg8QAAg6AqgrQArgqA6AAQA7AAArAqQAqArAAA6QAAA8gqAqQgrAqg7AAQg6AAgrgqg");
	this.shape.setTransform(22.2,11.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51A954").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_1.setTransform(16.8,-19.9,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51A954").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_2.setTransform(-28,3.4,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("Ag0KaIAFjsQgMgbgSgcQgbgngggaQgmghhBgYQg1gUAAgCQgCgLA9AGQBGAJA3AkQAhAVAeAgIAFjUQghg9grgiQgkgeg9gWQgzgTABgCQgDgLA7AGQBBAJA1AiQAaAQAaAYIAGjgQgHgVgPgWQgVghgagVQgdgagzgSQgpgPAAgDQgCgIAwAGQA1AGArAcQAcARAYAbQAPl8ANgBQARABAQGZQAWgXAYgPQAqgbA2gHQAvgFgBAIQAAACgqAQQgyASgdAaQgnAegaA1IAIDnQAWgVAYgOQA0ghBBgIQA7gHgCALQABADgzASQg+AVgkAfQgoAhgeA1IAFDAQAbgcAfgSQA3glBFgIQA+gIgCALQAAADg1AUQhBAYgmAhQg0AqggBDIAEDrg");
	this.shape_3.setTransform(-2.8,7.2,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("AhvBwQgvguAAhCQAAhAAvgvQAvgvBAAAQBCAAAuAvQAvAvAABAQAABCgvAuQguAvhCAAQhAAAgvgvg");
	this.shape_4.setTransform(-25.2,30.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AiGCHQg4g4AAhPQAAhOA4g4QA4g4BOAAQBPAAA4A4QA4A4AABOQAABPg4A4Qg4A4hPAAQhOAAg4g4g");
	this.shape_5.setTransform(-26.3,-14.4,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96C44A").s().p("AiDCEQg3g3AAhNQAAhMA3g3QA3g3BMAAQBNAAA3A3QA3A3AABMQAABNg3A3Qg3A3hNAAQhMAAg3g3g");
	this.shape_6.setTransform(26.5,19.4,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("AiMCNQg6g7AAhSQAAhRA6g7QA7g6BRAAQBSAAA7A6QA6A7AABRQAABSg6A7Qg7A6hSAAQhRAAg7g6g");
	this.shape_7.setTransform(23.1,-6.3,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("Ah8B9Qg1g0AAhJQAAhJA1g0QA0g0BIAAQBKAAA0A0QA0A0AABJQAABJg0A0Qg0A1hKAAQhIAAg0g1g");
	this.shape_8.setTransform(-2.5,-45.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-59.5,82.5,119);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96C44A").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgXAWQgXAZg1AAQgxAAgYgUg");
	this.shape.setTransform(-14.7,-34.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRABIgBAAQhLAAglgfg");
	this.shape_1.setTransform(-20.2,-10.5,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgVQAZgRA2gIQA2gHAvASQAzAUgeAeQgfAhhHABIAAAAQhCAAgggbg");
	this.shape_2.setTransform(-24.8,13.2,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIAAAAQhCAAgggbg");
	this.shape_3.setTransform(21.4,22.4,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("Ah2AtQgkgeAhgfQAdgdBCgSQBCgSA5AUQA/AWgjAwQgkA0hWAKQgPACgQAAQg6AAgggcg");
	this.shape_4.setTransform(24.7,-5.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AhfAdQgegWAagUQAYgTA1gLQA1gLAvAOQA0AQgbAgQgdAjhGAFIgUABQgzAAgcgUg");
	this.shape_5.setTransform(20.7,-30.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("Ag6L+IAKmCIgDACQggAchPgDIhHgIQBUADAygSQAkgOAPgXIAFjEQgvAmhvgEIhlgLQBwAEBHgXQA1gRAZgfIAJj9IgCACQgrAohogEIhegMQBtAEBCgZQAxgTAUghQAFiFAGiFQgkAjhNgEIhGgMQCMAHAthGQAPkGAKAAQAKAAAMCzQAWAfA1gEQgMAFgPACQgeAEgRgOIAGB1QARAfAnASQAzAYBTgEQghAKgoACQhQAEgjgnQAHCSAFCXQBGBQCvgJQgoAMgyAEQhlAHg1gnIAJEXQBHBMCsgIQgnALgyAEQhkAIg1gmQAIEMAFDVg");
	this.shape_6.setTransform(-0.9,0,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gIQA3gHAuASQAzAUgeAeQgfAihHAAIAAAAQhDAAgfgbg");
	this.shape_7.setTransform(19.7,25.9,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A954").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgWAWQgYAZg1AAIAAAAQgyAAgXgUg");
	this.shape_8.setTransform(-16.4,-31.2,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A954").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRAAIgBAAQhLAAglgeg");
	this.shape_9.setTransform(-22,-7,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIgBAAQhCAAgfgbg");
	this.shape_10.setTransform(-26.6,16.6,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51A954").s().p("Ah2AtQgkgfAhgeQAdgdBCgSQBCgSA5AUQA/AWgiAwQgkAzhXAKQgQACgPAAQg6AAgggbg");
	this.shape_11.setTransform(22.9,-1.9,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51A954").s().p("AhfAcQgegVAagUQAYgUA1gLQA1gLAvAPQA0AQgbAgQgdAjhGAFIgTABQg0AAgcgVg");
	this.shape_12.setTransform(19,-27.1,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-60,71,120.1);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96C44A").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgXAWQgXAZg1AAQgxAAgYgUg");
	this.shape.setTransform(-14.7,-34.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96C44A").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRABIgBAAQhLAAglgfg");
	this.shape_1.setTransform(-20.2,-10.5,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgVQAZgRA2gIQA2gHAvASQAzAUgeAeQgfAhhHABIAAAAQhCAAgggbg");
	this.shape_2.setTransform(-24.8,13.2,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96C44A").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIAAAAQhCAAgggbg");
	this.shape_3.setTransform(21.4,22.4,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("Ah2AtQgkgeAhgfQAdgdBCgSQBCgSA5AUQA/AWgjAwQgkA0hWAKQgPACgQAAQg6AAgggcg");
	this.shape_4.setTransform(24.7,-5.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AhfAdQgegWAagUQAYgTA1gLQA1gLAvAOQA0AQgbAgQgdAjhGAFIgUABQgzAAgcgUg");
	this.shape_5.setTransform(20.7,-30.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("Ag6L+IAKmCIgDACQggAchPgDIhHgIQBUADAygSQAkgOAPgXIAFjEQgvAmhvgEIhlgLQBwAEBHgXQA1gRAZgfIAJj9IgCACQgrAohogEIhegMQBtAEBCgZQAxgTAUghQAFiFAGiFQgkAjhNgEIhGgMQCMAHAthGQAPkGAKAAQAKAAAMCzQAWAfA1gEQgMAFgPACQgeAEgRgOIAGB1QARAfAnASQAzAYBTgEQghAKgoACQhQAEgjgnQAHCSAFCXQBGBQCvgJQgoAMgyAEQhlAHg1gnIAJEXQBHBMCsgIQgnALgyAEQhkAIg1gmQAIEMAFDVg");
	this.shape_6.setTransform(-0.9,0,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gIQA3gHAuASQAzAUgeAeQgfAihHAAIAAAAQhDAAgfgbg");
	this.shape_7.setTransform(19.7,25.9,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51A954").s().p("AhJAQQgVgQAVgPQASgNApgGQAogFAjANQAmAPgWAWQgYAZg1AAIAAAAQgyAAgXgUg");
	this.shape_8.setTransform(-16.4,-31.2,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51A954").s().p("AhwAZQghgaAggXQAdgUA+gIQA+gJA1AVQA6AWgiAjQgjAmhRAAIgBAAQhLAAglgeg");
	this.shape_9.setTransform(-22,-7,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51A954").s().p("AhiAWQgdgWAcgUQAZgSA2gHQA2gIAvASQAzAUgeAeQgfAihHAAIgBAAQhCAAgfgbg");
	this.shape_10.setTransform(-26.6,16.6,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51A954").s().p("Ah2AtQgkgfAhgeQAdgdBCgSQBCgSA5AUQA/AWgiAwQgkAzhXAKQgQACgPAAQg6AAgggbg");
	this.shape_11.setTransform(22.9,-1.9,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51A954").s().p("AhfAcQgegVAagUQAYgUA1gLQA1gLAvAPQA0AQgbAgQgdAjhGAFIgTABQg0AAgcgVg");
	this.shape_12.setTransform(19,-27.1,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-60,71,120.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583936").s().p("AgYDIQADhkAEhkQAJjHAIAAQAJAAAJDHQAEBkADBkg");
	this.shape.setTransform(-10.5,41,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_1.setTransform(-36.8,35,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_2.setTransform(11.4,35,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("AgbF6IAIl6QAJl5AKAAQALAAAKF5QAFC9ACC9g");
	this.shape_3.setTransform(26.9,27.1,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#583936").s().p("AgODVQABhrADhqQAFjUAFAAQAGAAAFDUIAEDVg");
	this.shape_4.setTransform(38.5,40,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#583936").s().p("AghJNQADknAGkmQAMpMAMAAQANAAAMJMQAGEmADEng");
	this.shape_5.setTransform(-0.8,10.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("AghGFQADjDAGjCQAMmDAMgBQANABAMGDQAGDCADDDg");
	this.shape_6.setTransform(-24.6,26.3,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("Ag+A+QgagaAAgkQAAgjAagbQAbgaAjAAQAlAAAZAaQAaAaAAAkQAAAkgaAaQgZAaglAAQgjAAgbgag");
	this.shape_7.setTransform(-10.9,24.1,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAvgiAiQgiAigvAAQguAAgigig");
	this.shape_8.setTransform(11.2,11.9,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#96C44A").s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkg");
	this.shape_9.setTransform(39.1,17,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#96C44A").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA0A1AABJQAABKg0A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_10.setTransform(27.3,-10.3,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#96C44A").s().p("Ai7C9QhOhPAAhuQAAhtBOhPQBOhOBtAAQBuAABPBOQBNBPAABtQAABuhNBPQhPBOhuAAQhtAAhOhOg");
	this.shape_11.setTransform(-1.7,-35.8,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#96C44A").s().p("AiTCUQg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+QA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_12.setTransform(-23.2,-11.1,0.783,0.783);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96C44A").s().p("AhNBOQghggAAguQAAgsAhghQAgghAtAAQAuAAAgAhQAhAhAAAsQAAAughAgQggAhguAAQgtAAggghg");
	this.shape_13.setTransform(-37.3,16,0.783,0.783);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51A954").s().p("Ag+A+QgagaAAgkQAAgjAagbQAagaAkAAQAkAAAaAaQAaAbAAAjQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_14.setTransform(-13.6,25.6,0.783,0.783);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51A954").s().p("AhQBRQgighAAgwQAAguAigiQAhgiAvAAQAvAAAiAiQAiAiAAAuQAAAwgiAhQgiAigvAAQgvAAghgig");
	this.shape_15.setTransform(8.4,13.4,0.783,0.783);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51A954").s().p("AhVBXQglgkAAgzQAAgyAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgxAAgkgkg");
	this.shape_16.setTransform(36.3,18.4,0.783,0.783);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51A954").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_17.setTransform(24.6,-8.8,0.783,0.783);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51A954").s().p("Ai7C8QhPhOAAhuQAAhtBPhPQBOhOBtAAQBuAABPBOQBOBPAABtQAABuhOBOQhPBPhuAAQhtAAhOhPg");
	this.shape_18.setTransform(-4.4,-34.3,0.783,0.783);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51A954").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_19.setTransform(-26,-9.6,0.783,0.783);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51A954").s().p("AhNBOQghghAAgtQAAgtAhggQAgghAtAAQAtAAAhAhQAhAgAAAtQAAAtghAhQghAhgtAAQgtAAggghg");
	this.shape_20.setTransform(-40.1,17.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.8,-56.7,97.6,113.5);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583936").s().p("AgYDIQADhkAEhkQAJjHAIAAQAJAAAJDHQAEBkADBkg");
	this.shape.setTransform(-10.5,41,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_1.setTransform(-36.8,35,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#583936").s().p("AgYEVQADiLAEiKQAJkUAIAAQAJAAAJEUQAECKADCLg");
	this.shape_2.setTransform(11.4,35,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("AgbF6IAIl6QAJl5AKAAQALAAAKF5QAFC9ACC9g");
	this.shape_3.setTransform(26.9,27.1,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#583936").s().p("AgODVQABhrADhqQAFjUAFAAQAGAAAFDUIAEDVg");
	this.shape_4.setTransform(38.5,40,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#583936").s().p("AghJNQADknAGkmQAMpMAMAAQANAAAMJMQAGEmADEng");
	this.shape_5.setTransform(-0.8,10.6,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#583936").s().p("AghGFQADjDAGjCQAMmDAMgBQANABAMGDQAGDCADDDg");
	this.shape_6.setTransform(-24.5,26.3,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("Ag+A+QgagaAAgkQAAgjAagbQAbgaAjAAQAlAAAZAaQAaAaAAAkQAAAkgaAaQgZAaglAAQgjAAgbgag");
	this.shape_7.setTransform(-10.8,24.1,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAvgiAiQgiAigvAAQguAAgigig");
	this.shape_8.setTransform(11.2,11.9,0.783,0.783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#96C44A").s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkg");
	this.shape_9.setTransform(39.1,17,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#96C44A").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA0A1AABJQAABKg0A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_10.setTransform(27.4,-10.3,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#96C44A").s().p("Ai7C9QhOhPAAhuQAAhtBOhPQBOhOBtAAQBuAABPBOQBNBPAABtQAABuhNBPQhPBOhuAAQhtAAhOhOg");
	this.shape_11.setTransform(-1.6,-35.8,0.783,0.783);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#96C44A").s().p("AiTCUQg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+QA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_12.setTransform(-23.2,-11.1,0.783,0.783);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96C44A").s().p("AhNBOQghggAAguQAAgsAhghQAgghAtAAQAuAAAgAhQAhAhAAAsQAAAughAgQggAhguAAQgtAAggghg");
	this.shape_13.setTransform(-37.3,16,0.783,0.783);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51A954").s().p("Ag+A+QgagaAAgkQAAgjAagbQAagaAkAAQAkAAAaAaQAaAbAAAjQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_14.setTransform(-13.6,25.6,0.783,0.783);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51A954").s().p("AhQBRQgighAAgwQAAguAigiQAhgiAvAAQAvAAAiAiQAiAiAAAuQAAAwgiAhQgiAigvAAQgvAAghgig");
	this.shape_15.setTransform(8.5,13.4,0.783,0.783);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51A954").s().p("AhVBXQglgkAAgzQAAgyAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgxAAgkgkg");
	this.shape_16.setTransform(36.3,18.4,0.783,0.783);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51A954").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_17.setTransform(24.6,-8.8,0.783,0.783);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51A954").s().p("Ai7C8QhPhOAAhuQAAhtBPhPQBOhOBtAAQBuAABPBOQBOBPAABtQAABuhOBOQhPBPhuAAQhtAAhOhPg");
	this.shape_18.setTransform(-4.4,-34.3,0.783,0.783);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51A954").s().p("AiTCUQg+g9AAhXQAAhWA+g+QA9g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	this.shape_19.setTransform(-25.9,-9.6,0.783,0.783);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51A954").s().p("AhNBOQghghAAgtQAAgtAhggQAgghAtAAQAtAAAhAhQAhAgAAAtQAAAtghAhQghAhgtAAQgtAAggghg");
	this.shape_20.setTransform(-40,17.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-56.7,97.6,113.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A954").s().p("AhlBmQgqgqAAg8QAAg6AqgrQArgqA6AAQA7AAArAqQAqArAAA6QAAA8gqAqQgrAqg7AAQg6AAgrgqg");
	this.shape.setTransform(22.2,11.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51A954").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_1.setTransform(16.8,-19.9,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51A954").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_2.setTransform(-28,3.4,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("Ag0KaIAFjsQgMgbgSgcQgbgngggaQgmghhBgYQg1gUAAgCQgCgLA9AGQBGAJA3AkQAhAVAeAgIAFjUQghg9grgiQgkgeg9gWQgzgTABgCQgDgLA7AGQBBAJA1AiQAaAQAaAYIAGjgQgHgVgPgWQgVghgagVQgdgagzgSQgpgPAAgDQgCgIAwAGQA1AGArAcQAcARAYAbQAPl8ANgBQARABAQGZQAWgXAYgPQAqgbA2gHQAvgFgBAIQAAACgqAQQgyASgdAaQgnAegaA1IAIDnQAWgVAYgOQA0ghBBgIQA7gHgCALQABADgzASQg+AVgkAfQgoAhgeA1IAFDAQAbgcAfgSQA3glBFgIQA+gIgCALQAAADg1AUQhBAYgmAhQg0AqggBDIAEDrg");
	this.shape_3.setTransform(-2.8,7.2,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("AhvBwQgvguAAhCQAAhAAvgvQAvgvBAAAQBCAAAuAvQAvAvAABAQAABCgvAuQguAvhCAAQhAAAgvgvg");
	this.shape_4.setTransform(-25.2,30.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AiGCHQg4g4AAhPQAAhOA4g4QA4g4BOAAQBPAAA4A4QA4A4AABOQAABPg4A4Qg4A4hPAAQhOAAg4g4g");
	this.shape_5.setTransform(-26.3,-14.4,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96C44A").s().p("AiDCEQg3g3AAhNQAAhMA3g3QA3g3BMAAQBNAAA3A3QA3A3AABMQAABNg3A3Qg3A3hNAAQhMAAg3g3g");
	this.shape_6.setTransform(26.5,19.4,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("AiMCNQg6g7AAhSQAAhRA6g7QA7g6BRAAQBSAAA7A6QA6A7AABRQAABSg6A7Qg7A6hSAAQhRAAg7g6g");
	this.shape_7.setTransform(23.1,-6.3,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("Ah8B9Qg1g0AAhJQAAhJA1g0QA0g0BIAAQBKAAA0A0QA0A0AABJQAABJg0A0Qg0A1hKAAQhIAAg0g1g");
	this.shape_8.setTransform(-2.5,-45.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-59.5,82.5,119);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A954").s().p("AhlBmQgqgqAAg8QAAg6AqgrQArgqA6AAQA7AAArAqQAqArAAA6QAAA8gqAqQgrAqg7AAQg6AAgrgqg");
	this.shape.setTransform(22.3,11.7,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51A954").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_1.setTransform(16.9,-19.9,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51A954").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_2.setTransform(-28,3.4,0.783,0.783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583936").s().p("Ag0KaIAFjsQgMgbgSgcQgbgngggaQgmghhBgYQg1gUAAgCQgCgLA9AGQBGAJA3AkQAhAVAeAgIAFjUQghg9grgiQgkgeg9gWQgzgTABgCQgDgLA7AGQBBAJA1AiQAaAQAaAYIAGjgQgHgVgPgWQgVghgagVQgdgagzgSQgpgPAAgDQgCgIAwAGQA1AGArAcQAcARAYAbQAPl8ANgBQARABAQGZQAWgXAYgPQAqgbA2gHQAvgFgBAIQAAACgqAQQgyASgdAaQgnAegaA1IAIDnQAWgVAYgOQA0ghBBgIQA7gHgCALQABADgzASQg+AVgkAfQgoAhgeA1IAFDAQAbgcAfgSQA3glBFgIQA+gIgCALQAAADg1AUQhBAYgmAhQg0AqggBDIAEDrg");
	this.shape_3.setTransform(-2.7,7.2,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#96C44A").s().p("AhvBwQgvguAAhCQAAhAAvgvQAvgvBAAAQBCAAAuAvQAvAvAABAQAABCgvAuQguAvhCAAQhAAAgvgvg");
	this.shape_4.setTransform(-25.2,30.4,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96C44A").s().p("AiGCHQg4g4AAhPQAAhOA4g4QA4g4BOAAQBPAAA4A4QA4A4AABOQAABPg4A4Qg4A4hPAAQhOAAg4g4g");
	this.shape_5.setTransform(-26.2,-14.4,0.783,0.783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96C44A").s().p("AiDCEQg3g3AAhNQAAhMA3g3QA3g3BMAAQBNAAA3A3QA3A3AABMQAABNg3A3Qg3A3hNAAQhMAAg3g3g");
	this.shape_6.setTransform(26.6,19.4,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96C44A").s().p("AiMCNQg6g7AAhSQAAhRA6g7QA7g6BRAAQBSAAA7A6QA6A7AABRQAABSg6A7Qg7A6hSAAQhRAAg7g6g");
	this.shape_7.setTransform(23.2,-6.3,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96C44A").s().p("Ah8B9Qg1g0AAhJQAAhJA1g0QA0g0BIAAQBKAAA0A0QA0A0AABJQAABJg0A0Qg0A1hKAAQhIAAg0g1g");
	this.shape_8.setTransform(-2.5,-45.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-59.5,82.5,119);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("Ek4fAIgIAAt3QCdA9EtAxQFCA2GbAbQPeBCRBhpQPihfCzgQQKHg4G5gPQRvgmHRDcQD2B1D+ASQDUAPECg1QCCgbFZhiQE6hZDJgjIIhhgQE2g2DDgYQILhACTBeQCMBaF2CoQC7BVCeBCIBLAKQBcAJBigBQE3gDDqhsQDrhsFViHQCrhEB7guIE7CoQFPCtBkAbQBIASCRAQQCvATDFAEQITAMHChkQEXg9JohLQKghRKWgsQMKgzINASQJoAWC1B3IAAABQCdA9EsAxQFBA2GcAbQPeBCRChpQPhhfC0gQQKGg4G5gPQRvgmHQDcQD4B1D9ASQDTAPEDg1QCCgbFZhiQE7hZDIgjIIihgQE0g2DEgYQILhACTBeQCMBaF2CoQC7BVCeBCIBKAKQBeAJBhgBQE3gDDrhsQDqhsFViHQCrhEB8guIE6CoQFOCtBmAbQBHASCRAQQCvATDEAEQIUAMHDhkQEWg9JnhLQKhhRKWgsQMLgzILASQJqAWC1B3IAAN4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-54.4,4000,108.9);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("Ek4fAIgIAAt3QCdA9EtAxQFCA2GbAbQPeBCRBhpQPihfCzgQQKHg4G5gPQRvgmHRDcQD2B1D+ASQDUAPECg1QCCgbFZhiQE6hZDJgjIIhhgQE2g2DDgYQILhACTBeQCMBaF2CoQC7BVCeBCIBLAKQBcAJBigBQE3gDDqhsQDrhsFViHQCrhEB7guIE7CoQFPCtBkAbQBIASCRAQQCvATDFAEQITAMHChkQEXg9JohLQKghRKWgsQMKgzINASQJoAWC1B3IAAABQCdA9EsAxQFBA2GcAbQPeBCRChpQPhhfC0gQQKGg4G5gPQRvgmHQDcQD4B1D9ASQDTAPEDg1QCCgbFZhiQE7hZDIgjIIihgQE0g2DEgYQILhACTBeQCMBaF2CoQC7BVCeBCIBKAKQBeAJBhgBQE3gDDrhsQDqhsFViHQCrhEB8guIE6CoQFOCtBmAbQBHASCRAQQCvATDEAEQIUAMHDhkQEWg9JnhLQKhhRKWgsQMLgzILASQJqAWC1B3IAAN4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-54.4,4000,108.9);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC760").s().p("Ek4eAH0IAAo5IJskEQA0A2CmBEQFPCHI+BGQMlBgSSgxQW3g6eikdQI0BcDSCIQAwAfAtAmQAhARA9gQQBKgTLKisQK/iqCogwQBogcB8AZQBbATCJA6IDhBeQB/AwBcAFQAcABEMAjQD3AgDVAEQKwANL0j2QGciGInAiQGpAbIYCBQCeAnJvCxQFgBiBJgVQD6hJTYmqIEVB3QFWCJFIBgQQcEwIIjiIAAAbIAAgbIJskEQA0A2CmBEQFPCHI+BGQMlBgSSgxQW3g6eikdQI0BcDSCIQAvAfAuAmQAhARA9gQQBKgTLKisQK/iqCogwQBogcB8AZQBbATCJA6IDhBeQB/AwBcAFQAdABELAjQD2AgDWAEQKvANL1j2QGciGInAiQGpAbIYCBQCeAnJvCxQFgBiBKgVQD5hJTYmqIEVB3QFVCJFJBgQQcEwIJjiIAAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-50,4000,100);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC760").s().p("Ek4eAH0IAAo5IJskEQA0A2CmBEQFPCHI+BGQMlBgSSgxQW3g6eikdQI0BcDSCIQAwAfAtAmQAhARA9gQQBKgTLKisQK/iqCogwQBogcB8AZQBbATCJA6IDhBeQB/AwBcAFQAcABEMAjQD3AgDVAEQKwANL0j2QGciGInAiQGpAbIYCBQCeAnJvCxQFgBiBJgVQD6hJTYmqIEVB3QFWCJFIBgQQcEwIIjiIAAAbIAAgbIJskEQA0A2CmBEQFPCHI+BGQMlBgSSgxQW3g6eikdQI0BcDSCIQAvAfAuAmQAhARA9gQQBKgTLKisQK/iqCogwQBogcB8AZQBbATCJA6IDhBeQB/AwBcAFQAdABELAjQD2AgDWAEQKvANL1j2QGciGInAiQGpAbIYCBQCeAnJvCxQFgBiBKgVQD5hJTYmqIEVB3QFVCJFJBgQQcEwIJjiIAAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-50,4000,100);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C8565").s().p("Ek4fAEyIAAndQE8gCFcgRQK7gjCnhQQEMCmJqCJQD+A3DaAbQDaAcBegMQE9gpJAhTQIzhTDpgdQGOgzDrgHQEUgJB7AxQDiBYE4A2QE+A1FPAIQFkAIE1gwQFQgzDuhwQDahpHuA7QDFAYE3A4QC5AiGgBQQNLCcJcA+QOJBdM6g3QKtguLVghQJigcCXgNQELgXDLg7QCxgyFriYQHYEkFFA7QCWAaCbgOQB/gLCvguQBpgaDuhGQDqg/DEgoQJGh4LFAAIAAAWIAAgWQE7gCFdgRQK5gjCohQQEMCmJqCJQD+A3DaAbQDbAcBegMQE8gpJAhTQIzhTDpgdQGOgzDqgHQEWgJB6AxQDhBYE5A2QE+A1FPAIQFkAIE1gwQFQgzDthwQDchpHtA7QDFAYE3A4QC5AiGgBQQNLCcJdA+QOIBdM6g3QKsguLWghQJjgcCWgNQELgXDLg7QCxgyFqiYQHZEkFFA7QCWAaCbgOQCAgLCuguQBpgaDvhGQDpg/DEgoQJHh4LFAAIAAHdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-30.6,4000,61.3);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C8565").s().p("Ek4fAEyIAAndQE8gCFcgRQK7gjCnhQQEMCmJqCJQD+A3DaAbQDaAcBegMQE9gpJAhTQIzhTDpgdQGOgzDrgHQEUgJB7AxQDiBYE4A2QE+A1FPAIQFkAIE1gwQFQgzDuhwQDahpHuA7QDFAYE3A4QC5AiGgBQQNLCcJcA+QOJBdM6g3QKtguLVghQJigcCXgNQELgXDLg7QCxgyFriYQHYEkFFA7QCWAaCbgOQB/gLCvguQBpgaDuhGQDqg/DEgoQJGh4LFAAIAAAWIAAgWQE7gCFdgRQK5gjCohQQEMCmJqCJQD+A3DaAbQDbAcBegMQE8gpJAhTQIzhTDpgdQGOgzDqgHQEWgJB6AxQDhBYE5A2QE+A1FPAIQFkAIE1gwQFQgzDthwQDchpHtA7QDFAYE3A4QC5AiGgBQQNLCcJdA+QOIBdM6g3QKsguLWghQJjgcCWgNQELgXDLg7QCxgyFqiYQHZEkFFA7QCWAaCbgOQCAgLCuguQBpgaDvhGQDpg/DEgoQJHh4LFAAIAAHdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-30.6,4000,61.3);


(lib.carBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C44943").s().p("EBC3Aa0QAAjphajVQhWjNifieQieiejNhXQjVhajpAAQjpAAjVBaQjNBXieCeQieCehXDNQhZDVAADpMg+AAAAQAAjphajVQhXjNieieQifiejNhXQjUhajpAAQjoAAjVBaQjMBXifCeQieCehXDNQhaDVAADpItXAAIAAoCIFiAAQAArYDekTQBNhfBqgqQAbgKB5gcQClglFbhAQCugfCMgZQEVn4EdmMQHsqqEeAAMAwNAAAQDcAAGWKzQB9DVCfE1ICvFSIMwAsQOXA7IFBGIAYAHQAfAJAhAQQBqAwBYBYQEZEXAAIzICzAAIAAK5gAc/iqIiplMQiKkLhvi+QlRpEiWABIyDAAIAAUGMAgMABSIAAAAgA5Z2jQhxBhh7CpQkhGOioIPIb2AAIAA0GIuKAAQhIAAhvBfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.9,-171.6,1024,343.2);


(lib.HillLightGrey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.instance = new lib.Tween23("synched",0);
	this.instance.setTransform(3885.2,-14);

	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.setTransform(1885.2,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1399).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1885.2},1399).wait(1));

	// Layer 2
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(1885.2,-14);

	this.instance_3 = new lib.Tween24("synched",0);
	this.instance_3.setTransform(-114.8,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1399).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:-114.8},1399).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(2000,54.4);

	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(0,54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1399).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:0},1399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-56.1,4000,165);


(lib.HillLightGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8 copy
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(1728.7,-23.8);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(-271.2,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-271.2},999).wait(1));

	// Layer 12 copy
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(188.5,-45.8);

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(-1811.4,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:-1811.4},999).wait(1));

	// Layer 13 copy
	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.setTransform(1652,-40.9);

	this.instance_5 = new lib.Tween14("synched",0);
	this.instance_5.setTransform(-348,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:-348},999).wait(1));

	// Layer 8
	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.setTransform(-271.2,-23.8);

	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.setTransform(-2271.2,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:-2271.2},999).wait(1));

	// Layer 12
	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.setTransform(-1811.4,-45.8);

	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.setTransform(-3811.4,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:-3811.4},999).wait(1));

	// Layer 13
	this.instance_10 = new lib.Tween19("synched",0);
	this.instance_10.setTransform(-348,-40.9);

	this.instance_11 = new lib.Tween20("synched",0);
	this.instance_11.setTransform(-2348,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:-2348},999).wait(1));

	// Layer 1
	this.instance_12 = new lib.Tween9("synched",0);

	this.instance_13 = new lib.Tween10("synched",0);
	this.instance_13.setTransform(-2000,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:-2000},999).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-102.5,4000,152.6);


(lib.HillDarkGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.instance = new lib.Tween21("synched",0);
	this.instance.setTransform(2970.5,-26.9);

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.setTransform(970.5,-26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:970.5},599).wait(1));

	// Layer 2
	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.setTransform(970.5,-26.9);

	this.instance_3 = new lib.Tween22("synched",0);
	this.instance_3.setTransform(-1029.5,-26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:-1029.5},599).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(2000,30.7);

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(0,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:0},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-103.3,4000,164.6);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#766F6A").s().p("AhSBTQgjgiABgxQgBgwAjgiQAigiAwAAQAwAAAjAiQAjAiAAAwQAAAxgjAiQgjAigwAAQgwAAgigig");
	this.shape.setTransform(734.6,642.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(118,111,106,0.875)").s().p("AiSCTQg8g+AAhVQAAhVA8g9QA9g8BVAAQBVAAA9A8QA9A9AABVQAABVg9A+Qg9A8hVAAQhVAAg9g8g");
	this.shape_1.setTransform(693.2,608);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(118,111,106,0.749)").s().p("AjRDSQhXhXAAh7QAAh6BXhXQBXhXB6AAQB7AABXBXQBXBXAAB6QAAB7hXBXQhXBXh7AAQh6AAhXhXg");
	this.shape_2.setTransform(651.7,573.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(118,111,106,0.624)").s().p("AkQERQhxhxAAigQAAifBxhxQBxhxCfAAQCgAABxBxQBxBxAACfQAACghxBxQhxBxigAAQifAAhxhxg");
	this.shape_3.setTransform(610.2,538.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(118,111,106,0.502)").s().p("AlQFQQiLiLAAjFQAAjECLiMQCMiLDEAAQDFAACLCLQCMCMAADEQAADFiMCLQiLCMjFAAQjEAAiMiMg");
	this.shape_4.setTransform(568.8,503.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(118,111,106,0.376)").s().p("AmPGQQililAAjrQAAjpClimQCmilDpAAQDrAAClClQClCmAADpQAADrilClQilCljrAAQjpAAimilg");
	this.shape_5.setTransform(527.3,469.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(118,111,106,0.251)").s().p("AnOHPQjAi/AAkQQAAkPDAi/QC/jAEPAAQEQAAC/DAQDAC/AAEPQAAEQjAC/Qi/DAkQAAQkPAAi/jAg");
	this.shape_6.setTransform(485.8,434.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(118,111,106,0.125)").s().p("AoNIPQjajagBk1QABk0DajZQDZjbE0AAQE1AADaDbQDZDZAAE0QAAE1jZDaQjaDZk1ABQk0gBjZjZg");
	this.shape_7.setTransform(444.4,399.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(118,111,106,0)").s().p("AhSBTQgjgiABgxQgBgwAjgiQAigiAwAAQAwAAAjAiQAjAiAAAwQAAAxgjAiQgjAigwAAQgwAAgigig");
	this.shape_8.setTransform(402.9,365,7.072,7.072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 2 copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#766F6A").s().p("AhSBTQgjgiABgxQgBgwAjgiQAigiAwAAQAwAAAjAiQAjAiAAAwQAAAxgjAiQgjAigwAAQgwAAgigig");
	this.shape_9.setTransform(734.6,642.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(118,111,106,0.918)").s().p("Ah8B9Qg0g0AAhJQAAhIA0g0QA0g0BIAAQBJAAA0A0QA0A0AABIQAABJg0A0Qg0A0hJAAQhIAAg0g0g");
	this.shape_10.setTransform(707,619.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(118,111,106,0.831)").s().p("AinCnQhFhFAAhiQAAhhBFhGQBGhFBhAAQBiAABFBFQBGBGAABhQAABihGBFQhFBGhiAAQhhAAhGhGg");
	this.shape_11.setTransform(679.3,596.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(118,111,106,0.749)").s().p("AjRDSQhXhXAAh7QAAh6BXhXQBXhXB6AAQB7AABXBXQBXBXAAB6QAAB7hXBXQhXBXh7AAQh6AAhXhXg");
	this.shape_12.setTransform(651.7,573.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(118,111,106,0.667)").s().p("Aj7D8QhohoAAiUQAAiTBohoQBohoCTAAQCUAABoBoQBoBoAACTQAACUhoBoQhoBoiUAAQiTAAhohog");
	this.shape_13.setTransform(624,550.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(118,111,106,0.584)").s().p("AklEmQh6h6AAisQAAirB6h6QB6h6CrAAQCsAAB6B6QB6B6AACrQAACsh6B6Qh6B6isAAQirAAh6h6g");
	this.shape_14.setTransform(596.4,527);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(118,111,106,0.502)").s().p("AlQFQQiLiLAAjFQAAjECLiMQCMiLDEAAQDFAACLCLQCMCMAADEQAADFiMCLQiLCMjFAAQjEAAiMiMg");
	this.shape_15.setTransform(568.8,503.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(118,111,106,0.416)").s().p("Al6F7QididABjeQgBjdCdidQCdidDdABQDegBCdCdQCcCdABDdQgBDeicCdQidCcjeABQjdgBidicg");
	this.shape_16.setTransform(541.1,480.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(118,111,106,0.333)").s().p("AmkGlQiuiuAAj3QAAj2CuiuQCuiuD2AAQD3AACuCuQCuCuAAD2QAAD3iuCuQiuCuj3AAQj2AAiuiug");
	this.shape_17.setTransform(513.5,457.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(118,111,106,0.251)").s().p("AnOHPQjAi/AAkQQAAkPDAi/QC/jAEPAAQEQAAC/DAQDAC/AAEPQAAEQjAC/Qi/DAkQAAQkPAAi/jAg");
	this.shape_18.setTransform(485.8,434.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(118,111,106,0.169)").s().p("An4H5QjSjQABkpQgBkoDSjQQDQjSEoABQEpgBDQDSQDSDQAAEoQAAEpjSDQQjQDSkpgBQkoABjQjSg");
	this.shape_19.setTransform(458.2,411.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(118,111,106,0.082)").s().p("AojIkQjijjAAlBQAAlADijjQDjjiFAAAQFBAADjDiQDiDjAAFAQAAFBjiDjQjjDilBAAQlAAAjjjig");
	this.shape_20.setTransform(430.5,388.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(118,111,106,0)").s().p("AhSBTQgjgiABgxQgBgwAjgiQAigiAwAAQAwAAAjAiQAjAiAAAwQAAAxgjAiQgjAigwAAQgwAAgigig");
	this.shape_21.setTransform(402.9,365,7.072,7.072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},7).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(4));

	// Layer 2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#766F6A").s().p("AhSBTQgjgiABgxQgBgwAjgiQAigiAwAAQAwAAAjAiQAjAiAAAwQAAAxgjAiQgjAigwAAQgwAAgigig");
	this.shape_22.setTransform(734.6,642.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(118,111,106,0.937)").s().p("AhyBzQgvgwAAhDQAAhCAvgvQAwgwBCAAQBDAAAwAwQAvAvAABCQAABDgvAwQgwAvhDAAQhCAAgwgvg");
	this.shape_23.setTransform(713.9,625.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(118,111,106,0.875)").s().p("AiSCTQg8g+AAhVQAAhVA8g9QA9g8BVAAQBVAAA9A8QA9A9AABVQAABVg9A+Qg9A8hVAAQhVAAg9g8g");
	this.shape_24.setTransform(693.2,608);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(118,111,106,0.812)").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBpAABJBKQBKBKAABnQAABohKBKQhJBKhpAAQhnAAhKhKg");
	this.shape_25.setTransform(672.4,590.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(118,111,106,0.749)").s().p("AjRDSQhXhXAAh7QAAh6BXhXQBXhXB6AAQB7AABXBXQBXBXAAB6QAAB7hXBXQhXBXh7AAQh6AAhXhXg");
	this.shape_26.setTransform(651.7,573.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(118,111,106,0.686)").s().p("AjwDxQhlhkABiNQgBiNBlhjQBjhkCNAAQCNAABkBkQBlBjAACNQAACNhlBkQhkBkiNAAQiNAAhjhkg");
	this.shape_27.setTransform(631,555.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(118,111,106,0.624)").s().p("AkQERQhxhxAAigQAAifBxhxQBxhxCfAAQCgAABxBxQBxBxAACfQAACghxBxQhxBxigAAQifAAhxhxg");
	this.shape_28.setTransform(610.2,538.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(118,111,106,0.561)").s().p("AkwExQh+h/AAiyQAAixB+h/QB+h+CyAAQCzAAB+B+QB+B/AACxQAACyh+B/Qh+B+izAAQiyAAh+h+g");
	this.shape_29.setTransform(589.5,521.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(118,111,106,0.502)").s().p("AlQFQQiLiLAAjFQAAjECLiMQCMiLDEAAQDFAACLCLQCMCMAADEQAADFiMCLQiLCMjFAAQjEAAiMiMg");
	this.shape_30.setTransform(568.8,503.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(118,111,106,0.439)").s().p("AlvFwQiZiYAAjYQAAjXCZiYQCZiYDWAAQDYAACZCYQCXCYABDXQgBDYiXCYQiZCYjYAAQjWAAiZiYg");
	this.shape_31.setTransform(548,486.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(118,111,106,0.376)").s().p("AmPGQQililAAjrQAAjpClimQCmilDpAAQDrAAClClQClCmAADpQAADrilClQilCljrAAQjpAAimilg");
	this.shape_32.setTransform(527.3,469.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(118,111,106,0.314)").s().p("AmvGwQiyizAAj9QAAj8CyiyQCzizD8AAQD9AACyCzQCzCyAAD8QAAD9izCzQiyCyj9AAQj8AAiziyg");
	this.shape_33.setTransform(506.6,451.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(118,111,106,0.251)").s().p("AnOHPQjAi/AAkQQAAkPDAi/QC/jAEPAAQEQAAC/DAQDAC/AAEPQAAEQjAC/Qi/DAkQAAQkPAAi/jAg");
	this.shape_34.setTransform(485.8,434.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(118,111,106,0.188)").s().p("AnuHvQjNjNABkiQgBkhDNjNQDMjNEiAAQEiAADNDNQDMDNABEhQgBEijMDNQjNDNkiAAQkiAAjMjNg");
	this.shape_35.setTransform(465.1,417.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(118,111,106,0.125)").s().p("AoNIPQjajagBk1QABk0DajZQDZjbE0AAQE1AADaDbQDZDZAAE0QAAE1jZDaQjaDZk1ABQk0gBjZjZg");
	this.shape_36.setTransform(444.4,399.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(118,111,106,0.063)").s().p("AotIuQjnjnAAlHQAAlHDnjmQDnjnFGAAQFHAADnDnQDnDmAAFHQAAFHjnDnQjnDnlHAAQlGAAjnjng");
	this.shape_37.setTransform(423.6,382.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(118,111,106,0)").s().p("AhSBTQgjgiABgxQgBgwAjgiQAigiAwAAQAwAAAjAiQAjAiAAAwQAAAxgjAiQgjAigwAAQgwAAgigig");
	this.shape_38.setTransform(402.9,365,7.072,7.072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[]},1).wait(7));

	// rear wheel
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#766F6A").s().p("AlpNXQimhGiBiBQiAiBhHinQhJisAAi8QAAi7BJitQBHinCBiAQCAiBCnhHQCshJC8AAQC8AACtBKQCmBGCBCBQCBCBBHCnQBJCtAAC6QAAC8hKCsQhGCniBCBQiBCBinBGQitBKi7AAQi8AAithKgAlglgQiTCTAADNQAADOCTCTQCTCTDNAAQDNAACTiTQCTiTAAjOQAAjNiTiTQiSiTjOAAQjNAAiTCTg");
	this.shape_39.setTransform(737.1,561.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(24));

	// front wheel
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#766F6A").s().p("AlnNXQinhGiBiBQiBiBhGinQhKisAAi8QAAi7BJitQBHinCBiAQCAiBCnhHQCthJC7AAQC9AACsBKQCnBGCBCBQCACBBHCnQBJCtAAC6QAAC8hICsQhHCniACBQiBCBimBGQitBKi+AAQi6AAithKgAlflgQiTCTAADNQAADOCTCTQCTCTDMAAQDPAACTiTQCSiTAAjOQACjMiTiUQiTiTjQAAQjMAAiTCTg");
	this.shape_40.setTransform(1362.5,561.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(24));

	// body
	this.instance = new lib.carBody("synched",0);
	this.instance.setTransform(1049,390.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:382.7},4).to({y:390.1},5).to({y:397.4},5).to({y:390.1},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(537.1,218.5,1024,436.1);


(lib.drivingCar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Car
	this.instance = new lib.car("synched",0);
	this.instance.setTransform(1399.9,-42.7,0.05,0.05,5.3,0,0,1043.5,653.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1044.6,regY:654.6,guide:{path:[1400,-42.6,1445.1,-38.8,1518.1,-17.4,1559.2,-5.3,1565.2,-3.7,1587.2,2.2,1596.6,1.6,1605.4,1.2,1626.4,-5.8,1635.3,-8.9,1668.6,-21,1697,-31.5,1712.6,-36.3,1735.8,-43.4,1748.5,-43.8,1756.2,-44,1774.6,-37.1,1785.8,-33,1815.4,-21.6,1880.1,1.4,1940.9,4.2,1985,4.6,2018.1,-11.2,2026.4,-15.2,2039.4,-22,2049.9,-27,2057.9,-27.1,2065.8,-27.1,2071.8,-24.5,2075.6,-22.9,2086.3,-17.9,2114.8,-5.9,2183.5,2.9,2287.4,13.3,2449.9,1.8,2585.3,-7.7,2711,-27.7,2717.4,-29,2730.4,-25.1,2739.8,-22.3,2756.5,-15.5,2780.5,-5.5,2783.1,-4.5,2797.2,1,2804.3,1.8,2809.2,2.8,2893.5,-18.4,2935.6,-29,2976.7,-39.9,2985.6,-42.4,2996.7,-40.3,3004.9,-38.7,3018.2,-33.4,3040.8,-24.4,3042.2,-23.9,3056.9,-18.7,3069.4,-16.9,3101.6,-11.3,3128.4,-10.2,3155.5,-9,3183.6,-12.2,3210.3,-15.2,3244.7,-22.7,3273.7,-29.2,3320.9,-42.1,3332.5,-43,3344,-44,3372.2,-45.4,3399,-42.9], orient:'auto'}},999).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1375.2,-65.3,51.3,24.1);


// stage content:



(lib.drivingCar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hill darkgreen
	this.instance = new lib.HillDarkGreen();
	this.instance.setTransform(2000,169.4,1,1,0,0,0,2000,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1000));

	// Hill lightgreen
	this.instance_1 = new lib.HillLightGreen();
	this.instance_1.setTransform(2000,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1000));

	// Driving car
	this.instance_2 = new lib.drivingCar_1();
	this.instance_2.setTransform(1402.2,90.1,1,1,0,0,0,1402.2,-61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-597.8},999).wait(1));

	// Hill lightgrey
	this.instance_3 = new lib.HillLightGrey();
	this.instance_3.setTransform(2000,145.6,1,1,0,0,0,2000,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1000,135,4000,165);

})(lib_drivingCar = lib_drivingCar||{}, images_drivingCar = images_drivingCar||{}, createjs = createjs||{}, ss = ss||{});
var lib_drivingCar, images_drivingCar, createjs, ss;