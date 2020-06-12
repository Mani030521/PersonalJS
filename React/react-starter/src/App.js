import React from "react";

let state = [];
let setterFunctions = [];
let firstRun = true;
let position = 0;

function createSetter(position) {
	return function (newValue) {
		state[position] = newValue;
	};
}

function useState(initialValue) {
	if (firstRun) {
		state.push(initialValue);
		setterFunctions.push(createSetter(position));
		firstRun = false;
	}

	const setterFun = setterFunctions[position];
	const value = state[position];
	position++;
	return [value, setterFun];
}


function RenderFunctionComponent() {
  const [firstName, setFirstName] = useState("Rudi"); // cursor: 0
  const [lastName, setLastName] = useState("Yardley"); // cursor: 1

  return (
    <div>
      <button onClick={() => setFirstName("Richard")}>Richard</button>
      <button onClick={() => setFirstName("Fred")}>Fred</button>
    </div>
  );
}


function MyComponent(){
  position = 0
  return (
    <RenderFunctionComponent />
  )
}