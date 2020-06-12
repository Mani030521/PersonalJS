import React, { Component, useState } from "react"

const Async = (dynamicComponent) => {
	return class extends Component {
		state = {
			comp: null,
		}
		componentDidMount() {
			dynamicComponent().then((comp) => {
				this.setState({
					comp: comp.default,
				})
			})
		}

		render() {
			const { comp: Component } = this.state
			return Component ? <Component {...this.props} /> : null
		}
	}
}

// import React, { useEffect, useState } from "react"

// const Async = (dynamicComponent) => (props) => {
// 	const [Comp, setComp] = useState(null)
// 	useEffect(() => {
// 		dynamicComponent().then((comp) => setComp(comp.default))
// 	}, [])

// 	return Comp ? <Comp {...props} /> : null
// }
export default Async
