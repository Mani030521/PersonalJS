import React, { useReducer } from 'react'

const SearchBar = React.forwardRef((props, ref) => {
    const handleClick = event => {
        console.log(event.type)
        setTimeout(() => {
            console.log(event.type)
        }, 1000)
    }
    const initialState = { count: 0 };

    function reducer(state, action) {
        console.log(state, action,'====')
        switch (action.type) {
            case 'increment':
                return { 
                    ...state,
                    ads: state.count + 1
                };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }
  const [state, dispatch] = useReducer(reducer, initialState)
//   console.log(state)
//   console.log(dispatch({type: 'increment'}))
    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" ref={ref} />
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
})

export default SearchBar