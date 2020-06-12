/*private member - use function scope as a private member scope and only expose what you need*/

var Gadget = function(){

	//private member
	var spec = {
		name : "xperia",
		color: "white",
		type: "mobile",
		company: "sony",
	}

	/* spec is passed by reference and 
	could be changed by end user */
	this.passByReference = function(){
		return spec
	}

	/* spec is passed by Value and 
	could not be changed by end user */
	this.passByValue = function(){
		const tempSpec = { ...spec }
		return tempSpec
	}

	/*Encapsulation Hiding certain details from end user*/
	this.getEncap = function(){
		return spec.type;
	}

}