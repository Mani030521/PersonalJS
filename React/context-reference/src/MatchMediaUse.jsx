import React, { useEffect, useState } from 'react'

function useMedia(query){
    const [matches, setMatches] = useState(window.matchMedia(query).matches)
    console.log(matches)

    useEffect(() => {
        let media = window.matchMedia(query)
        let listener = () => {
            console.log(query, 'comingInsideListener')
            console.dir(setMatches, 'comingInsideListener')
            setMatches(media.matches)
        }
        media.addListener(listener)
        return () => media.removeEventListener(listener)
    }, [query])
    
    return matches
}

export default function AppsUse() {
    console.log('comingFirst')
    const small = useMedia("(max-width: 400px)")
    const large = useMedia("(min-width: 800px)")

    console.log(small,'smallll')
    console.log(large,'largeeee')
    return (
        <div style={{ textAlign: "center" }}>
            <p>
                Small? {small ? 'yes' : 'no'}
            </p>
            <p>
                Large? {large ? 'yes' : 'no'}
            </p>
            <button>
                Click to change Query
            </button>
        </div>
    )
}