import React, { useContext } from 'react'
import { CreateGlobalContext } from '../../App'
import EmpContentSection from './EmpContentSection'

export default function EmpContents() {
    const value = useContext(CreateGlobalContext)
    return (
        <div>
            <EmpContentSection empDetails={value.empDetails} />
        </div>
    )
}