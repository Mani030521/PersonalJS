import React from 'react'

export default function LoadingView(props) {
    const bar_length = {
        width: props.bar_length + "%",
    }
    return (
        <div className="progress mt-5">
            <div className="col progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={bar_length}>
                Loading...
              </div>
        </div>
    )
}
