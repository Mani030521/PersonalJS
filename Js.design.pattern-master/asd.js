class App extends Component {
	constructor() {
		super()
		this.state = {
			name: "",
			exampleArray: [],
			nameArr: ["s", "s1", "s2", "s3", "s4"],
		}
	}
	componentDidMount() {
		for (let i = 0; i < 5; i++) {
			this.setState({
				name: "Manikandan",
				exampleArray: [
					...this.state.exampleArray,
					this.state.exampleArray.push(this.state.nameArr[i]),
				],
			})
		} //LOGS: exampleArray: ['s','s1','s2','s3', 5]

		for (let i = 0; i < 5; i++) {
			this.setState((prevState) => {
				return {
					name: prevState.name + "Manikandan",
					exampleArray: [
						...prevState.exampleArray,
						prevState.exampleArray.push(prevState.nameArr[i]),
					],
				}
			})
		} //LOGS: exampleArray: [1,2,3,4,5]

		for (let i = 0; i < 5; i++) {
			this.setState((prevState) => {
				return {
					name: prevState.name + "Manikandan",
					exampleArray: [...prevState.exampleArray, prevState.nameArr[i]],
				}
			})
		} //LOGS: exampleArray: ['s','s1','s2','s3','s4'] ----> Expected Result
	}
}
