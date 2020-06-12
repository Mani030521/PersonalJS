import React, { useEffect } from 'react'
import '../Layout/Layout.css'

export const LoaderContext = React.createContext()

export const LoaderContextConsumer = LoaderContext.Consumer

let startTime
const LoaderHOC = (Component, loaderProp) => function Loader(props) {
    useEffect(() => {
        startTime = Date.now()
    }, [])

    const loaderProps = {
        loadingTime : ((Date.now() - startTime) / 1000).toFixed(2)
    }
    return (
        props[loaderProp] && props[loaderProp].length > 0 ?
            <LoaderContext.Provider value={{ ...loaderProps }} >
                <Component />
            </LoaderContext.Provider> : <div className="loading">Loading...</div>
    )
}

export default LoaderHOC