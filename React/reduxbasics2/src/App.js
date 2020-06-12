import React from "react"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import Reducer from './Reducers'
import thunk from 'redux-thunk'
import "./App.css"
import Header from "./components/Header"

const logger = store => next => action => {
  console.log('[ACTION DISPATCHED]', action)
  const result = next(action)
  console.log('[NEXT STATE]', store.getState())
  return result
}

const devTools = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(Reducer, devTools(applyMiddleware(logger, thunk)))


function App() {
	return (
		<Provider store={store}>
			<div className="App">
        <Header />
      </div>
		</Provider>
	)
}

export default App
