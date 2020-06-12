const subscribers = {};

function subscribe(event, callback) {
	if (!subscribers[event]) subscribers[event] = [];

	subscribers[event].push(callback);

	return {
		unSubscribe: function (eventType) {
      if(!subscribers[eventType]){
        throw Error("No such subscriber")
      } else {
        delete subscribers[eventType]
      }
    },
	};
}

function publish(eventType, args){
  if(subscribers[eventType]){
    subscribers[eventType].forEach(callback => callback(args))
  } else {
    throw Error("No such Subscriber")
  }
}


function render(){
  console.log("Rendering in DOM")
}
subscribe("print", (data) => console.log(data))
subscribe("print", () => render())

subscribe("Error", (data) => console.log(data))

publish("print", { Name: "Manikandan" })
console.log(subscribers)