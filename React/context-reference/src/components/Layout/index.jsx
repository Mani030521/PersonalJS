import React, { Fragment, useRef, useEffect } from 'react'
import Header from '../Header'
import SearchBar from '../SearchBar'
import './Layout.css'
import LoaderHOC from '../LoaderHOC'

const EmpContents = React.lazy(() => import('../EmpContents'))
const Footer = React.lazy(() => import('../Footer'))

function Layout() {
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [])
    return (
        <Fragment>
            <Header />
            <br />
            <SearchBar ref={ref} />
            <br />
            <hr />
            <React.Suspense fallback={<div style={{ textAlign: "center", fontSize: "20px" }}>Loading...</div>}>
                <EmpContents />
                <Footer />
            </React.Suspense>
        </Fragment>
    )
}

export default LoaderHOC(Layout, 'empDetails')