const initialState ={
    redirectionFlag: false,
    to:''
}

export const redirectionReducer = (state = initialState,action) => {
    switch(action.type){
        case  'REDIRECTION':
          const newState = { ...action }
        return newState.payload
    }
    return state
}