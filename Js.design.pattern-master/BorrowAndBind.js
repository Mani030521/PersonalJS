/* borrow and bind - internal of common jquery proxy method */

var bind = function(o, m) {
	return function(){
		return m.apply(o, arguments);
	};
};

var one = {
	name: "one",
	say: function(greet) {
		return greet + ", " + this.name ;
	}
};

var two = {
	name: "two"
};


twosay = bind(two, one.say);
console.log(twosay("hello"));
console.log(one.say.bind(two, 'hello')())