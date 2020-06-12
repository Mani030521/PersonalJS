//shallow copy
var extend = function(parent, child){
	var child = child || {};
	for (var i in parent){
		if(parent.hasOwnProperty(i)){
			child[i] = parent[i];
		}
	}

	return child;
};

//deep copy
var extendDeep = function(parent, child){
	var toStr = Object.prototype.toString;
	astr = "[object Object]";

	var child = child || {};
	for (var i in parent){
		if(parent.hasOwnProperty(i)){
			if(typeof parent[i] === "object"){
				child[i] = (toStr.call(parent[i]) === astr)? {} : []; // Key part for creating new Object
				child[i] = extendDeep(parent[i], child[i])
			}else{
				console.log(i)
				child[i] = parent[i];
			}
		}
	}
	return child;
};

var parent = {
	name: 'mani',
	arr : [2,3,4,4],
	obj : {prop : {
		prop2: 'asdasdd'
	}}
};

var child = extendDeep(parent);
// var child = Object.assign({}, parent);
// var child = {...parent};
child.name = 'asdas'
child.obj.prop = {
	prop3: 'asdas'
}
console.log(child)
console.log(parent)