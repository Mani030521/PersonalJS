import React, { useEffect, useState } from 'react'



function Effect({ render, renderTwo }){
    // useEffect(() => {
    //     console.log('first Effect')

    //     return () => console.log('first Effect Unmount')
    // }, [renderTwo])

    useEffect(() => {
       const c = setInterval(() => {
        console.log('timer runn==================')
       }, 1000)
        
        return () => {
            clearInterval(c)
            console.log('2nd Effect UnMount')
        }
    }, [])
    //     useEffect(() => {
    //     console.log('3rd Effect') 
        
    //     return () => console.log('3rd Effect UnMount')
    // }, [render])

    return(
        <div style={{fontSize: '20px', textAlign: 'center'}}>
        {console.log('render')}
            Hi
            <hr/>
        </div>
    )
}

export default function Ex12(){
    const [showEffect, setShowEffect] = useState(true)
    const [render, setRender] = useState(false)
    const [renderTwo, setRenderTwo] = useState(false)

    return (
        <div style={{marginTop: '30px', textAlign: 'center'}}>
            <button style={{}} onClick={() => setShowEffect(!showEffect)}>
                {showEffect ? 'Remove' : 'Show'}
            </button>
            <br/>
            <button onClick={() => setRender(!render)}>
                Internal
            </button>
            <button onClick={() => setRenderTwo(!renderTwo)}>
                Internal Two
            </button>
            <hr/>
            {showEffect ? <Effect renderTwo={renderTwo} render={render}/> : null}
        </div>
    )
}