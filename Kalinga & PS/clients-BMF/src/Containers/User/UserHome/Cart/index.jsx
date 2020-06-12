import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Button from '@material-ui/core/Button/Button';
import { NavLink, Redirect } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import history from '../../../../history'
import emptycart from '../../../../assests/empty_cart.png'

const streetregex = /^[A-Za-z0-9#][A-Za-z0-9. ,/-]*$/;
const pinCode = /^[0-9]{6,6}$/;
const regex = /^[a-zA-Z]+[a-zA-Z ]*$/;

class Cart extends React.Component {
    constructor(props) {
        super();
        this.state = {
            redirect: false,
            open: false,
            redirectorder: false,
            type: "warning",
            disabled: true,
            errorStreet: false,
            errorCity: false,
            errorState: false,
            errorPincode: false,
            errorNumber: false,
            delivery:{
                ...props.user
            }

        }
    }
    handleClose = () => {
        this.setState({
            open: false,
        });
    };
    componentWillMount() {
        this.props.cartproduct(this.props.cartUser.uid);
    }
    cart = () => {
        if (this.props.cartUser.details.Address.City.length === 0) {
           history.push('/profile')
            this.props.showSnackBar("Please Update your Details", this.state.type)

        }
        else {
            this.setState({
                open: true
            })
        }
    }
    placeorder = (cartinfo, carttotal, uid, name, address) => {
        this.props.purchaseproduct(cartinfo, carttotal, uid, name, address)
        this.setState({
            redirectorder:true
        })
    }
    delete = (productId, uid, name) => {

        this.props.deleteproduct(productId, uid, name);
    }
    increaseQuantity = (productId, quantity, price, uid) => {
        this.props.increaseQuantity(productId, quantity, price, uid);
    }
    decreaseQuantity = (productId, quantity, price, uid) => {
        this.props.decreaseQuantity(productId, quantity, price, uid);
    }
    handleSave = () => {
        if (this.state.errorPincode ||
            this.state.errorStreet || this.state.errorCity ||
            this.state.errorState)
            this.props.showSnackBar({
                message: "Please edit the form correctly",
                type: "error"
            })
        else {
            this.setState({ disabled: true });
        }
    }
    handleChangeStreet = event => {
        let details = this.state.delivery;
        details.Street = event.target.value;
        this.setState({ details: details })
        if ((event.target.value).match(streetregex) && (event.target.value).length <= 40) {
            this.setState({ errorStreet: false });
        }
        else {
            this.setState({ errorStreet: true });
        }

    }
    handleChangeCity = event => {
        let details = this.state.delivery;
        details.City = event.target.value;
        if ((event.target.value).match(regex) && ((event.target.value).length >= 3) && (event.target.value).length <= 20) {
            this.setState({ errorCity: false });
        }
        else {
            this.setState({ errorCity: true });
        }

    };
    handleChangeState = event => {
        let details = this.state.delivery;
        details.State = event.target.value;
        if ((event.target.value).match(regex) && (event.target.value).length >= 3 && (event.target.value).length <= 20) {
            this.setState({ errorState: false });
        }
        else {
            this.setState({ errorState: true });
        }

    };
    handleChangePincode = event => {
        let details = this.state.delivery;
        details.Pincode = event.target.value;
        if ((event.target.value).match(pinCode)) {
            this.setState({ errorPincode: false });
        }
        else {
            this.setState({ errorPincode: true });
        }

    };
    render() {
        if (this.props.cartInfo === undefined || this.props.cartLength === 0) {
            return (
                <div >
                    <div class="row" style={{ marginTop: "80px", fontSize: "26px", color: "silver" }}>
                        <div class="col-md-4 col-xs-6" style={{ marginLeft: "30px" }} />
                        <div class="col-md-3 col-xs-7" >
                            <img src={emptycart} alt="noresults" style={{width:"100%",height:"70%"}}/>
                            <div ><strong>Your shopping cart is empty</strong></div>
                        </div>

                    </div>
                    <div style={{ marginTop: "100px" }}>
                    </div>
                </div>

            )
        }


        return (
            <div>
                {this.state.redirectorder === true ? <Redirect to='/Order' /> : null}
                <Card style={{ marginTop: "1%", width: "70%", marginLeft: "15%",boxShadow:"none",textDecoration:"underline" }}>
                <Typography gutterBottom variant="title" component="h1"
                    style={{ textAlign: "center", paddingTop: "2%", fontWeight: "170px", fontSize: "35px", marginBottom: "2%", color: "black",fontFamily:"Lato" }}>
                    My Cart
                    </Typography>
                    </Card>
                <Paper style={{ marginTop: "0%", width: "70%", marginLeft: "15%",boxShadow:"none" }}>

                    {this.props.cartInfo.map((data) =>
                        <div>
                            <Card style={{ width: "100%", height: "50%",paddingTop:"5px" }}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <CardMedia>
                                            <img src={data.Image} alt="beds" height="200px" style={{ width: "100%" }} />
                                        </CardMedia>
                                    </div>
                                    <div className="col-sm-6" >
                                        <Typography variant="title" gutterBottom style={{ marginLeft: "5%", marginTop: "1%",fontFamily:"Lato" }} >
                                            {data.Title}
                                        </Typography>
                                        <Typography variant="subheading" gutterBottom style={{ marginLeft: "5%", marginTop: "1%",fontFamily:"Lato" }}>{data.Category}</Typography>
                                        <RemoveIcon onClick={() => this.decreaseQuantity(data._id, data.Quantity, data.amount, this.props.cartUser.uid)} style={{ marginLeft: "5%", marginTop: "1%",cursor:"pointer" }} />
                                        <input type="text" value={data.Quantity} style={{ marginLeft: "5%", width: "25px", marginTop: "1%", border: "1px solid black",fontFamily:"Lato" }} />
                                        <AddIcon onClick={() => this.increaseQuantity(data._id, data.Quantity, data.Price, this.props.cartUser.uid)} style={{ marginLeft: "5%", marginTop: "0%",cursor:"pointer" }} />
                                        <br />
                                        <div className="row">
                                        <Button variant="outlined" onClick={() => this.delete(data._id, this.props.cartUser.uid, this.props.cartUser.name)} style={{ marginLeft: "10%", marginTop: "5%",fontFamily:"Lato" }}>Remove</Button>
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-sm-2">
                                    <br />
                                    <br />
                                    <br />
                                        <Typography variant="Title" style={{ marginLeft: "5%",fontFamily:"Lato" }}> ₹ {data.amount * data.Quantity}</Typography>
                                    </div>
                                    <br />
                                </div>
                            </Card>
                        </div>
                    )
                    }

                </Paper>
                <Card style={{ marginTop: "1%", width: "70%", marginLeft: "15%"}}>
                <div className="row justify-content-between" style={{ marginTop: "2%", marginLeft: "15%" }}>
                    <div className="col-sm-4">
                        <h4 style={{fontFamily:"Lato"}}>Total Price</h4>
                    </div>
                    <div className="col-sm-4">
                        <h4 style={{fontFamily:"Lato"}} > ₹ {(this.props.cartTotal.toFixed(2))}</h4>
                    </div>
                </div>
                </Card>
                <div className="row align-item-center" style={{ marginTop: "2%" }}>
                    <div className="col-md-4" />
                    <div className="col-md-2"  >
                        <NavLink to='/' style={{ textDecoration: "none", color: "white" }}  >
                            <button className="btn  btn-primary btn-block" style={{ backgroundColor: "#ff9f00", cursor: "pointer",fontFamily:"Lato" }}>
                                Continue Shopping
                    </button>
                        </NavLink>
                    </div>
                    <div className="col-md-2">
                        <button className="btn  btn-primary btn-block" onClick={this.cart}
                            style={{ backgroundColor: "#ff9f00", cursor: "pointer",fontFamily:"Lato" }}>
                            Buy Now
                    </button>
                    </div>
                    <div className="col-md-4" />
                </div>
                <div style={{ height: "100px" }} />
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title" style={{fontFamily:"Lato"}}>Confirm your Delivery Address</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="State" InputLabelProps={{ shrink: true }}
                            style={{fontFamily:"Lato"}} type="text" error={this.state.errorState}
                            onChange={this.handleChangeState}
                            value={this.state.delivery.State}
                            disabled={this.state.disabled} />
                        <br />
                        <TextField label="City" InputLabelProps={{ shrink: true }} type="text"
                            error={this.state.errorCity}
                            onChange={this.handleChangeCity}
                            value={this.state.delivery.City}
                            disabled={this.state.disabled} />
                        <br />
                        <TextField label="Street" InputLabelProps={{ shrink: true }} 
                        style={{fontFamily:"Lato"}}type="text"
                            error={this.state.errorStreet}
                            onChange={this.handleChangeStreet}
                            value={this.state.delivery.Street}
                            disabled={this.state.disabled} />
                        <br />
                        <TextField label="Pincode" InputLabelProps={{ shrink: true }}
                        style={{fontFamily:"Lato"}} error={this.state.errorPincode}
                            type="text" onChange={this.handleChangePincode}
                            value={this.state.delivery.Pincode}
                            disabled={this.state.disabled} />

                        {this.state.disabled ?
                            <Grid container direction="row" justify="flex-end" alignItems="center"
                                spacing={8} style={{ paddingTop: "1%" }}>
                                <Grid item xs={12} md={4}>
                                    <Button variant="outlined" color="primary" fullWidth
                                    style={{fontFamily:"Lato"}}
                                        onClick={() => { this.setState({ disabled: false }) }}>
                                        Edit
                                            </Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button variant="outlined" color="primary" fullWidth
                                    style={{fontFamily:"Lato"}}
                                        onClick={this.handleClose}>
                                        Cancel
                                            </Button>
                                </Grid>
                            </Grid> :
                            <Grid container direction="row" justify="flex-end" alignItems="center"
                                spacing={8} style={{ paddingTop: "1%" }}>
                                <Grid item xs={12} md={4}>
                                    <Button variant="outlined" color="secondary" fullWidth
                                    style={{fontFamily:"Lato"}}
                                        onClick={() => {
                                            this.setState({ disabled: true })
                                            this.setState({ delivery: this.props.user })
                                        }}>
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4}>

                                    <Button variant="outlined"
                                    style={{fontFamily:"Lato", color: green[500], borderColor: green[500]}}
                                         fullWidth

                                        onClick={this.handleSave}>
                                        save
                                    </Button>
                                </Grid>
                            </Grid>}
                    </DialogContent>
                    <DialogActions>
                        <button className="btn  btn-primary btn-block" style={{ backgroundColor: "#fb641b", cursor: "pointer",fontFamily:"Lato" }}
                            onClick={() => this.placeorder(this.props.cartInfo, this.props.cartTotal, this.props.cartUser.uid, this.props.cartUser.name, this.state.delivery)}>
                            PLACE ORDER
        </button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default Cart;