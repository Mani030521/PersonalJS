import React, { Component } from 'react';
import './BestProduct.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Hidden } from '@material-ui/core/';


import history from '../../../../history'
import SearchReterivals from '../../../../NewActions/IndividualProduct/individualProduct.js'
class bestProducts extends Component {

  onclick = (data) => {
    this.props.SearchReterivals(data);
    history.push('/product')
  }

  render() {
    if (this.props.bestProducts[0] === null || this.props.bestProducts[0] === undefined) {

      return (<div />)
    }
    else {
      var prodnames = [], prodimages = [], product = [];
      if (this.props.bestProducts !== undefined) {
        for (var i = 0; i < 8; i++) {
     
          if (this.props.bestProducts[i] !== null) {
            prodnames[i] = this.props.bestProducts[i].Title
            prodimages[i] = this.props.bestProducts[i].Image
            product[i] = this.props.bestProducts[i]
          }
        }
      }
      return (
        <div className="products" >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4" align="center">
                <Hidden only={['sm', 'lg', 'md', 'lg']}>
                  <h1 className="prod-heading">Trending Products</h1>
                </Hidden>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4" >
                <div className="prod-sec">
                  <div className="prod-img-box"><img id="img" src={prodimages[0]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt" ><div onClick={() => this.onclick(product[0])}><span>{prodnames[0]}</span></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"><img id="img" src={prodimages[1]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"><div onClick={() => this.onclick(product[1])}><span>{prodnames[1]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"><img  id="img" src={prodimages[2]} alt="NO PRODUCT FOUND"  />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"><div onClick={() => this.onclick(product[2])}><span>{prodnames[2]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"><img id="img" src={prodimages[3]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"> <div onClick={() => this.onclick(product[3])}><span>{prodnames[3]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4" align="center">
                <Hidden only={['xs']}>
                  <h1 className="prod-heading">Trending Products</h1>
                </Hidden>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"> <img id="img" src={prodimages[4]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"> <div onClick={() => this.onclick(product[4])}><span>{prodnames[4]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"><img id="img" src={prodimages[5]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"><div onClick={() => this.onclick(product[5])}><span>{prodnames[5]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"><img id="img" src={prodimages[6]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"> <div onClick={() => this.onclick(product[6])}><span>{prodnames[6]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="prod-sec">
                  <div className="prod-img-box"><img id="img" src={prodimages[7]} alt="NO PRODUCT FOUND" />
                    <div className="prod-hover">
                      <div className="prodtb">
                        <div className="prodtxt"><div onClick={() => this.onclick(product[7])}><span>{prodnames[7]}</span></div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
function mapstatetoprops(state) {
  return {
    bestProducts: state.bestProducts
  }
}
function mapdispatchtoprops(dispatch) {
  return bindActionCreators({
    SearchReterivals
  }, dispatch)
}

export default connect(mapstatetoprops, mapdispatchtoprops)(bestProducts)