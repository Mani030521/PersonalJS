/* config object - avoid using more than 3 parameter in function instead use config object or destructure*/


var config = {
	firstname : "nitesh",
	lastname: "sharma",
	username: "sherlock",
	gender: "male",
	type: "developer"
}

var addPerson = function({ firstname, type, lastname}){
	console.log(firstname +" is "+ type)
}

addPerson(config)