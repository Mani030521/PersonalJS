import React, { Component, Children } from "react"
import Header from "./header"

class Layout extends Component {
	render() {
		const { children } = this.props
		return (
			<Header>
				{children}
			</Header>
		)
	}
}

export default Layout
