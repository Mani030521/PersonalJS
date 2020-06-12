/*sandbox pattern - alternative to namespace pattern, a simpler version of dependencies injection*/

function Sandbox() {

	var args = Array.prototype.slice.call(arguments);
	var callback = args.pop();

	var modules = (args[0] && typeof args[0] === "string") ? args : args[0];

	if (!(this instanceof Sandbox)) {
		return new Sandbox(modules, callback);
	}
	console.log(modules,'=====')
	console.log(callback,'=====')
	this.a = 1;
	this.b = 2;

	if (!modules || modules === "*") {
		modules = [];
		for (var i in Sandbox.modules) {
			if (Sandbox.modules.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}

	for (i = 0, max = modules.length; i < max; i++) {
		Sandbox.modules[modules[i]](this);
	}
	callback(this);
}
Sandbox.modules = {
	dom :function(_this){
		_this.privateName = 'dom Called'
		return _this.privateName
	},
	ajax :function(_this){
		_this.ajaxname = 'ajax Called'
		return _this.ajaxname
	}
}

Sandbox.prototype = {
	name: "My application",
	version: "1.0",
	getName: function() {
		return this.name;
	}
};
Sandbox(["dom", "ajax"], function(box){
	console.log(box,'-==')
	/*box will have all the property from dom and ajax
	and could write a peice of functionality here using
	these two modules 	
	*/
})