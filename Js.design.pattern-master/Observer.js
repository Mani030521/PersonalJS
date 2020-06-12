/* observer - when a series of subscriber can listen to a publisher and than react when publisher fires an event */

var Publisher = {
	subscirbers: {
		any: [],
	},

	subscribe: function (fn, type) {
		type = type || "any"
		if (typeof this.subscirbers[type] === "undefined") {
			this.subscirbers[type] = []
		}

		this.subscirbers[type].push(fn) 
	},

	unsubscribe: function (fn, type) {
		if (typeof this.subscirbers[type] !== undefined) {
			console.log(this.subscirbers[type])
			// this.subscirbers[type].pull(fn)
		}
	},

	publish: function (type, obj) {
		var subscribers = this.subscirbers[type]

		for (var i = 0; i < subscribers.length; i++) {
			subscribers[i](obj)
		}
	},
}

var APIDataReceiverAPP_COMPONENT = Object.create(Publisher)
var APIDataReceiverHEADER_COMPONENT = Object.create(Publisher)

APIDataReceiverAPP_COMPONENT.subscribe(
	(apiData) => console.log(apiData),
	"API_CALL"
)
APIDataReceiverHEADER_COMPONENT.subscribe(
	(apiData) => console.log(apiData),
	"API_CALL"
)
// APIDataReceiverHEADER_COMPONENT.unsubscribe(
// 	(apiData) => console.log(apiData),
// 	"API_CALL"
// )
Publisher.publish("API_CALL", {
	data: [
		{
			name: "Manikandan",
			Work: "developer",
			age: 22,
		},
		{
			name: "Hema",
			Work: "Detailer",
			age: 21,
		},
	],
})


console.log(Publisher)