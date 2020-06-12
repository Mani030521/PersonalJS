import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Paper, Grid } from '@material-ui/core/'
import AccountCircle from '@material-ui/icons/AccountCircle'

import { Redirect } from 'react-router-dom'
import noresult from '../../../assests/no_result.png'
import individualProduct from '../../../NewActions/IndividualProduct/individualProduct'
import addToCart from '../../../NewActions/user/addtocart'
import showSnackBar from '../../../NewActions/SnackBar/showSnackBarAction'
import cartProduct from '../../../NewActions/CartProduct/CartProduct'
import startProgressBar from '../../../NewActions/ProgressBar/startProgressBarAction'
import stopProgressBar from '../../../NewActions/ProgressBar/stopProgressBarAction'

import { bindActionCreators } from 'redux';

import axios from 'axios';
import { url } from '../../../config'

import ReactStars from 'react-stars'

class Product extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            addedcart: false,
            button: false,
            redirect: false,
            feedback: [],
            sum: 0,
        }
    }
    componentWillMount = () => {
        if (this.props.initiated.initialValue === true) {
            this.props.startProgressBar();
            axios.post(`${url}/user/addbutton`, {
                pid: this.props.Product._id,
                uid: this.props.detail.uid
            }).then((data) => {
                this.setState({
                    feedback: data.data.docs
                })
                for (var i = 0; i < this.state.feedback.length; i++) {
                    this.setState({
                        sum: this.state.sum + this.state.feedback[i].Rating
                    })
                }
                this.setState({
                    sum: this.state.sum / this.state.feedback.length
                })
                this.props.stopProgressBar();
                if (data.data.details.length === 0) {
                    this.setState({
                        button: false
                    })
                }
                else {
                    this.setState({
                        button: true
                    })
                }
            })
        }
        else if (this.props.initiated.initialValue === false) {
            var search = new URL(window.location.href).searchParams;
            axios.post(`${url}/individualProducts`, {
                productId: search.get('product')
            }).then((result) => {
                this.props.individualProduct(result.data[0])
                this.props.startProgressBar();
                axios.post(`${url}/user/addbutton`, {
                    pid: this.props.Product._id,
                    uid: this.props.detail.uid
                }).then((data) => {
                    this.setState({
                        feedback: data.data.docs
                    })
                    for (var i = 0; i < this.state.feedback.length; i++) {
                        this.setState({
                            sum: this.state.sum + this.state.feedback[i].Rating
                        })
                    }
                    this.setState({
                        sum: this.state.sum / this.state.feedback.length
                    })
                    this.props.stopProgressBar();
                    if (data.data.details.length === 0) {
                        this.setState({
                            button: false
                        })
                    }
                    else {
                        this.setState({
                            button: true
                        })
                    }
                })
            })

        }
    }
    toCart = () => {
        this.props.cartProduct(this.props.detail.uid);
        this.setState({
            redirect: true,
        })
    }
    onclick = (data) => {
        if (this.props.detail.isuser === false) {
            this.props.showSnackBar({
                message: "You have to Sign in",
                type: "warning"
            })
        }
        else {
            this.props.name(data, this.props.detail.uid, this.props.detail.name);
            this.props.showSnackBar({
                message: "Succesfully added to cart",
                type: "success"
            })
            this.setState({
                redirect: true,
            })
        }
    }
    render() {
        if (this.props.Product.length === 0) {
            return (
                <div >
                    <div class="row" style={{ marginTop: "80px", fontSize: "26px", color: "silver" }}>
                        <div class="col-md-4 col-xs-6" style={{ marginLeft: "30px" }} />
                        <div class="col-md-5 col-xs-7" >
                            <img src={noresult} alt="noresults" />
                            <div><strong>Sorry, no results found</strong></div>
                        </div></div>
                    <div style={{ marginTop: "180px" }}>
                    </div>
                </div>

            )
        }
        return (
            <div>
                {this.state.redirect === true ? <Redirect to='/cart' /> : null}
                <Paper style={{ paddingTop: "100px", boxShadow: "none" }}>
                    <Grid container spacing={24}   >
                        <Grid xs={11} sm={4} lg={1} xl={1} />
                        <Grid xs={12} sm={6} lg={4} xl={3}  >
                            <Card style={{ overflow: "hidden", marginTop: "10px", boxShadow: "none" }} >
                                <img src={this.props.Product.Image} alt="product"
                                    style={{ width: "100%", height: "435px" }} />
                                <br />
                                <br />
                                {this.props.Product.Quantity === 0 ? null : <div>
                                    {this.state.button === false ? <Button onClick={() => this.onclick(this.props.Product)} style={{ width: "100%", backgroundColor: "orange", fontSize: "14px" }}>ADD TO CART</Button> :
                                        <Button onClick={() => this.toCart()}
                                            style={{ width: "100%", backgroundColor: "orange", fontSize: "14px" }}>Go to Cart</Button>}
                                </div>}
                            </Card>
                        </Grid>
                        <Grid xs={4} sm={5} lg={1} xl={1} />
                        <Grid xs={12} sm={6} lg={4} xl={3} style={{ marginLeft: "15px" }} >
                            <Card style={{ boxShadow: "none", marginTop: "10px" }} >
                                <h3 style={{ fontSize: "1.75rem", fontFamily: "Lato " }}>
                                    <strong>{this.props.Product.Title}
                                    </strong>
                                </h3>
                                <hr style={{ color: "black" }} />
                                {this.props.Product.Quantity === 0 ? <div style={{ fontSize: "2.95rem", color: "red" }}>UNAVAILABLE</div> : null}
                                <h2 style={{ color: "black" }}> ₹ {this.props.Product.amount}</h2>
                                <br />
                                <div style={{ wordBreak: "break-word", width: "114px", marginLeft: "6px", textAlign: "justify" }}>
                                    <strong> Description</strong>
                                    <br />
                                    <p style={{ fontSize: "16px", marginLeft: "6px", color: "#6b7d85", width: "369px" }} >
                                        {this.props.Product.Description}
                                    </p></div >
                                <h3>Specification</h3><br /><br />
                                <Grid container spacing={24}>
                                    <Grid xs={3} sm={6} lg={4} xl={3} style={{ marginLeft: "20px", width: "70px", textalign: "center", fontSize: "16px" }}>
                                        <strong> Color</strong>
                                    </Grid>
                                    <Grid xs={7} sm={6} lg={4} xl={3} style={{ marginLeft: "10px", fontSize: "20px", color: "#6b7d85" }}>
                                        {this.props.Product.Colour}
                                    </Grid>
                                </Grid>
                                <br />
                                <br />
                                <Grid container spacing={24}>
                                    <Grid xs={3} sm={6} lg={4} xl={3} style={{ marginLeft: "20px", width: "100px", textalign: "center", fontSize: "16px" }}>
                                        <strong>Category</strong>
                                    </Grid>
                                    <Grid xs={7} sm={6} lg={4} xl={3} style={{ marginLeft: "10px", fontSize: "20px", color: "#6b7d85" }}>
                                        {this.props.Product.Category}
                                    </Grid>
                                </Grid>
                                <br />
                                <br />
                                <Grid container spacing={24}>
                                    <Grid xs={3} sm={3} lg={4} xl={3} style={{ marginLeft: "20px", width: "100px", textalign: "center", fontSize: "16px" }}>
                                        <strong>Dimension (in cm)</strong>
                                    </Grid>
                                    <Grid xs={7} sm={9} lg={4} xl={3} style={{ marginLeft: "10px", fontSize: "20px", color: "#6b7d85" }}>
                                        {this.props.Product.Dimension}
                                    </Grid>
                                </Grid>
                                <br />
                                <br />
                                <Grid container spacing={24}>
                                    <Grid xs={3} sm={6} lg={4} xl={3} style={{ marginLeft: "20px", width: "100px", textalign: "center", fontSize: "16px" }}>
                                        <strong>Material</strong>
                                    </Grid>
                                    <Grid xs={7} sm={6} lg={4} xl={3} style={{ marginLeft: "10px", fontSize: "20px", color: "#6b7d85" }}>
                                        {this.props.Product.Material}
                                    </Grid>
                                </Grid>
                                <br />
                                <br /> </Card></Grid></Grid>
                    <hr />
                    <div className="container">
                        <Grid container spacing={24}>
                            <Grid xs={3} sm={6} lg={4} xl={3} style={{ marginLeft: "55px" }} >
                                {this.state.feedback.length === 0 ? <div>No Reviews</div> : <strong
                                    style={{ fontSize: "16px", lineHeight: "1.3" }}>Customer Reviews({this.state.feedback.length})
                                        </strong>}
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                        <Grid container spacing={24}>
                            <Grid xs={3} sm={6} lg={3} xl={3} style={{ marginLeft: "52px" }}>
                                <ReactStars count={5} edit={false} size={18} value={this.state.sum} color2={"#ffd700"} />
                            </Grid>
                            <br />
                            <br />
                            <Grid container spacing={24} style={{ marginLeft: "52px" }}>
                                {this.state.feedback.length === 0 ? null : <div style={{ fontSize: "13px" }}>{this.state.sum} out of
                                               5 Stars  </div>}
                            </Grid></Grid>
                    </div>
                    <br />
                    <hr />
                    <div className="container">
                        {this.state.feedback.length === 0 ? <div style={{ marginLeft: "41px" }}>No comments </div> :
                            <div style={{ marginLeft: "20px" }}>
                                {this.state.feedback.map((data) => <div style={{ marginLeft: "24px" }}>
                                    <Paper style={{ width: "355px", boxShadow: "none" }} >
                                        <div ><span>
                                            <AccountCircle />
                                        </span>
                                            <span style={{ marginLeft: "4px" }}>
                                                {data.Name}</span>
                                        </div>
                                        <div>
                                            <span style={{ display: "inline" }}>
                                                <ReactStars count={5} edit={false} size={14} value={data.Rating} color2={"#ffd700"} />
                                            </span><span >
                                                <strong>
                                                    {data.FeedbackText}</strong>
                                            </span></div>
                                    </Paper><br />
                                </div>)}
                            </div>}</div>
                </Paper>
            </div>)
    }
}

function mapstatetoprops(state) {
    return {
        Product: state.Individual.results,
        initiated: state.Individual,
        detail: state.Sign,
        cart: state.cartDetails.Product,
    }
}
function mapdispatchtoprops(dispatch) {
    return bindActionCreators({ name: addToCart, individualProduct, stopProgressBar, showSnackBar, cartProduct, startProgressBar }, dispatch);
}
export default connect(mapstatetoprops, mapdispatchtoprops)(Product)
