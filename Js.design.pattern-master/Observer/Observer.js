/* ---------------> ObserverList */

function ObserverList() {
	this.observerList = []
}

ObserverList.prototype.add = function (obj) {
	return this.observerList.push(obj)
}

ObserverList.prototype.count = function () {
	return this.observerList.length
}

ObserverList.prototype.get = function (index) {
	if (index > -1 && index < this.observerList.length) {
		return this.observerList[index]
	}
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
	var i = startIndex
	while (i < this.observerList.length) {
		if (this.observerList[i] === obj) {
			return i
		}
		i++
	}
	return -1
}

ObserverList.prototype.removeAt = function (index) {
	this.observerList.splice(index, 1)
}

function Subject() {
	this.observers = new ObserverList()
}

/* ---------------> Subject */
Subject.prototype.addObserver = function (observer) {
	this.observers.add(observer)
}

Subject.prototype.removeObserver = function (observer) {
	this.observers.removeAt(this.observers.indexOf(observer, 0))
}

Subject.prototype.count = function () {
	return this.observers.count()
}
Subject.prototype.notify = function (context) {
	var observerCount = this.observers.count()
	for (var i = 0; i < observerCount; i++) {
		console.log(this.observers)
		this.observers.get(i).update(context)
	}
}

/* ---------------> Subject The Observer */
function Observer() {
	this.update = function () {
		// ...
	}
}

function extend(obj, extension) {
	for (var key in extension) {
		obj[key] = extension[key]
	}
}

// Concrete Subject
const sub = new Subject()
function concreteSubject() {
	const publisherValue = document.getElementById("inputBox").value
	sub.notify(publisherValue)
}

// Concrete Observer

function addNewObserver(uniqueValue) {
	const p = document.getElementById(uniqueValue)
	sub.addObserver(p)
	extend(p, new Observer)
	p.update = function(data) {
		p.innerText = data
	}
}

function removeObserver(uniqueValue){
	const p = document.getElementById(uniqueValue)
	sub.removeObserver(p)
}