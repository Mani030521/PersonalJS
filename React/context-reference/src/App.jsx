import React, { useEffect, useState } from 'react'
import { getEmpDetails } from './utils/api'
import Layout from './components/Layout'

export const CreateGlobalContext = React.createContext()

export const GlobalContextConsumer = CreateGlobalContext.Consumer

const API = 'http://dummy.restapiexample.com/api/v1/employees'

export default function App() {
    const [empDetails, setEmpDetails] = useState([])
    useEffect(() => {
        async function fetchData() {
            const responseData = await getEmpDetails(API)
            setEmpDetails([...responseData])
        }
        fetchData()
    }, [])

    const handleTop = () => {
        window && window.scrollTo(0, 0)
    }
    const contextProps = {
        empDetails,
        handleTop
    }
    return (
        <CreateGlobalContext.Provider value={contextProps}>
            <Layout empDetails={empDetails} />
        </CreateGlobalContext.Provider>
    )
}
