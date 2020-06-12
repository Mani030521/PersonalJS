import React, { Component } from 'react'
import './RangeSlider.css'
export default class RangeSlider extends Component {

    render() {
        console.log(this.props.rs_value,'=====')
        return (
            <div>
                <div className="slidecontainer">
                    <input type="range" 
                    min={this.props.min}
                    max={this.props.max} 
                    value={this.props.rs_value} 
                    className="slider" 
                    id={this.props.id}
                    onInput={this.props.handleOnInput}
                    onMouseUp={this.props.handleOnMouseUp}
                     />
                </div>
            </div>
        )
    }
}
