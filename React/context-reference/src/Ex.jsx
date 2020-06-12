import React, { useState, useRef, useEffect } from 'react'

export default function Ex() {
    console.log('component')
    const [count, setCount] = useState(0)
    const value = useRef()
    value.current = count

    const handleClick = () => {
        setTimeout(() => {
            alert('you clicked' + ' ' + value.current)
        }, 3000)
    }

    // useEffect(() => {
    //     console.log('coming')
    //     let initialRender = false
    //     function initialRendering(){
    //         if(initialRender){
    //             console.log('coming inside if')
    //         } else {
    //             console.log('coming inside else')
    //         }
    //     } 
    //     initialRendering()
    //     return () => { 
    //         console.log('coming in funct')
    //         initialRender = true
    //      }
    // },[count])


    useEffect(() => {
        console.log('coming')
        const id = setInterval(function run() {
            setCount(c => c + 1)
        }, 1000)

        return () => clearInterval(id)
    }, [])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
            <button onClick={handleClick}>
                Show alert
        </button>
        </div>
    )
}