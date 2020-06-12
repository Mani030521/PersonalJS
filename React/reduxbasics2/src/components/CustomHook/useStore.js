// import { useEffect, useContext } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

export default function useStore(){
    // const { } = useContext(ReactReduxContext())
    const state = useSelector((state => state), shallowEqual)
    const dispatch = useDispatch()

    return [state, dispatch]
}