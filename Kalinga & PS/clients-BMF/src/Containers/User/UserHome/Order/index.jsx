import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import DialogContent from '@material-ui/core/DialogContent';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextField from '@material-ui/core/TextField';
//import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import green from '@material-ui/core/colors/green';

import noresult from '../../../../assests/no_result.png'

// const streetregex = /^[A-Za-z0-9#][A-Za-z0-9. ,/-]*$/;
// const pinCode = /^[0-9]{6,6}$/;
// const regex = /^[a-zA-Z]+[a-zA-Z ]*$/;

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            dataReceived: false,
            open: false,
            disabled: true,

        }

    }
    handleClose = () => {
        this.setState({
            open: false,
            redirect: true
        });
    };
    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    render() {
        if (this.props.user.isuser === false) {
            return (<Redirect to='/' />)
        }
        else if (this.props.purchasedInfo.Product === undefined && this.props.search === false) {
            return (
                <div className="container">
                    <div >
                        <div class="row" style={{ marginTop: "80px", fontSize: "26px", color: "silver" }}>
                            <div class="col-md-4 col-xs-6" style={{ marginLeft: "30px" }} />
                            <div class="col-md-5 col-xs-7" >
                                <img src={noresult} alt="noresults" />
                                <div><strong>You have no orders..continue shopping</strong></div>
                            </div></div>
                        <div style={{ marginTop: "100px" }}>
                        </div>
                    </div>
                </div>)
        }
        return (
            <div>
                <div>
                    <Typography gutterBottom variant="headline" component="h2" style={{ textAlign: "center", fontSize: "50px", fontFamily: "Lato" }}>
                        Hi {this.props.purchaseUser.FirstName}
                    </Typography>
                    <Paper style={{ marginTop: "2%", width: "70%", marginLeft: "15%" }}>
                        <Typography gutterBottom variant="headline" component="h2" style={{ textAlign: "center", fontSize: "30px", fontFamily: "Lato" }}>
                            Items in Bag
                                </Typography>

                        <div>
                            {this.props.purchasedInfo.Product.map((item) =>
                                <div>

                                    <Card style={{ width: "100%", height: "50%" }}>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <CardMedia>
                                                    <img src={item.Image} alt="beds" height="200px" style={{ width: "100%" }} />
                                                </CardMedia>
                                            </div>
                                            <div className="col-sm-6" >
                                                <Typography variant="title" gutterBottom  style={{fontFamily:"Lato"}} >
                                                    {item.Title}
                                                </Typography>
                                                <Typography color="textSecondary" variant="body2" style={{fontFamily:"Lato"}} gutterBottom>Quantity:{item.quantity}</Typography>
                                                <Typography variant="Title"  > ₹ {item.price}</Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                            }
                        </div>
                    </Paper>
                    <Card style={{ marginTop: "1%", width: "70%", marginLeft: "15%" }}>
                        <div style={{padding:"50px"}}>
                        <Typography gutterBottom variant="headline" component="h2" style={{ textAlign: "center", fontSize: "30px", fontFamily: "Lato" }}>
                            Delivery Address
                    </Typography>
                        <center>

                            <TextField
                                label="State" InputLabelProps={{ shrink: true }} type="text" error={this.state.errorState}
                                value={this.props.delivery.State}
                                style={{fontFamily:"Lato"}}
                                disabled={this.state.disabled} />
                            <br />
                            <TextField label="City" InputLabelProps={{ shrink: true }} type="text"
                                value={this.props.delivery.City}
                                style={{fontFamily:"Lato"}}
                                disabled={this.state.disabled} />
                            <br />
                            <TextField label="Street" InputLabelProps={{ shrink: true }} type="text"
                                value={this.props.delivery.Street}
                                style={{fontFamily:"Lato"}}
                                disabled={this.state.disabled} />
                            <br />
                            <TextField label="Pincode" InputLabelProps={{ shrink: true }} 
                                type="text" 
                                value={this.props.delivery.Pincode}
                                disabled={this.state.disabled} />
                        </center>
                        </div>
                    </Card>
                    <Card style={{ marginTop: "1%", width: "70%", marginLeft: "15%" }}>
                        <Typography variant="title" gutterBottom style={{ textAlign: "center",fontFamily:"Lato" }}>
                            Amount Paid : {this.props.purchasedInfo.totalamount}
                        </Typography>
                        <Typography variant="heading" gutterBottom style={{ textAlign: "center",fontFamily:"Lato" }}>
                            Transaction Id:{this.props.purchasedInfo._id}
                        </Typography>
                    </Card>
                    <Button onClick={this.handleOpen} style={{ backgroundColor: "orange", marginTop: "1%", width: "9%", marginLeft: "45%",fontFamily:"Lato" }} color="black">
                        Ok
                    </Button>
                </div>
                <Dialog
                    open={this.state.open}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <ShoppingBasketIcon style={{ width: "100px", height: "150px", marginLeft: "30%" }} />
                        <h3 style={{ textAlign: "center", fontFamily: "Lato" }}>Thanks for shopping...</h3>
                        <Button onClick={this.handleClose} style={{ backgroundColor: "gray", marginTop: "1%", width: "9%", marginLeft: "40%",fontFamily:"Lato" }} color="primary">
                            ok
                    </Button>
                        {this.state.redirect === true ? <Redirect to='/' /> : null}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default Order;



