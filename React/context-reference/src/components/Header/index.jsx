import React from 'react'
import '../Layout/Layout.css'
import { GlobalContextConsumer } from '../../App'

export default function Header() {
    return (
        <GlobalContextConsumer>
            {({ handleTop }) => {
                return (
                    <div className="navigation">
                        <div className="text" onClick={handleTop}>
                            <p>Employee Details</p>
                        </div>
                    </div>
                )
            }}
        </GlobalContextConsumer>
    )
}