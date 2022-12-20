(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ultimatevalue_atlas_1", frames: [[1275,402,578,199],[0,0,1945,199],[0,201,1691,199],[0,402,1273,195],[0,599,1252,149],[1693,201,229,32]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_67 = function() {
	this.initialize(ss["ultimatevalue_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["ultimatevalue_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["ultimatevalue_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["ultimatevalue_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["ultimatevalue_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Group = function() {
	this.initialize(ss["ultimatevalue_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqCAKvIAA1dMBUFAAAIAAVdg");
	mask.setTransform(269.1,68.725);

	// Layer_3
	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(134.3,9.4,0.1779,0.1779);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(131.2,12.25);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(131.2,9.4,229,34.9), null);


(lib.btnplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AEAAAQAABqhLBLQhLBLhqAAQhpAAhLhLQhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpgAgrhcIAAAdIAACOIAAAhICShqg");
	this.shape.setTransform(25.55,25.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBFIAAiOIAAgdICTBjIiTBqg");
	this.shape_1.setTransform(28.525,26.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD400").s().p("Ai0C0QhLhKAAhqQAAhpBLhLQBLhLBpAAQBqAABKBLQBMBLAABpQAABqhMBKQhKBMhqAAQhpAAhLhMgAgrBxICThrIiThiIAAAdIgtgeIAADNIAtghg");
	this.shape_2.setTransform(25.55,25.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3B54A3").ss(5,1,1).p("AhJhlIAAAdIAACNIAAAiICThqg");
	this.shape_3.setTransform(28.525,26.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1,1).p("AEAAAQAABqhLBLQhLBLhqAAQhpAAhLhLQhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpg");
	this.shape_4.setTransform(25.55,25.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B54A3").s().p("AhJBFIAAiOIAAgdICTBjIiTBqg");
	this.shape_5.setTransform(28.525,26.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,56.1,56.1);


(lib.UltimateValuemovie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {initialstateplayer:0,textplay:26};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(239).call(this.frame_239).wait(1));

	// MaskLayer (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_26 = new cjs.Graphics().p("AnbFvIiGAAIgtgCIAAAAQgagCgTgGIAAAAIhjAAQhJAAgmgEIAAAAQg9gGgugTIAAAAQhUgkgyhWIAAAAQgxhUAEheIAAAAQAFhfA3g3IAAAAQAfgeAzgSIAAAAQAjgMA7gKIAAAAIBAgJIAAAAIAbgEIAAAAIAkgEIAAAAQALgUAQgQIAAAAIAPgNIAAAAQApggBBgJIAAAAQAXgDAkgBIAAAAQBigQCigBIAAAAIFegDIgVAEIAAAAQg/AJhxAFIAAAAQhuAEhrAAIAAAAQBrAABugEIAAAAQBxgFA/gJIAAAAIAVgEIAAAAIA8gMIAAAAIBSgRIAAAAQCbgaCjAXIAAAAQCJASCmA8IAAAAIAUgHIAAAAQA7gRBEARIAAAAQA9AQA6AoIAAAAQBEAvAuBAIAAAAQAxBEAOBLIAAAAQAMA/gQA9IAAAAQADBLgjAxIAAAAQgeAsg6AVIAAAAQg0ATg9gDIAAAAIgcgCIAAAAQgqAEg/AAIAAAAIyiAAQgVAGgaADIAAAAQgSABgeAAIAAAAIgPAAgAmtktIAAAAIAAAAIAAAAgAo2kuIgNgBIAAAAIANABgApKkvIgBAAIAAAAIABAAgApnkvIANAAIAAAAIgNAAgApakvIAAAAIAAAAIAAAAgAs7jpQgVANgUAPIAAAAIgbAEIAAAAQAggTAkgNgAs7jpIAWgMIAAAAQgQAQgLAUIAAAAIgkAEIAAAAQAUgPAVgNg");
	var mask_graphics_39 = new cjs.Graphics().p("AOhFMIlOgVQjGgNiIgDQiDgEilACIkqAHImoALQmAAKi/gBQhKAAgsgDQhAgGgygQQg7gUgsgkQgwgogUg1IgNgoQgIgYgKgNQgHgKgPgNIgYgWQgfgegIguQgJguARgoQAchBBRgiQA6gZBigNIFBgqQCMgTBQgFQBFgEBZACQAnAAB2AFQCVAFEpAEIURATQFhAFCxALQBFAEAnAJQA7ANAnAdQA8AtAXBZQASBEgDBhQgCBHgLAtQgRA+glAkQgiAgg3APQgoALhAAEQh4AJiUAAQiyAAjcgNg");
	var mask_graphics_87 = new cjs.Graphics().p("A0kIVQhXAAgzgFIhOgLIhQgLQgvgHghgJQgwgOgQgCQgagEg2AFQg2AFgbgEQg2gJgngsQgngsgDg3QgEg2AigxQAhgwA0gRQAagIAkgCIA+gBIBFAAQAnABAcAGQATADAoAMQAlAMAVADQASAEAhABQAkACAOACIApAHQAaAGAOABQAWADA3AAICVgBQA3gBAdAEQAuAFAgATQAlAVAWAnQAWAngBAqQgCArgYAmQgYAlgmATQgdAPgpAEQgYADgxAAgARnCPIlOgVQjGgNiIgDQiDgEimACIkpAHImoALQmAAKi/gBQhKAAgsgDQhAgGgygQQg7gUgsgkQgwgogUg0IgNgoQgIgYgKgNQgHgKgPgNIgYgWQgfgfgIguQgJguARgoQAchBBRgiQA6gZBigNIFBgqQCMgTBQgFQBFgEBZACQAnAAB2AFQCVAFEpAEIURATQFhAFCxALQBFAEAnAJQA7ANAnAdQA8AtAXBZQASBEgDBiQgCBHgLAtQgRA9glAkQgiAgg3APQgoALhAAEQh4AJiUAAQiyAAjcgNg");
	var mask_graphics_101 = new cjs.Graphics().p("A0kIVQhXAAgzgFIhOgLIhQgLQgvgHghgJQgwgOgQgCQgagEg2AFQg2AFgbgEQg2gJgngsQgngsgDg3QgEg2AigxQAhgwA0gRQAagIAkgCIA+gBIBFAAQAnABAcAGQATADAoAMQAlAMAVADQASAEAhABQAkACAOACIApAHQAaAGAOABQAWADA3AAICVgBQA3gBAdAEQAuAFAgATQAOAIAMALQAagwA3gaQA0gZBAAAQBSAAAyAlQAcAVARAhQARAgABAjQABAjgOAiQgPAhgbAXQgiAehIAWQglALgYADQgiAFgcgGQgdgHgZgUQgNgJgLgMIgCACQgYAlgmATQgdAPgpAEQgYADgxAAgARnCPIlOgVQjGgNiIgDQiDgEimACIkpAHImoALQmAAKi/gBQhKAAgsgDQhAgGgygQQg7gUgsgkQgwgogUg0IgNgoQgIgYgKgNQgHgKgPgNIgYgWQgfgfgIguQgJguARgoQAchBBRgiQA6gZBigNIFBgqQCMgTBQgFQBFgEBZACQAnAAB2AFQCVAFEpAEIURATQFhAFCxALQBFAEAnAJQA7ANAnAdQA8AtAXBZQASBEgDBiQgCBHgLAtQgRA9glAkQgiAgg3APQgoALhAAEQh4AJiUAAQiyAAjcgNg");
	var mask_graphics_107 = new cjs.Graphics().p("AlJIaQg6gCgmgeIgNgMQgIgGgIgCQgKgDgRADIgsAHQgYADgUgCQgngEgigWQgJgGgJgHQgeAQgrANQglALgYADQgiAFgcgGQgdgHgZgUQgNgJgLgMIgCACQgYAlgmATQgdAPgpAEQgYADgxAAIivgBQhXAAgzgFIhOgLIhQgLQgvgHghgJQgwgOgQgCQgagEg2AFQg2AFgbgEQg2gJgngsQgngsgDg3QgEg2AigxQAhgwA0gRQAagIAkgCIA+gBIBFAAQAnABAcAGQATADAoAMQAlAMAVADQASAEAhABQAkACAOACIApAHQAaAGAOABQAWADA3AAICVgBQA3gBAdAEQAuAFAgATQAOAIAMALQAagvA3gbQA0gZBAAAQBSAAAyAlIABABQAYgOAbgHQAOgDAfgDQAdgCAQgEQAQgEAfgMQAdgJAvgBQBrgBA+A3QAnAiANAxQAHAbABAqQAABdgkAwQgZAhgrARQgjAOgnAAIgKgBgARnCKIlOgVQjGgNiIgDQiDgEimACIkpAHImoALQmAAKi/gBQhKAAgsgDQhAgGgygQQg7gUgsgkQgwgogUg0IgNgoQgIgYgKgNQgHgKgPgNIgYgWQgfgfgIguQgJguARgoQAchBBRgiQA6gZBigNIFBgqQCMgTBQgFQBFgEBZACQAnAAB2AFQCVAFEpAEIURATQFhAFCxALQBFAEAnAJQA7ANAnAdQA8AtAXBZQASBEgDBiQgCBHgLAtQgRA9glAkQgiAgg3APQgoALhAAEQh4AKiUAAQiyAAjcgOg");
	var mask_graphics_117 = new cjs.Graphics().p("AjIIeQglgEgcgNQgfAJghgCQg6gCgmgeIgNgMQgIgGgIgCQgKgDgRADIgsAHQgYADgUgCQgngEgigWQgJgGgJgIQgeARgrANQglALgYADQgiAFgcgGQgdgHgZgUQgNgJgLgNIgCADQgYAlgmATQgdAPgpAEQgYADgxAAIivgBQhXAAgzgFIhOgLIhQgLQgvgHghgJQgwgOgQgCQgagEg2AFQg2AFgbgEQg2gJgngsQgngsgDg3QgEg2AigxQAhgwA0gRQAagIAkgCIA+gBIBFAAQAnABAcAGQATADAoAMQAlAMAVADQASAEAhABQAkACAOACIApAHQAaAGAOABQAWADA3AAICVgBQA3gBAdAEQAuAFAgATQAOAIAMAKQAagvA3gaQA0gZBAAAQBSAAAyAlIABABQAYgPAbgGQAOgDAfgDQAdgCAQgEQAQgEAfgMQAdgJAvgBQBrgBA+A3QAUASANAVIAEAAQAbgBA7ADQA5ACAdgCQAsgCBYgQQAvgHA8gDIBrgDIHwgKQA2gBAcADQAtAFAgARQAlAUAXAmQAXAmAAArQAAAqgXAmQgXAmgmAUQgcAQgpAFQgZAEgwABInMAJQhmACg0AEIhUAJIhVAJQhKAHh/ACIgWAAQglAAgXgDgARnCEIlOgVQjGgNiIgDQiDgEimACIkpAHImoALQmAAKi/gBQhKAAgsgDQhAgGgygQQg7gUgsgkQgwgngUg1IgNgoQgIgYgKgNQgHgKgPgNIgYgWQgfgfgIguQgJguARgoQAchBBRgiQA6gZBigNIFBgqQCMgTBQgFQBFgEBZACQAnAAB2AFQCVAFEpAEIURATQFhAFCxALQBFAEAnAJQA7ANAnAdQA8AtAXBZQASBEgDBiQgCBHgLAtQgRA9glAkQgiAgg3APQgoALhAAEQh4AJiUAAQiyAAjcgNg");
	var mask_graphics_122 = new cjs.Graphics().p("AmIIeQglgEgcgNQgfAJghgCQg6gCgmgeIgNgMQgIgGgIgCQgKgDgRADIgsAHQgYADgUgCQgngEgigWQgKgGgIgIQgeARgrANQglALgYADQgiAFgcgGQgdgHgZgUQgOgJgLgNIgBADQgYAlgmATQgdAPgpAEQgYADgxAAIivgBQhXAAgzgFIhOgLIhQgLQgvgHghgJQgwgOgQgCQgagEg2AFQg2AFgbgEQg2gJgngsQgngsgDg3QgEg2AigxQAhgwA0gRQAagIAkgCIA+gBIBFAAQAnABAcAGQATADAoAMQAlAMAVADQASAEAhABQAkACAOACIApAHQAaAGAOABQAWADA3AAICVgBQA3gBAdAEQAuAFAgATQAOAIAMAKQAZgvA4gaQA0gZBAAAQBSAAAyAlIABABQAYgPAbgGQAOgDAfgDQAdgCAQgEQAQgEAfgMQAdgJAvgBQBrgBA+A3QAUASANAVIAEAAQAbgBA7ADQA5ACAegCQAsgCBYgQQAvgHA7gDIBrgDIHwgKQA2gBAcADIAOACIAKgFQAdgNAmgEQAYgCAtAAIQpAAQBUAAAuAKQBHAPAnAqQAYAbALAkQAKAkgHAkQgHAjgXAeQgXAeghAQQgdAOgpADQgaADgvgCQotgMouAMQgyABgYgCIgVgDQgZALggAEQgZAEgwABInMAJQhmACg0AEIhTAJIhVAJQhKAHiAACIgWAAQglAAgXgDgAOnCEIlOgVQjGgNiIgDQiDgEilACIkqAHImoALQmAAKi/gBQhKAAgsgDQhAgGgygQQg7gUgsgkQgwgngUg1IgNgoQgIgYgKgNQgHgKgPgNIgYgWQgfgfgIguQgJguARgoQAchBBRgiQA6gZBigNIFBgqQCMgTBQgFQBFgEBZACQAnAAB2AFQCVAFEpAEIURATQFhAFCxALQBFAEAnAJQA7ANAnAdQA8AtAXBZQASBEgDBiQgCBHgLAtQgRA9glAkQgiAgg3APQgoALhAAEQh4AJiUAAQiyAAjcgNg");
	var mask_graphics_138 = new cjs.Graphics().p("A0hLWIgUgNQgMgIgKgDQgRgGglACQmZAWmUgPQgygCgcgFQgqgJgdgUQgqgegQg5QgOg1ANg5QAQhJAvglQAegWAtgLQAdgHA2gEQA7gFAeABQAxABAmANIArASQAbAMARAEQAVAFAtABIFjAJQApABAUgFQAQgDAVgKIAjgRQBDggBBgFIg5gBQhXAAgzgFIhNgLIhRgLQgugHghgJQgxgOgPgCQgagDg3AFQg1AFgbgFQg2gJgngsQgngrgEg3QgDg3AhgvQAhgwA1gRQAZgJAkgCIA/AAIBEAAQAnABAdAFQASAEAoAMQAmALAUAEQATADAgACQAkACAPACIAoAHQAbAFAOACQAWADA3AAICVgCQA3AAAcADQAuAGAgARQAOAIAMALQAaguA3gaQA1gaA/AAQBTAAAyAmIAAAAQAYgOAbgGQAOgDAfgDQAegDAPgEQAQgEAfgLQAegJAugBQBsgBA+A2QAUASANAWIADAAQAcgBA7ABQA4ADAdgCQAsgCBYgQQAvgHA8gDIBsgDIHvgKQA2gBAcADIAOACIALgFQAcgMAmgEQAYgDAtAAIQpAAQBUAAAvAKQBGAPAnApQAZAbAKAkQALAlgHAjQgHAkgXAeQgYAeggAPQgeAOgoAEQgaACgvgBQougNotANQgyABgZgDIgVgCQgYAKggAFQgaADgwABInLAKQhnACgzAEIhVAIIhVAKQhJAGiAACQg0ABgdgDQgmgFgcgMQgeAIghgBQg7gDglgeIgOgLQgIgGgHgCQgKgDgRADIgsAHQgZACgTgCQgngDgigWQgKgHgJgHQgdAQgsANQgkALgZAEQgiAEgbgGQgdgHgagTQgNgKgLgMIgBACQgYAmgnATQgdAOgoAFQgZACgxAAIg6AAIAVADQA4AJAuAeQAxAeAcAuQAnBBgLBQQgKBQg2A0Qg2A0hQAHIgZABQhCAAg0gjgARnhTIlOgWQjHgMiHgEQiEgDimACIkpAGImnALQmAAKjAAAQhKAAgrgEQhBgGgygQQg7gTgsglQgwgogUg0IgNgoQgIgYgJgOQgIgKgOgNIgYgVQgfgggJgtQgIguARgpQAbhABSgjQA5gYBjgNIFBgrQCLgTBQgFQBFgEBZACQAoABB2AEQCUAFEpAEIUSAUQFhAFCwAKQBGAFAnAIQA7ANAnAeQA7AtAYBYQARBEgCBjQgCBGgMAuQgQA+gmAkQgiAgg3APQgnAKhAAFQh4AJiVAAQiyAAjbgNg");
	var mask_graphics_158 = new cjs.Graphics().p("AuUMJQgigLgbgVQgcgWgOgeQgFgKgGgTIgGAHQg2A0hQAHQhRAIg+gqIgUgNQgMgIgKgDQgRgGglACQmZAWmUgPQgygCgcgFQgqgJgdgUQgqgegQg5QgOg1ANg5QAQhJAvglQAegWAtgLQAdgHA2gEQA7gFAeABQAxABAmANIArASQAbAMARAEQAVAFAtABIFjAJQApABAUgFQAQgDAVgKIAjgRQBDggBBgGIg5AAQhXAAgzgFIhNgLIhRgLQgugHghgJQgxgOgPgCQgagDg3AFQg1AFgbgFQg2gJgngsQgngrgEg3QgDg3AhgvQAhgwA1gRQAZgJAkgCIA/AAIBEAAQAnABAdAFQASAEAoAMQAmALAUAEQATADAgACQAkACAPACIAoAHQAbAFAOACQAWADA3AAICVgCQA3AAAcADQAuAGAgASQAOAIAMALQAagvA3gaQA1gaA/AAQBTAAAyAmIAAAAQAYgOAbgGQAOgDAfgDQAegDAPgEQAQgEAfgLQAegJAugBQBsgBA+A2QAUASANAWIADAAQAcgBA7ACQA4ADAdgCQAsgDBYgQQAvgHA8gDIBsgDIHvgKQA2gBAcADIAOACIALgFQAcgMAmgEQAYgDAtAAIQpAAQBUAAAvAKQBGAPAnAqQAZAaAKAkQALAlgHAjQgHAkgXAeQgYAeggAPQgeAOgoAEQgaACgvgBQougNotANQgyABgZgDIgVgCQgYAKggAFQgaADgwABInLAKQhnACgzAEIgmADIBbgBQA/ACApAWQA3AcAYA/QAYA+gWA7QgVA8hJA4QhOA7hGAEQgQABgZgDIgpgDQgVgBgrADIlOAUQiEAIhIALQgmAGiGAfQhqAXhDAFIgkABQg7AAgogOgAnuFSQAsAEAhANIAhAOQAUAJANADQAcAHA6gFICtgPQAggDAOgDQAagGARgLQAKgHARgQQARgRAKgHIALgHQhFAFhwACQg0ABgdgDQgmgFgcgMQgeAIghgBQg7gDglgeIgOgLQgIgGgHgCQgKgDgRADIgsAHQgZACgTgCQgngDgigWQgKgHgJgHQgdAQgsANQgkALgZAEQgiAEgbgGQgdgHgagTQgNgKgLgMIgBACQgYAmgnATQgdAOgoAFQgZACgxAAIg6AAIAVADQA4AJAuAeQAhAUAYAcIACgBQAfgSAtgHQAcgEA1AAIEeAAQA2AAAbACgARnhxIlOgWQjHgMiHgEQiEgDimACIkpAGImnALQmAAKjAAAQhKAAgrgEQhBgGgygQQg7gTgsglQgwgogUg0IgNgoQgIgYgJgOQgIgKgOgNIgYgVQgfgggJgtQgIguARgpQAbhABSgjQA5gYBjgNIFBgrQCLgTBQgFQBFgEBZACQAoABB2AEQCUAFEpAEIUSAUQFhAFCwAKQBGAFAnAIQA7ANAnAeQA7AtAYBYQARBEgCBjQgCBGgMAuQgQA+gmAkQgiAgg3APQgnAKhAAFQh4AJiVAAQiyAAjbgNg");
	var mask_graphics_177 = new cjs.Graphics().p("AuUMJQgigLgbgVQgcgWgOgeQgFgKgGgTIgGAHQg2A0hQAHQhRAIg+gqIgUgNQgMgIgKgDQgRgGglACQmZAWmUgPQgygCgcgFQgqgJgdgUQgqgegQg5QgOg1ANg5QAQhJAvglQAegWAtgLQAdgHA2gEQA7gFAeABQAxABAmANIArASQAbAMARAEQAVAFAtABIFjAJQApABAUgFQAQgDAVgKIAjgRQBDggBBgGIg5AAQhXAAgzgFIhNgLIhRgLQgugHghgJQgxgOgPgCQgagDg3AFQg1AFgbgFQg2gJgngsQgngrgEg3QgDg3AhgvQAhgwA1gRQAZgJAkgCIA/AAIBEAAQAnABAdAFQASAEAoAMQAmALAUAEQATADAgACQAkACAPACIAoAHQAbAFAOACQAWADA3AAICVgCQA3AAAcADQAuAGAgASQAOAIAMALQAagvA3gaQA1gaA/AAQBTAAAyAmIAAAAQAYgOAbgGQAOgDAfgDQAegDAPgEQAQgEAfgLQAegJAugBQBsgBA+A2QAUASANAWIADAAQAcgBA7ACQA4ADAdgCQAsgDBYgQQAvgHA8gDIBsgDIHvgKQA2gBAcADIAOACIALgFQAcgMAmgEQAYgDAtAAIQpAAQBUAAAvAKQBGAPAnAqQAZAaAKAkQALAlgHAjQgHAkgXAeQgYAeggAPQgeAOgoAEQgaACgvgBQougNotANQgyABgZgDIgVgCQgYAKggAFQgaADgwABInLAKQhnACgzAEIgmADIBbgBQA/ACApAWQA3AcAYA/IAGAUILRgDQAWgxA8gZQAygVBCAAQBLABCLAeQCRAgBGACIBTADQAwACAgANQApARAcAkQAdAkAFAsQAGAsgTAqQgTAqgkAYQghAWgxAIQgfAFg6ABIwzAVQiUADh3ABQhVAAgygMQg7gPgjghQgaAIgYABQgQABgZgDIgpgDQgVgBgrADIlOAUQiEAIhIALQgmAGiGAfQhqAXhDAFIgkABQg7AAgogOgAnuFSQAsAEAhANIAhAOQAUAJANADQAcAHA6gFICtgPQAggDAOgDQAagGARgLQAKgHARgQQARgRAKgHIALgHQhFAFhwACQg0ABgdgDQgmgFgcgMQgeAIghgBQg7gDglgeIgOgLQgIgGgHgCQgKgDgRADIgsAHQgZACgTgCQgngDgigWQgKgHgJgHQgdAQgsANQgkALgZAEQgiAEgbgGQgdgHgagTQgNgKgLgMIgBACQgYAmgnATQgdAOgoAFQgZACgxAAIg6AAIAVADQA4AJAuAeQAhAUAYAcIACgBQAfgSAtgHQAcgEA1AAIEeAAQA2AAAbACgARnhxIlOgWQjHgMiHgEQiEgDimACIkpAGImnALQmAAKjAAAQhKAAgrgEQhBgGgygQQg7gTgsglQgwgogUg0IgNgoQgIgYgJgOQgIgKgOgNIgYgVQgfgggJgtQgIguARgpQAbhABSgjQA5gYBjgNIFBgrQCLgTBQgFQBFgEBZACQAoABB2AEQCUAFEpAEIUSAUQFhAFCwAKQBGAFAnAIQA7ANAnAeQA7AtAYBYQARBEgCBjQgCBGgMAuQgQA+gmAkQgiAgg3APQgnAKhAAFQh4AJiVAAQiyAAjbgNg");
	var mask_graphics_203 = new cjs.Graphics().p("AxLMJQgigLgbgVQgcgWgOgeQgFgKgGgTIgGAHQg2A0hQAHQhRAIg+gqIgUgNQgMgIgKgDQgRgGglACQmZAWmUgPQgygCgcgFQgqgJgdgUQgqgegQg5QgOg1ANg5QAQhJAvglQAegWAtgLQAdgHA2gEQA7gFAeABQAxABAmANIArASQAbAMARAEQAVAFAtABIFjAJQApABAUgFQAQgDAVgKIAjgRQBDggBBgGIg5AAQhXAAgzgFIhNgLIhRgLQgugHghgJQgxgOgPgCQgagDg3AFQg1AFgbgFQg2gJgngsQgngrgEg3QgDg3AhgvQAhgwA1gRQAZgJAkgCIA/AAIBEAAQAnABAdAFQASAEAoAMQAmALAUAEQATADAgACQAkACAPACIAoAHQAbAFAOACQAWADA3AAICVgCQA3AAAcADQAuAGAgASQAOAIAMALQAagvA3gaQA1gaA/AAQBTAAAyAmIAAAAQAYgOAbgGQAOgDAfgDQAegDAPgEQAQgEAfgLQAegJAugBQBsgBA+A2QAUASANAWIADAAQAcgBA7ACQA4ADAegCQAsgDBYgQQAugHA8gDIBsgDIHvgKQA2gBAcADIAPACIAKgFQAcgMAmgEQAYgDAtAAIQpAAQBUAAAvAKQBGAPAnAqQAZAaAKAkQALAlgHAjQgHAkgXAeQgYAeggAPQgeAOgoAEQgaACgvgBQougNotANQgyABgZgDIgUgCQgZAKggAFQgaADgwABInLAKQhnACgzAEIglADIBagBQA/ACApAWQA3AcAYA/IAGAUILRgDQAWgxA8gZQAygVBCAAQBLABCLAeQCRAgBGACIBTADQAwACAgANQAMAFALAHQARgjAagWQAkgeA8gLQAWgFBWgGIBJgIQAsgEAcgBQBygDBpAnQBoAmAnBEQAeA1gNA/QgNBAgvAlQglAcg7AMQgkAHhGACIiCAEQgcABgNAFQgHADgKAHIgQALQgwAehDgKQgygIg7gjQgdgRgVgTQgJAIgKAHQghAWgxAIQgfAFg6ABIwzAVQiUADh3ABQhVAAgygMQg7gPgjghQgZAIgZABQgQABgZgDIgogDQgVgBgrADIlPAUQiEAIhIALQgmAGiGAfQhqAXhDAFIgkABQg6AAgpgOgAqlFSQAsAEAhANIAhAOQAUAJANADQAcAHA6gFICtgPQAggDAOgDQAagGARgLQALgHARgQQARgRAKgHIAMgHQhHAFhwACQg0ABgdgDQglgFgdgMQgeAIghgBQg7gDglgeIgOgLQgIgGgHgCQgKgDgRADIgsAHQgZACgTgCQgngDgigWQgKgHgIgHQgeAQgsANQgkALgZAEQgiAEgbgGQgdgHgagTQgNgKgLgMIgBACQgYAmgnATQgdAOgoAFQgZACgxAAIg6AAIAVADQA4AJAuAeQAhAUAYAcIACgBQAfgSAtgHQAcgEA1AAIEeAAQA2AAAbACgAOwhxIlOgWQjHgMiHgEQiEgDilACIkqAGImnALQmAAKjAAAQhKAAgrgEQhBgGgygQQg7gTgsglQgwgogUg0IgNgoQgIgYgJgOQgIgKgOgNIgYgVQgfgggJgtQgIguARgpQAbhABSgjQA5gYBjgNIFBgrQCLgTBQgFQBFgEBZACQAoABB2AEQCUAFEpAEIUSAUQFhAFCwAKQBGAFAnAIQA7ANAnAeQA7AtAYBYQARBEgCBjQgCBGgMAuQgQA+gmAkQgiAgg3APQgnAKhAAFQh4AJiUAAQizAAjbgNg");
	var mask_graphics_221 = new cjs.Graphics().p("AJ0P8QhZgDjXgVQjCgShugCQjXgEglgEQiOgPhZg8IgegWQgSgLgOgGQgUgHgagBQgRgBgfADIi4ANQhQAHgvgGQhGgJgqgkQgcgYgPgjQgPgjACgkQADglATghQAUghAfgTIAFgDQgtgCgigMQgigMgbgVQgcgWgOgeQgFgKgGgSIgGAGQg2A0hQAIQhRAHg+gpIgUgOQgMgHgKgEQgRgGglACQmZAXmUgQQgygCgcgFQgqgIgdgUQgqgegQg6QgOg1ANg4QAQhKAvgkQAegXAtgLQAdgGA2gFQA7gEAeAAQAxACAmAMIArASQAbAMARAEQAVAGAtABIFjAIQApABAUgEQAQgEAVgJIAjgSQBDgfBBgGIg5AAQhXAAgzgFIhNgLIhRgLQgugHghgJQgxgNgPgCQgagEg3AFQg1AFgbgEQg2gJgngsQgngsgEg3QgDg2AhgxQAhgwA1gRQAZgIAkgCIA/gBIBEAAQAnABAdAGQASADAoAMQAmAMAUADQATAEAgABQAkACAPACIAoAHQAbAGAOABQAWADA3AAICVgBQA3gBAcAEQAuAFAgATQAOAIAMALQAagwA3gaQA1gZA/AAQBTAAAyAlIAAABQAYgPAbgGQAOgDAfgDQAegCAPgEQAQgEAfgMQAegJAugBQBsgBA+A3QAUASANAWIADgBQAcgBA7ADQA4ACAegCQAsgCBYgQQAugHA8gDIBsgDIHvgKQA2gBAcADIAPACIAKgFQAcgNAmgEQAYgCAtAAIQpAAQBUAAAvAKQBGAPAnAqQAZAbAKAkQALAkgHAkQgHAjgXAeQgYAeggAQQgeANgoADQgaADgvgCQougLotALQgyABgZgCIgUgDQgZALggAEQgaAEgwABInLAJQhnACgzAEIglAEIBagCQA/ADApAVQA3AdAYA+IAGAUILRgDQAWgxA8gZQAygVBCABQBLAACLAfQCRAfBGADIBTACQAwADAgANQAMAFALAGQARgiAagXQAkgeA8gLQAWgEBWgHIBJgHQAsgFAcgBQBygDBpAnQBoAnAnBEQAeA0gNBAQgNBAgvAkQglAdg7ALQgkAHhGADIiCAEQgcABgNAFQgHADgKAGIgQALQgwAehDgKQgygHg7gjQgdgRgVgTQgJAIgKAHQghAWgxAIQgfAFg6ABIwzAUIh1ADQB5AZBoArQBlAoArA3QAvA9gBBZQgBBSgsAyQglArhGAPQgoAJg5AAIgggBgAhQHIIlPAVQiEAHhIAMQgmAGiGAeIgCABQCJgFDGgSQEvgcBdgFQBtgGBiACQgRgKgNgNQgZAIgZACQgQAAgZgCIgogEIgMAAQgTAAghACgAqlBtQAsAEAhANIAhAOQAUAIANAEQAcAHA6gFICtgQQAggDAOgDQAagFARgMQALgGARgRQARgRAKgGIAMgHQhHAFhwACQg0ABgdgEQglgEgdgMQgeAIghgCQg7gCglgeIgOgMQgIgGgHgCQgKgDgRADIgsAHQgZADgTgCQgngEgigVQgKgGgIgHQgeAQgsAMQgkALgZADQgiAFgbgGQgdgHgagTQgNgJgLgMIgBACQgYAkgnATQgdAPgoAEQgZADgxAAIg6AAIAVACQA4AJAuAeQAhAVAYAcIACgBQAfgTAtgGQAcgEA1AAIEegBQA2AAAbADgAOwlXIlOgVQjHgNiHgDQiEgEilACIkqAHImnALQmAAKjAgBQhKAAgrgDQhBgGgygQQg7gUgsgkQgwgogUg1IgNgoQgIgYgJgNQgIgKgOgNIgYgWQgfgfgJguQgIguARgoQAbhBBSgiQA5gZBjgNIFBgqQCLgTBQgFQBFgEBZACQAoAAB2AFQCUAFEpAEIUSATQFhAFCwALQBGAEAnAJQA7ANAnAdQA7AtAYBZQARBEgCBiQgCBHgMAtQgQA+gmAkQgiAgg3APQgnALhAAEQh4AJiUAAQizAAjbgNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_graphics_26,x:191.5263,y:87.8954}).wait(13).to({graphics:mask_graphics_39,x:263.099,y:95.1962}).wait(48).to({graphics:mask_graphics_87,x:243.2741,y:114.0667}).wait(14).to({graphics:mask_graphics_101,x:243.2741,y:114.0667}).wait(6).to({graphics:mask_graphics_107,x:243.2741,y:114.5531}).wait(10).to({graphics:mask_graphics_117,x:243.2741,y:115.1778}).wait(5).to({graphics:mask_graphics_122,x:262.4985,y:115.1778}).wait(16).to({graphics:mask_graphics_138,x:243.3452,y:136.8241}).wait(20).to({graphics:mask_graphics_158,x:243.3452,y:139.8297}).wait(19).to({graphics:mask_graphics_177,x:243.3452,y:139.8297}).wait(26).to({graphics:mask_graphics_203,x:261.6162,y:139.8297}).wait(18).to({graphics:mask_graphics_221,x:261.6162,y:162.7738}).wait(19));

	// text
	this.instance = new lib.CachedBmp_67();
	this.instance.setTransform(190.85,205.4,0.2668,0.2668);

	this.instance_1 = new lib.CachedBmp_66();
	this.instance_1.setTransform(13.85,163.4,0.2668,0.2668);

	this.instance_2 = new lib.CachedBmp_65();
	this.instance_2.setTransform(47.8,121.4,0.2668,0.2668);

	this.instance_3 = new lib.CachedBmp_64();
	this.instance_3.setTransform(98,62.05,0.2668,0.2668);

	this.instance_4 = new lib.ClipGroup_0();
	this.instance_4.setTransform(302.95,157.55,1.5,1.5,0,0,0,269.1,68.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},26).wait(214));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD400").s().p("EgpkAcrMAAAg5VMBTJAAAMAAAA5Vg");
	this.shape.setTransform(257.3,183.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,0,532.4,367.1);


// stage content:
(lib.ultimatevalue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.playultimatvaluebtn.addEventListener("click",()=>{
			createjs.Sound.stop();
			createjs.Sound.play('UltimateValues');
			});
		this.avatar.gotoAndPlay("textplay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.playultimatvaluebtn = new lib.btnplay();
	this.playultimatvaluebtn.name = "playultimatvaluebtn";
	this.playultimatvaluebtn.setTransform(47.95,73.3,1.874,1.874,0,0,0,25.6,25.6);
	new cjs.ButtonHelper(this.playultimatvaluebtn, 0, 1, 2, false, new lib.btnplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playultimatvaluebtn).wait(1));

	// Layer_1
	this.avatar = new lib.UltimateValuemovie();
	this.avatar.name = "avatar";
	this.avatar.setTransform(535.85,41.35,1.874,1.874,0,0,0,269.4,0);

	this.timeline.addTween(cjs.Tween.get(this.avatar).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(507.3,395.7,504.59999999999997,333.50000000000006);
// library properties:
lib.properties = {
	id: '4475D6C07527E048893EDE205A07FFCB',
	width: 1024,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ultimatevalue_atlas_1.png?1671528789956", id:"ultimatevalue_atlas_1"},
		{src:"sounds/UltimateValues.mp3?1671528789977", id:"UltimateValues"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4475D6C07527E048893EDE205A07FFCB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;