import React, { Fragment } from 'react'
import useStore from '../CustomHook/useStore'
import * as actionTypes from '../../actions/action-types'
import './Header.css'
import ActionCreator from '../../actions/action-creators'


export default function Header() {
    const [state, dispatch] = useStore()
    const { counter, results } = state

    return (
        <>
            <p className="CounterText">
                Value of the Counter: {counter}
            </p>
            <div className="container">
                <div onClick={() => dispatch({ type: actionTypes.INCREMENT })} className="Box">
                    <p>Add</p>
                </div>
                <div onClick={() => dispatch({ type: actionTypes.DECREMENT })} className="Box">
                    <p>Remove</p>
                </div>
                <div onClick={() => dispatch({ type: actionTypes.ADD_10 })} className="Box">
                    <p>Add 10</p>
                </div>
                <div onClick={() => dispatch({ type: actionTypes.SUBTRACT_15 })} className="Box">
                    <p>Subtract 15</p>
                </div>
            </div>
            <button onClick={() => dispatch(ActionCreator(counter))} className="Button">
                Store Results
            </button>
            {results.map(result => (
                <Fragment key={result.id}>
                    <ul>
                        <li>
                            {result.value}
                        </li>
                    </ul>
                </Fragment>
            ))}
        </>
    )
}