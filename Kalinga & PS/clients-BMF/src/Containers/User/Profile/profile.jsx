import React from "react";
import { Paper, TextField, Grid, Typography, Button } from "@material-ui/core/";
import { Redirect } from "react-router-dom";
import { Radio, Hidden } from "@material-ui/core/";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import green from "@material-ui/core/colors/green";
import updateProfile from "../../../NewActions/user/updateProfile.js";
import showsnackbar from "../../../NewActions/SnackBar/showSnackBarAction.js";
import Avatar from "@material-ui/core/Avatar";
import CustomDialogBox from "../../../Components/CustomDialogBox";

const regex = /^[a-zA-Z]+[a-zA-Z ]*$/;
const regexl = /^[a-zA-Z]+$/;
const streetregex = /^[A-Za-z0-9#][A-Za-z0-9. ,/-]*$/;
const phoneNumber = /^[1-9][0-9]*$/;
const pinCode = /^[0-9]{6,6}$/;

class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      disabled: true,
      errorFirst: false,
      errorLast: false,
      errorPincode: false,
      errorDOB: false,
      errorStreet: false,
      errorCity: false,
      errorState: false,
      errorNumber: false,
      details: props.user.details,
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleConfirm = () => {
    this.setState({ open: false });
    this.setState({ disabled: true });
    this.props.updateProfile(this.state.details);
  };

  handleSave = () => {
    if (
      this.state.details.FirstName === "" ||
      this.state.details.LastName === "" ||
      this.state.details.Phone==="" ||
      this.state.details.Address.Street === "" ||
      this.state.details.Address.City === "" ||
      this.state.details.Address.State === "" ||
      this.state.details.Address.Pincode === ""||
      this.state.details.Gender === null
    )
      this.props.showsnackbar({
        message: "Please Complete the form",
        type: "warning"
      });
    else if (
      this.state.errorFirst ||
      this.state.errorLast ||
      this.state.errorPincode ||
      this.state.errorDOB ||
      this.state.errorStreet ||
      this.state.errorCity ||
      this.state.errorState ||
      this.state.errorDOB ||
      this.state.errorNumber
    )
      this.props.showsnackbar({
        message: "Please edit the form correctly",
        type: "error"
      });
    else {
      this.handleOpen();
    }
  };
  handleRadioChange = event => {
    this.setState({
      details: { ...this.state.details, Gender: event.target.value }
    });
  };
  handleChangeFirst = event => {
    this.setState({
      details: { ...this.state.details, FirstName: event.target.value }
    });
    if (event.target.value.match(regex) && event.target.value.length <= 20) {
      this.setState({ errorFirst: false });
    } else {
      this.setState({ errorFirst: true });
    }
  };
  handleChangeLast = event => {
    this.setState({
      details: { ...this.state.details, LastName: event.target.value }
    });
    if (event.target.value.match(regexl) && event.target.value.length <= 20) {
      this.setState({ errorLast: false });
    } else {
      this.setState({ errorLast: true });
    }
  };
  handleChangeNumber = event => {
    this.setState({
      details: { ...this.state.details, Phone: event.target.value }
    });
    if (
      event.target.value.match(phoneNumber) &&
      event.target.value.length === 10
    ) {
      this.setState({ errorNumber: false });
    } else {
      this.setState({ errorNumber: true });
    }
  };

  handleChangeDOB = event => {
    this.setState({
      details: { ...this.state.details, DateOfBirth: event.target.value }
    });
    if (
      new Date() > new Date(event.target.value) &&
      new Date(event.target.value).getFullYear() > 1900
    )
      this.setState({ errorDOB: false });
    else this.setState({ errorDOB: true });
  };
  handleChangeStreet = event => {
    let details = this.state.details;
    details.Address.Street = event.target.value;
    this.setState({ details: details });
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
    let details = this.state.details;
    details.Address.City = event.target.value;
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
    let details = this.state.details;
    details.Address.State = event.target.value;
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
    let details = this.state.details;
    details.Address.Pincode = event.target.value;
    if (event.target.value.match(pinCode)) {
      this.setState({ errorPincode: false });
    } else {
      this.setState({ errorPincode: true });
    }
  };

  render() {
    if (!this.props.user.isuser) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ background: "#f0f0f0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-sm-12">
              <Paper
                elevation={0}
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={8}
                  style={{ padding: "20px" }}
                >
                  <Grid item xs={2} md={4} />
                  <Grid item xs={10} md={4}>
                    <Avatar
                      style={{
                        width: "200px",
                        height: "200px",
                        fontSize: "75px",
                        background: "purple"
                      }}
                    >
                      {this.state.details.FirstName.length
                        ? this.state.details.FirstName
                            .substring(0, 1)
                            .toUpperCase()
                        : null}
                      {this.state.details.LastName.length
                        ? this.state.details.LastName
                            .substring(0, 1)
                            .toUpperCase()
                        : null}
                    </Avatar>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="title"
                      style={{ marginBottom: "20px" }}
                    >
                      <strong> Personal Information</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="First Name"
                      error={this.state.errorFirst}
                      fullWidth
                      onChange={this.handleChangeFirst}
                      disabled={this.state.disabled}
                      value={this.state.details.FirstName}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      error={this.state.errorLast}
                      label="Last Name"
                      fullWidth
                      onChange={this.handleChangeLast}
                      disabled={this.state.disabled}
                      value={this.state.details.LastName}
                    />
                  </Grid>
                  <Grid item xs={5} md={2}>
                    <Typography variant="body1">Your Gender</Typography>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Radio
                      disabled={this.state.disabled}
                      checked={this.state.details.Gender === "Male"}
                      onChange={this.handleRadioChange}
                      value="Male"
                      name="radio-button"
                      aria-label="M"
                      color="primary"
                    />Male
                  </Grid>
                  <Hidden only={["sm", "lg", "md", "xl"]}>
                    <Grid item xs={5} />
                  </Hidden>

                  <Grid item xs={6} sm={6}>
                    <Radio
                      disabled={this.state.disabled}
                      checked={this.state.details.Gender === "Female"}
                      onChange={this.handleRadioChange}
                      value="Female"
                      name="radio-button"
                      aria-label="F"
                      color="primary"
                    />Female
                  </Grid>
                  <Grid xs={12} />
                  <Grid item xs={5} md={3}>
                    <Typography variant="body1">Your Date of Birth</Typography>
                  </Grid>
                  <Grid item xs={7} sm={4}>
                    <TextField
                      type="date"
                      fullWidth
                      error={this.state.errorDOB}
                      onChange={this.handleChangeDOB}
                      value={this.state.details.DateOfBirth.substring(0, 10)}
                      disabled={this.state.disabled}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="title"
                      style={{
                        marginTop: "30px"
                      }}
                    >
                      <strong> Email Address</strong>
                    </Typography>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      value={this.state.details.Email}
                      disabled={true}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="title"
                      style={{
                        marginTop: "30px"
                      }}
                    >
                      <strong> Mobile Number</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      value={this.state.details.Phone}
                      disabled={this.state.disabled}
                      onChange={this.handleChangeNumber}
                      error={this.state.errorNumber}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="title"
                      style={{
                        marginTop: "30px"
                      }}
                    >
                      <strong>Delivery Address</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Street"
                      type="text"
                      error={this.state.errorStreet}
                      fullWidth
                      onChange={this.handleChangeStreet}
                      value={this.state.details.Address.Street}
                      disabled={this.state.disabled}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      type="text"
                      error={this.state.errorCity}
                      fullWidth
                      onChange={this.handleChangeCity}
                      value={this.state.details.Address.City}
                      disabled={this.state.disabled}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="State"
                      type="text"
                      error={this.state.errorState}
                      fullWidth
                      onChange={this.handleChangeState}
                      value={this.state.details.Address.State}
                      disabled={this.state.disabled}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Pincode"
                      error={this.state.errorPincode}
                      type="text"
                      fullWidth
                      onChange={this.handleChangePincode}
                      value={this.state.details.Address.Pincode}
                      disabled={this.state.disabled}
                    />
                  </Grid>
                </Grid>

                <Grid item sm={8} />
                {this.state.disabled ? (
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={8}
                    style={{ padding: "0 20px" }}
                  >
                    <Grid item xs={12} md={4}>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={() => {
                          this.setState({ disabled: false });
                        }}
                      >
                        Edit
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={8}
                    style={{ padding: "0 20px" }}
                  >
                    <Grid item xs={12} md={4}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        onClick={() => {
                          this.setState({ disabled: true });
                          this.setState({ details: this.props.user.details });
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button
                        variant="outlined"
                        style={{ color: green[500], borderColor: green[500] }}
                        fullWidth
                        onClick={this.handleSave}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </Paper>
            </div>
          </div>
        </div>
        <CustomDialogBox
          open={this.state.open}
          title={"Confirmation"}
          message={"Are you sure you want to save these details"}
          handleClose={this.handleClose}
          handleConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    user: state.Sign
  };
}
function mapdispatchtoprops(dispatch) {
  return bindActionCreators({ updateProfile, showsnackbar }, dispatch);
}
export default connect(mapstatetoprops, mapdispatchtoprops)(Profile);
