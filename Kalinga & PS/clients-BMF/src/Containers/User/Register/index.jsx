import React from "react";
import { Paper, TextField, Grid, Typography, Button } from "@material-ui/core/";
import { Radio, FormLabel, Hidden } from "@material-ui/core/";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import startProgressBar from "../../../NewActions/ProgressBar/startProgressBarAction.js";
import stopProgressBar from "../../../NewActions/ProgressBar/stopProgressBarAction.js";
import showSnackBar from "../../../NewActions/SnackBar/showSnackBarAction.js";
import signUpAction from "../../../NewActions/SignUpUser/registerWithFirebase.js";

const regex = /^[a-zA-Z]+[a-zA-Z ]*$/;
const regexl = /^[a-zA-Z]+$/;
const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^''"&*]{8,20}$/;
const email = /^[a-zA-Z]+[a-z0-9A-Z_-]+(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//const email= /^[a-zA-Z]+[a-z0-9A-Z ]+(\.[a-zA-Z0-9 ]+)*(\,[a-zA-Z0-9 ]+)*(\<[a-zA-Z0-9 ]+)*(\>[a-zA-Z0-9 ]+)*(\/[a-zA-Z0-9 ]+)*(\?[a-zA-Z0-9 ]+)*(\:[a-zA-Z0-9 ]+)*(\;[a-zA-Z0-9 ]+)*(\"[a-zA-Z0-9 ]+)*(\'[a-zA-Z0-9 ]+)*(\\[a-zA-Z0-9 ]+)*(\|[a-zA-Z0-9 ]+)*(\][a-zA-Z0-9 ]+)*(\[[a-zA-Z0-9 ]+)*(\}[a-zA-Z0-9 ]+)*(\{[a-zA-Z0-9 ]+)*(\=[a-zA-Z0-9 ]+)*(\+[a-zA-Z0-9 ]+)*(\_[a-zA-Z0-9 ]+)*(\-[a-zA-Z0-9 ]+)*(\)[a-zA-Z0-9 ]+)*(\([a-zA-Z0-9 ]+)*(\*[a-zA-Z0-9 ]+)*(\&[a-zA-Z0-9 ]+)*(\@[a-zA-Z0-9 ]+)*(\![a-zA-Z0-9 ]+)*(\#[a-zA-Z0-9 ]+)*(\~[a-zA-Z0-9 ]+)*(\`[a-zA-Z0-9 ]+)*(\^[a-zA-Z0-9 ]+)*(\%[a-zA-Z0-9 ]+)*(\$[a-zA-Z0-9 ]+)*([?.])$/;
const streetregex = /^[A-Za-z0-9#][A-Za-z0-9. ,/-]*$/;
const phoneNumber = /^[1-9][0-9]*$/;
const pinCode = /^[0-9]{6,6}$/;

class Register extends React.Component {
  constructor(props) {
    super();
    this.fName = "";
    this.lName = "";
    this.eMail = "";
    this.password = "";
    this.confirmPassword = "";
    this.dob = "";
    this.street = "";
    this.city = "";
    this.stateA = "";
    this.pincode = "";
    this.phone = "";
    this.state = {
      registerComplete: false,
      gender: "Male",
      errorFirst: false,
      errorLast: false,
      errorPassword: false,
      errorPincode: false,
      errorConfirm: false,
      errorEmail: false,
      errorStreet: false,
      errorCity: false,
      errorState: false,
      errorDOB: false,
      redirect: false
    };
  }

  handleRadioChange = event => {
    this.setState({ gender: event.target.value });
  };
  handleChangeFirst = event => {
    this.fName = event.target.value;
    if (event.target.value.match(regex) && event.target.value.length <= 20) {
      this.setState({ errorFirst: false });
    } else {
      this.setState({ errorFirst: true });
    }
  };
  handleChangeLast = event => {
    this.lName = event.target.value;
    if (event.target.value.match(regexl) && event.target.value.length <= 20) {
      this.setState({ errorLast: false });
    } else {
      this.setState({ errorLast: true });
    }
  };
  handleChangeEmail = event => {
    this.eMail = event.target.value;
    if (email.test(event.target.value) && event.target.value.length <= 30) {
      this.setState({ errorEmail: false });
    } else {
      this.setState({ errorEmail: true });
    }
  };
  handleChangePassword = event => {
    this.password = event.target.value;
    if (event.target.value.match(passwordReg)) {
      this.setState({ errorPassword: false });
    } else {
      this.setState({ errorPassword: true });
    }
    if (event.target.value === this.confirmPassword) {
      this.setState({ errorConfirm: false });
    } else {
      this.setState({ errorConfirm: true });
    }
  };
  handleChangeConfirm = event => {
    this.confirmPassword = event.target.value;
    if (event.target.value === this.password) {
      this.setState({ errorConfirm: false });
    } else {
      this.setState({ errorConfirm: true });
    }
  };
  handleChangeNumber = event => {
    this.phone = event.target.value;
    if (
      event.target.value.match(phoneNumber) &&
      event.target.value.length === 10
    ) {
      this.setState({ errorNumber: false });
    } else {
      this.setState({ errorNumber: true });
    }
  };
  handleChangeStreet = event => {
    this.street = event.target.value;
    if (
      event.target.value.match(streetregex) &&
      event.target.value.length <= 40
    ) {
      this.setState({ errorStreet: false });
    } else {
      this.setState({ errorStreet: true });
    }
  };
  handleChangeCity = event => {
    this.city = event.target.value;
    if (
      event.target.value.match(regex) &&
      event.target.value.length >= 3 &&
      event.target.value.length <= 20
    ) {
      this.setState({ errorCity: false });
    } else {
      this.setState({ errorCity: true });
    }
  };
  handleChangeState = event => {
    this.stateA = event.target.value;
    if (
      event.target.value.match(regex) &&
      event.target.value.length >= 3 &&
      event.target.value.length <= 20
    ) {
      this.setState({ errorState: false });
    } else {
      this.setState({ errorState: true });
    }
  };
  handleChangePincode = event => {
    this.pincode = event.target.value;
    if (event.target.value.match(pinCode)) {
      this.setState({ errorPincode: false });
    } else {
      this.setState({ errorPincode: true });
    }
  };

  handleChangeDOB = event => {
    this.dob = event.target.value;
    if (
      new Date() > new Date(this.dob) &&
      new Date(this.dob).getFullYear() > 1900
    )
      this.setState({ errorDOB: false });
    else this.setState({ errorDOB: true });
  };
  handleSignUp = () => {
    this.props.startProgressBar();
    if (
      this.fName === "" ||
      this.lName === "" ||
      this.eMail === "" ||
      this.password === "" ||
      this.confirmPassword === "" ||
      this.state.gender === "" ||
      this.dob === "" ||
      this.street === "" ||
      this.city === "" ||
      this.stateA === "" ||
      this.pincode === "" ||
      this.phone === ""
    ) {
      this.props.showSnackBar({
        message: "Please Fill Up the Form",
        type: "warning"
      });
      this.props.stopProgressBar();
    } else if (
      this.state.errorFirst ||
      this.state.errorLast ||
      this.state.errorEmail ||
      this.state.errorPassword ||
      this.state.errorConfirm ||
      this.state.errorNumber ||
      this.state.errorStreet ||
      this.state.errorCity ||
      this.state.errorState ||
      this.state.errorPincode ||
      this.state.errorDOB
    ) {
      this.props.stopProgressBar();
      this.props.showSnackBar({
        message: "OOPS!! Looks Like you haven't filled up the form properly",
        type: "warning"
      });
    } else {
      let personalInfo = {
        FirstName: this.fName,
        LastName: this.lName,
        Password: this.password,
        Email: this.eMail,
        Phone: this.phone,
        Gender: this.state.gender,
        Address: {
          Street: this.street,
          City: this.city,
          State: this.stateA,
          Pincode: this.pincode
        },
        DateOfBirth: this.dob
      };
      this.props.signUpAction(personalInfo);
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-7 col-sm-12"
              style={{ marginTop: "20px", marginBottom: "20px"  }}
            >
              <Paper >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={8}
                  style={{ padding: "20px" }}
                >
                  <Grid item xs={12}>
                    <Typography variant="headline">
                      Create your Account
                    </Typography>

                    <Typography variant="subheading">
                      to continue Shopping
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="First Name"
                      error={this.state.errorFirst}
                      fullWidth
                      onChange={this.handleChangeFirst}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      error={this.state.errorLast}
                      label="Last Name"
                      fullWidth
                      onChange={this.handleChangeLast}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      error={this.state.errorEmail}
                      type="email"
                      fullWidth
                      onChange={this.handleChangeEmail}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      label="Password"
                      error={this.state.errorPassword}
                      type="password"
                      fullWidth
                      onChange={this.handleChangePassword}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      label="Confirm-Password"
                      error={this.state.errorConfirm}
                      type="password"
                      fullWidth
                      onChange={this.handleChangeConfirm}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      {
                        "Use 8 or more characters with atleast one special character, one Capital letter and one number"
                      }
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      error={this.state.errorNumber}
                      fullWidth
                      label="10 digit Mobile Number"
                      onChange={this.handleChangeNumber}
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <FormLabel component="legend">Date of Birth</FormLabel>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <TextField
                      type="date"
                      fullWidth
                      error={this.state.errorDOB}
                      onChange={this.handleChangeDOB}
                    />
                  </Grid>

                  <Grid item xs={4} sm={2}>
                    <FormLabel component="legend">Gender</FormLabel>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Radio
                      checked={this.state.gender === "Male"}
                      onChange={this.handleRadioChange}
                      value="Male"
                      name="radio-button"
                      aria-label="M"
                      color="primary"
                    />Male
                  </Grid>
                  <Hidden only={["sm", "lg", "md", "xl"]}>
                    <Grid item xs={4} />
                  </Hidden>

                  <Grid item xs={6} sm={3}>
                    <Radio
                      checked={this.state.gender === "Female"}
                      onChange={this.handleRadioChange}
                      value="Female"
                      name="radio-button"
                      aria-label="F"
                      color="primary"
                    />Female
                  </Grid>

                  <Grid item xs={12}>
                    <FormLabel component="legend">Delivery Address</FormLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Street"
                      type="text"
                      error={this.state.errorStreet}
                      fullWidth
                      onChange={this.handleChangeStreet}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      type="text"
                      error={this.state.errorCity}
                      fullWidth
                      onChange={this.handleChangeCity}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="State"
                      type="text"
                      error={this.state.errorState}
                      fullWidth
                      onChange={this.handleChangeState}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Pincode"
                      error={this.state.errorPincode}
                      type="text"
                      fullWidth
                      onChange={this.handleChangePincode}
                    />
                  </Grid>
                  <Grid item sm={8} />
                  <Grid item xs={12} sm={4} style={{ marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={this.handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { showSnackBar, startProgressBar, stopProgressBar, signUpAction },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Register);
