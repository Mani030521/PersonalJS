import React, { useContext } from 'react'
import '../Layout/Layout.css'
import Card from '../Card'
import { LoaderContextConsumer, LoaderContext } from '../LoaderHOC'

export default function EmpContentSection({ empDetails }) {
    const loaderValue = useContext(LoaderContext)
    return (
        <>
            {/* Method 1:
        <LoaderContextConsumer>
         {({ loadingTime }) => (
               <div className="contents">
                     <p>
                         It took {loadingTime} milliseconds to Load..
                     </p>
                     {empDetails.map(employee => <Card key={employee.id} {...employee} />)}
                 </div>
             )}
         </LoaderContextConsumer> */}
            {/** Method 2: */}
            <div className="contents">
                <p>
                    It took {loaderValue.loadingTime} milliseconds to Load..
                    </p>
                {empDetails.map(employee => <Card key={employee.id} {...employee} />)}
            </div>
        </>
    )
}