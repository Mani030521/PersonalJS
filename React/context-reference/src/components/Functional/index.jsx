import React, { useState } from 'react'

export default function Functional() {
    const surName = useInputValues('Arjunan')
    const name= useInputValues('Manikandan')
    // console.log({...name})
    return (
        <div className="card">
            <div className="cardcontent">
                <div className="content-info">
                  <input {...name} />
                <input {...surName} />
                </div>
            </div>
        </div>
    )
}


function useInputValues(initialValue){
    const [value, setValue] = useState(initialValue)
    function handleChange(e){
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange
    }
}