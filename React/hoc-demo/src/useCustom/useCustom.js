import React, { useState, useEffect } from "react"

const useCustom = (initialState) => {
    const [Comp, setComp] = useState(initialState)
    
	useEffect(() => {
		Comp &&
			!Comp.componentFlag &&
			Comp.component &&
			Comp.component().then((data) =>
				setComp(() => {
					return {
						component: data.default,
						componentFlag: true,
					}
				})
			)
    }, [Comp && Comp.component])
    // // useEffect(() => {
    // //     console.log(Comp,'????????')
    // // })
    // console.log(Comp,'====')
	return [Comp, setComp]
}

export default useCustom
