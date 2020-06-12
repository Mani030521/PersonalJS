/*factory - passing object instantiation responsibility to factory method*/

var CarMaker = function () {}

CarMaker.prototype.drive = function () {
	return this.doors
}

CarMaker.factory = function (type) {
	var newcar
	if (CarMaker.hasOwnProperty(type)) {
		CarMaker[type].prototype = new CarMaker()
		newcar = new CarMaker[type]()
		return newcar
	} else {
		CarMaker[type] = function(){
			this.doors = 2
		}
		CarMaker[type].prototype = new CarMaker()
		newcar = new CarMaker[type]()
		return newcar
	}
}

CarMaker.Compact = function () {
	this.doors = 4
}

CarMaker.Convertible = function () {
	this.doors = 2
}

CarMaker.SUV = function () {
	this.doors = 8
}


// USER's Input -----> SUV
// var car = CarMaker.factory("SUV");
var car = CarMaker.factory();
console.log(car);
// console.log(car.drive());
// console.dir(CarMaker.factory("SUV"))
