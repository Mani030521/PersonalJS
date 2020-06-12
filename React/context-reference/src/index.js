import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Ex from "./Ex"
import Functional from "./components/Functional"
import Apps from "./MatchMedia"
import Ex12 from './example'
import AppsUse from "./MatchMediaUse"


// Example for not using index as key values for some cases
// function Todo() {
// 	const [todoList, setTodoList] = useState([
// 		{
// 			initialCounter: 1,
// 			id:
// 				new Date().getHours() +
// 				":" +
// 				new Date().getMinutes() +
// 				":" +
// 				new Date().getSeconds(),
// 		},
// 	])

// 	const handleClick = () => {
// 		setTodoList((prevState) => {
//             const tempArra = [...prevState]
//             tempArra.sort((a,b) => a.initialCounter - b.initialCounter)
//             const count = tempArra[tempArra.length - 1].initialCounter
// 			return [
// 				...prevState,
// 				{
// 					initialCounter: count + 1,
// 					id:
// 						new Date().getHours() +
// 						":" +
// 						new Date().getMinutes() +
// 						":" +
// 						new Date().getSeconds(),
// 				},
// 			]
// 		})
//     }
    
//     const handleClickDesc = () => {
//         setTodoList(prevState => {
//            const a = prevState.sort((a,b) => b.initialCounter - a.initialCounter)
//            return [...a]
//         })
//     }
// 	return (
// 		<div>
// 			<button onClick={handleClick}>Add Input</button>
// 			<button onClick={handleClickDesc}>Sort DESC</button>
// 			{todoList.map((todo, index) => (    
// 				<div key={index}>
// 					<span>{todo.initialCounter}</span>
// 					<span style={{ marginLeft: "10px" }}>
// 						<input type="text" />
// 					</span>
// 					<span style={{ marginLeft: "10px" }}>Created At {todo.id}</span>
// 				</div>
// 			))}
// 		</div>
// 	)
// }


class Aas extends React.Component{
    state = {
        clickedFlag: false
    }

    handleButtonClick = () => {
        this.setState({
            clickedFlag: true
        })
    }
    render(){
        const { clickedFlag } = this.state
        console.log(clickedFlag,'======')
        return(
            <div>
                <button onClick={this.handleButtonClick}>
                    Click Here
                </button>
            </div>
        )
    }
}
ReactDOM.render(<Aas />, document.getElementById("root"))
