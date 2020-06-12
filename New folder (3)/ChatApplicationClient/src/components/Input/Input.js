import React from "react"

import "./Input.css"

class Input extends React.Component {
	change = (event) => {
		this.props.typingMessage(event);
		var typingTimer
		var doneTypingInterval = 2000;
		let input = document.getElementById("sendMessageInput")
		input.addEventListener("keyup", (event) => {
			clearTimeout(typingTimer)
			typingTimer = setTimeout(() => this.props.stopMessage(), doneTypingInterval)
		})
		input.addEventListener("keydown", () => {
			clearTimeout(typingTimer)
		})
	}
	render() {
		const {
			typingFlag,
			typeUserName,
			sendMessage,
			message,
			typingMessage
		} = this.props
		return (
			<React.Fragment>
				{typingFlag ? (
					<div>
						<p>{typeUserName} is typing...</p>
					</div>
				) : (
					""
				)}
				<form className="form">
					<input
						className="input"
						type="text"
						id="sendMessageInput"
						placeholder="Type a message..."
						value={message}
						onChange={event => this.change(event)}
						onKeyPress={event =>
							event.key === "Enter" ? sendMessage(event) : null
						}
					/>
					<button className="sendButton" onClick={e => sendMessage(e)}>
						Send
					</button>
				</form>
			</React.Fragment>
		)
	}
}

export default Input
