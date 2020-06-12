const RTK = window.RTK

const slice = RTK.createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        asd: 'asdas',
    },
    reducers: {
        increment: (state, payload) => {
            return {
                ...state,
                counter: state.counter + 1
            }
        },
        decrement: state => state - 1
    }
})

const { reducer, actions } = slice
const { increment, decrement } = actions
console.log(increment)
console.log(reducer)
console.log(slice)

const store = RTK.configureStore({
    reducer: reducer
})
function onHandleClick(){
    store.dispatch(increment())
    console.log(store.getState())
}