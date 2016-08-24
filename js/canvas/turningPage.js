(function (lib, img, cjs, ss) {

var p, // shortcut to reference prototypes
    
    // reference the right stage!!! FFS $#%#$)@
    stage = animations.stages.turningPage;
    
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 320,
	height: 200,
	fps: 40,
	color: "#323232",
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



(lib.RightpageHome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AiUDaQgFgCgJgSIiSkZQgFgKABgEQABgGAMgDQEXhOBvggQAKgDAHAGQACABAHAMQANATgBACQAAAFgZAHIkIBKQgSAFgBAEQgCAEAJAQIASAhQAMAVAGADQAGADAWgHIDphCQAPgEAIACQAIADAGANIARAcIgTAHIiFAjIh3AiQgMADgBAFQgCAFAFAJQAXAmAHARQAFAJAGACQAGACAKgDIE0hXQANgEAIADQAIADAHALQAQAbgCAFQgCAGgdAIImXByQgOAEgGAAIgDAAg");
	this.shape.setTransform(85.3,45.5,0.396,0.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AkwD9IhblBIgBgOIAOACIF1B8QAIADAEgCQAFgBAFgIIDakjIAKgLICXFAQAGAOgBADQgCADgPAFQg6APgbAKQgMAEgGgEQgFgDgFgLIhIilIhJBmQgvBDgaApQgIALgQgFIjThMIg3gSIA2CsQADAKgCAFQgDAFgKADQgUAFg/ASIgHACQgLAAgEgOg");
	this.shape_1.setTransform(57.1,53.1,0.396,0.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AnOBHIAAh1IGSA9IgZisIDMg6IAzEJIElAvIhOB2g");
	this.shape_2.setTransform(18.4,36.4,0.396,0.396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AjDAMIjEA5IAAnwIKgB5IBvJBIoyCdg");
	this.shape_3.setTransform(15.6,58.6,0.396,0.396);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93C25E").s().p("A36r0IdconISaalMgv3AOSg");
	this.shape_4.setTransform(60.6,51.8,0.396,0.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.3,103.6);


(lib.LeftpageHome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7DB14E").s().p("ABYB+IgVAAQiVgBhhhTQgWgTgQgbQgMgXAHgYQAHgYAWgQQAmgbBAgGQBJgGBCAVQArANAcAPQAlASAZAZQAYAYALASQANAXgFAYQgEAWgVASQgiAcg5AHIgNAAIgHAAg");
	this.shape.setTransform(64.1,49.9,0.396,0.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("Ai3B0QhYgsgpg9QgfgsAKgrQALgrAxgcQBIgoBtACQDKAICNBoQA0AnAWAsQARAmgJAiQgJAigiAYQg6AohbAFIgpABQiUAAiHhGg");
	this.shape_1.setTransform(64.1,50,0.396,0.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEBEB").s().p("ACuDWIhWgWQgJgCgBgFQgCgEAFgIIA4hpQAFgIgBgEQgCgFgKgDQh6gfiKglQgLgDgGACQgGADgFAJQgUAhgrBEQgEAHgFACQgFACgIgDIhHgUQgQgEgBgDQgBgDAIgNIB9i9IAthEIAHgHIAIgGIBVAWQABABABAFQABAFgBACIg4BaQgHAKACADQABAFAMADID+BDQAKACAGgCQAGAAAFgKIAWgrQAPgcAHgPQAGgMAHgDQAIgDAMAEQAeALAgAGQAMACACAFQACAFgFALIh5DuIgUAoQgCADgFACQgEABgCAAIgCAAg");
	this.shape_2.setTransform(36.6,42.9,0.396,0.396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBEBEB").s().p("AncAYIO5ihIAAB3ItpCcg");
	this.shape_3.setTransform(102.3,36.2,0.396,0.396);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBEBEB").s().p("AmRELIBoo1IK7iCIAAHwIjIg3IgSGgg");
	this.shape_4.setTransform(105.3,54.9,0.396,0.396);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7DB14E").s().p("A37FbIRg5HIeWHIMAABAgRg");
	this.shape_5.setTransform(60.6,49.9,0.396,0.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.2,99.9);


(lib.LeftPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7DB14E").s().p("ABFFgQiChPhahKQhvhbhJhpQhNhrgChnQgEh7BshPQBdhECYgYQDHgeDjAmIA2AKIAAAiQg/gOgbgDQivgTh2AOQhIAIg4AQQhDASg3AgQhKAsgdBIQgdBHAYBTQARA7AmA5QAfAuAxA0QCPCWDSBuQAwAYBOAiIB/A3IAAA3QjOhPiMhUg");
	this.shape.setTransform(99,53.8,0.36,0.36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("ABvDNQgkgRgrgYQg5gigygqQglgfgXgcQgdgggQgkQgTgtAJgmQALgxA0gdQArgYBDgJQA+gIBPAJQAXACAvAJIAAHLQgpgOgqgTg");
	this.shape_1.setTransform(94.5,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEBEB").s().p("AiRD1IALgYIACgFIBGiKIBQipQAHgOgMgNQgNgSgHgKQgKgOAJgPIAFgIIAXgoIAagqIAEgEIAEgCIABAFIAAAEIgVA/QgBAFAAACQAAACAFABIAGABQADgBACgEIAahBQACgEADgBIADAAIADABQACACgBAEIgTBAIgDAJQAFADADgBQADgCACgEIAbhAIAEgFQACgCADACQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQABAEgBACIgVBFQAGAFADAAQACgBADgHIAag/IACgFQACgDAEACQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABQABADgBACIgPBjQgCARgQAGIgjAMQgLAEgGAFQgHAGgDALIgzCyIgSA/IgSA7IgQA0g");
	this.shape_2.setTransform(59,44.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DB14E").s().p("Ao4B6IGgpFILRChIAAL2g");
	this.shape_3.setTransform(57,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,92.1);


(lib.hoverArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(42,42,42,0.008)").s().p("AyLIJIAAwRMAkXAAAIAAQRg");
	this.shape.setTransform(222.7,98.9,0.956,0.949,0,0,0,116.5,52.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.7,98.9);


(lib.Book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// Right Home
	this.instance = new lib.RightpageHome();
	this.instance.setTransform(12.5,40.6,0.476,0.998,0,0,-89,0,102.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:0.4,regY:103.5,scaleX:0.96,scaleY:0.93,skewY:-1.4,x:12.4,y:40.9},9).wait(1));

	// right page shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape.setTransform(69.8,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.059)","rgba(0,0,0,0.016)","rgba(0,0,0,0.008)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_1.setTransform(69.8,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.118)","rgba(0,0,0,0.035)","rgba(0,0,0,0.016)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_2.setTransform(69.8,-7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.176)","rgba(0,0,0,0.051)","rgba(0,0,0,0.024)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_3.setTransform(69.8,-7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.231)","rgba(0,0,0,0.067)","rgba(0,0,0,0.031)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_4.setTransform(69.8,-7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.29)","rgba(0,0,0,0.082)","rgba(0,0,0,0.039)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_5.setTransform(69.8,-7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0.102)","rgba(0,0,0,0.051)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_6.setTransform(69.8,-7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0.408)","rgba(0,0,0,0.118)","rgba(0,0,0,0.059)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_7.setTransform(69.8,-7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0.133)","rgba(0,0,0,0.067)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_8.setTransform(69.8,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.525)","rgba(0,0,0,0.149)","rgba(0,0,0,0.075)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_9.setTransform(69.8,-7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0.58)","rgba(0,0,0,0.165)","rgba(0,0,0,0.082)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_10.setTransform(69.8,-7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0.639)","rgba(0,0,0,0.184)","rgba(0,0,0,0.09)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_11.setTransform(69.8,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0.698)","rgba(0,0,0,0.2)","rgba(0,0,0,0.098)"],[0,1,1],-56.8,59.7,42,-10.8).s().p("Ao3kYIK7jGIG3JlIx1FYg");
	this.shape_12.setTransform(69.8,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// Top left page
	this.instance_1 = new lib.LeftPage();
	this.instance_1.setTransform(13,40.6,1,1,0,0,0,114,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:116,regY:91.2,scaleX:0.51,skewY:89.4,x:12.6,y:39.9},9).to({_off:true},1).wait(9));

	// left page home shadow
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0.698)"],[0,1],-20.8,-27.7,63.7,32.7).s().p("Ao4B7IGepHILSClIAAL0g");
	this.shape_13.setTransform(-44.2,-5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0.176)","rgba(0,0,0,0.62)"],[0,1],-24.9,-24.6,62.9,29).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_14.setTransform(-44.2,-5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0.157)","rgba(0,0,0,0.541)"],[0,1],-28.9,-21.5,62.2,25.4).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_15.setTransform(-44.2,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0.133)","rgba(0,0,0,0.467)"],[0,1],-32.9,-18.5,61.4,21.7).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_16.setTransform(-44.2,-5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0.11)","rgba(0,0,0,0.388)"],[0,1],-36.8,-15.4,60.7,18.1).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_17.setTransform(-44.2,-5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0.09)","rgba(0,0,0,0.31)"],[0,1],-40.9,-12.3,59.9,14.5).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_18.setTransform(-44.2,-5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0.067)","rgba(0,0,0,0.231)"],[0,1],-44.8,-9.2,59.2,10.9).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_19.setTransform(-44.2,-5.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0.043)","rgba(0,0,0,0.157)"],[0,1],-48.9,-6.2,58.4,7.2).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_20.setTransform(-44.2,-5.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.024)","rgba(0,0,0,0.078)"],[0,1],-52.8,-3.1,57.7,3.6).s().p("Ao4B7IGdpHILUClIgBL0g");
	this.shape_21.setTransform(-44.2,-5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-56.9,0,56.9,0).s().p("Ao3B7IGdpHILSClIAAL0g");
	this.shape_22.setTransform(-44.2,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).wait(9));

	// left page home
	this.instance_2 = new lib.LeftpageHome();
	this.instance_2.setTransform(-44.3,-5.3,0.938,0.921,0,0,0,60.6,50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19));

	// Middle left page
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7DA652").s().p("AoigIIBaiOIPrEtg");
	this.shape_23.setTransform(-46,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(19));

	// Static parts
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#93C25E").s().p("AmeHMIB/g3QBOgiAwgYQDShuCPiWQAxg0AfguQAmg5ARg7QAXhTgchHQgdhIhKgsQg3gghDgSQg4gQhIgIQh2gOivATQgRACgmAIIgjAHIAAgiIA2gKQDjgmDHAeQCYAYBdBEQBsBPgEB7QgBA4gWA4QgTAvglAzQhJBphvBbQhaBKiCBPQiMBUjOBPg");
	this.shape_24.setTransform(27.5,2.4,0.36,0.36);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AobppIBIgNQBRgOAogFQDbgXCxAWQBYALBFAUQBSAXBDAlQCRBRAfCHQAZBqg2B9QgtBmhQBcQhBBMhlBXQiNB3iiBcQh3BEhkAuQh0A2hxAmg");
	this.shape_25.setTransform(32,3.6,0.36,0.36);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#536D38").s().p("A3rDOIgBgDMArrgGYIDtGbg");
	this.shape_26.setTransform(72.1,36.1,0.36,0.36);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#688843").s().p("A3rDPIDvmeMArpAGeg");
	this.shape_27.setTransform(-46.5,36,0.36,0.36);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#688843").s().p("AT6mgID3GJMgvhAG4g");
	this.shape_28.setTransform(71.8,26.5,0.36,0.36);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABNKlIgfh0QgShGgOgvQg1i3gziSQgjhlhLhSQh3iCgzjIIgQg2QgKghgEgVQgKg4ABgsQABg1AQguQAMggAbgUQAbgVAgAAQATgBAQALQAPAJAIARQAgBDAcBLQBJDCA4CgQAJAaAYBNQARBBAPAlQA1CDA7B1QArBUBzDHIB7DJQg3APhhAdIiZAtg");
	this.shape_29.setTransform(69.9,-8,0.36,0.36);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93C25E").s().p("A41sJIeoosITDauMgxrAO9g");
	this.shape_30.setTransform(69.8,-7.3,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.1,-55.3,228.2,98.9);


// stage content:
(lib.turningPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var frequency = 5;
		stage.enableMouseOver(frequency);
		
		this.stop();
		
		// setup custom timer to listen to
		var ticker = createjs.Ticker;
		
		ticker.framerate = 30;
		
		// listen for timer ticks
		ticker.addEventListener('tick', onTimerTick);
		
		// create local reference to book MC
		var book = this.book;
		var hoverArea = this.hoverArea;
        
		// boolean value to store if the icon is currently being hovered
		var hovered = false;
		
		// icon hover event listeners
		hoverArea.addEventListener('mouseover', function(){
			hovered = true;
		});
		
		hoverArea.addEventListener('mouseout', function(){
			hovered = false;
		});
		
		function onTimerTick () {
			
			// if hovered and animation is not fully played: go to next frame
			if(hovered && book.currentFrame < book.totalFrames - 1) {
				book.gotoAndStop(book.currentFrame + 1);
			}
		
			// if not hovered and animation is not fully reversed: go to previous frame
			else if(!hovered && book.currentFrame > 0) {
				book.gotoAndStop(book.currentFrame - 1);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Logo hover area
	this.hoverArea = new lib.hoverArea();
	this.hoverArea.setTransform(160.1,129.8,1.409,1.358,0,180,0,111.4,49.4);

	this.timeline.addTween(cjs.Tween.get(this.hoverArea).wait(2));

	// Logo Clip
	this.book = new lib.Book();
	this.book.setTransform(209.2,125,1.379,1.379,0,0,0,46.7,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.book).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163.1,162.7,316.9,137.3);

})(lib_turningPage = lib_turningPage||{}, images_turningPage = images_turningPage||{}, createjs = createjs||{}, ss = ss||{});
var lib_turningPage, images_turningPage, createjs, ss;