import React, { Component } from "react";
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl}  from "react-bootstrap";
import FormLabel from '@material-ui/core/FormLabel';
import Redirec from '../components/Redirection'
import { redirectionAction } from "../store/actions";
import "./css/login.css";
import { subscribeToTimer } from '../api'




 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0;
  }

  componentDidMount(){
    subscribeToTimer((err,tim) => {
      console.log(tim)
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  redirection = () => {
    this.props.redirectionFun(true,'/register')
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" bsSize="large">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        <p onClick={this.redirection} className="register">Register</p>
        
        </form>
        <Redirec/>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return({
        redirectionFun: (redirectionFlag,to) => {
            dispatch(redirectionAction(redirectionFlag,to));
        }
    })
}

export default connect(null,mapDispatchToProps)(Login)