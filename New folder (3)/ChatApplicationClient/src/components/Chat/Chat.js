import React, { useState, useEffect } from "react"
import queryString from "query-string"
import io from "socket.io-client"

import TextContainer from "../TextContainer/TextContainer"
import Messages from "../Messages/Messages"
import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"

import "./Chat.css"

let socket

const Chat = ({ location }) => {
	const [name, setName] = useState("")
	const [room, setRoom] = useState("")
	const [users, setUsers] = useState("")
	const [message, setMessage] = useState("")
	const [messages, setMessages] = useState([])
  const [flag, setFlag] = useState("")
  const [typingFlag, setTyping] = useState('')
  const [typeUserName, setTypeUser] = useState('');
  const ENDPOINT = "https://chatapplicationbackend.herokuapp.com/"
  // const ENDPOINT = "http://localhost:5000"
	const roomFlag = flag => {
		if (flag) {
			setRoom("Back to Message")
		} else if (!flag) {
			const { room } = queryString.parse(location.search)
			setRoom(room)
		}

		setFlag(flag)
  }
  
  
	useEffect(() => {
		const { name, room } = queryString.parse(location.search)

		socket = io(ENDPOINT)

		setRoom(room)
		setName(name)
		setFlag(false)
		socket.emit("join", { name, room }, error => {
			if (error) {
				alert(error)
			}
		})
	}, [ENDPOINT, location.search])

	useEffect(() => {
		socket.on("message", message => {
      if(message['typing']){
        setTyping(true);
        setTypeUser(message.user);
      }else if(message['stopped'] ){
        setTyping(false);
        setTypeUser('');
      }
      else{
        setMessages([...messages, message])
      }
		})

		socket.on("roomData", ({ users }) => {
			setUsers(users)
		})

		return () => {
			socket.emit("disconnect")

			socket.off()
		}
	}, [messages])

 
  const typingMessage = event => {
    if(event.target.value){
      setMessage(event.target.value);
    }
    socket.emit('typing', event.target.value)
  }
  const doneTyping = () => {
    setTyping(false);
    setTypeUser('');
    socket.emit('typing')
  }
	const sendMessage = event => {
		event.preventDefault()

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""))
		}
	}
	return (
		<div className="outerContainer">
			<div className="container">
				{!flag ? (
					<React.Fragment>
						<InfoBar
							room={room}
							flag={flag}
							roomFlag={flag => roomFlag(flag)}
						/>
						<Messages messages={messages} name={name} />
						<Input
              typingFlag={typingFlag}
              typeUserName={typeUserName}
              message={message}
              stopMessage={doneTyping}
              setMessage={setMessage}
              typingMessage={event => typingMessage(event)}
							sendMessage={sendMessage}
						/>
					</React.Fragment>
				) : (
					<React.Fragment>
						<InfoBar
							room={room}
							flag={flag}
							roomFlag={flag => roomFlag(flag)}
						/>
						<TextContainer users={users} />
					</React.Fragment>
				)}
			</div>
		</div>
	)
}

export default Chat
