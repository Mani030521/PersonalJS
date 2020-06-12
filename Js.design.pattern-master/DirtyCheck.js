/*dirty checking - basic version of angular's dirty check feature*/

var Scope = function () {
	this.watchCollection = []
	this.watchCollection.last = ""
	this.initialRender = false
}

Scope.prototype = {
	watch: function (watchFn, listFn, initialFn) {
		this.watchCollection.push({
			watcher: watchFn,
			listener: listFn,
			initialization: initialFn,
		})
	},

	update: function () {
		this.watchCollection.forEach(
			function (watchObj) {
				var newVal = watchObj.watcher()
				var oldVal = this.watchCollection.last
				if (!this.initialRender) {
					this.watchCollection.last = newVal
					this.initialRender = true
					watchObj.initialization()
				} else if (newVal !== oldVal) {
					this.watchCollection.last = newVal
					watchObj.listener()
				}
			}.bind(this)
		)
	},
}

var scope = new Scope()
scope.title = "nike"

var watchFn = function () {
	return scope.title
}

var listFn = function () {
	console.log("DOM Changes")
}

var initialFn = function () {
	console.log("Initial Render")
}

scope.watch(watchFn, listFn, initialFn)
scope.update()
scope.title = "Mani"
scope.update()
scope.title = "asasdsasdasdad"
scope.update()
