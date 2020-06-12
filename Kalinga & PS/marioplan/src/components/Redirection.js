import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"


class Redirec extends Component {
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                {this.props.flag ? <Redirect to={this.props.to} /> : ''}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return({
        to: state.redirection.to,
        flag: state.redirection.flag
    })
}

export default connect(mapStateToProps)(Redirec)