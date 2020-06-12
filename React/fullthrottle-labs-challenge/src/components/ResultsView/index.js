import React, { Component } from 'react'
import Loading from '../Loading'

export default class ResultsView extends Component {
  render() {
    let res = this.props.api_response;
    return (
      <div className="container">
        {this.props.isLoading ?
          <Loading/> :
          <div className="row py-5">
            <div className="col"></div>
            <div className="card border-success col-sm-12 col-md-4 col-lg-4">
              <div className="card-body">
                <h3 className="card-title"><i>A = P ( 1 + rT ) </i></h3>
                <p className="card-subtitle mb-2 text-muted"><i>Amount (A):&nbsp;
                {(res.principal.currency === "USD" ? "$" : res.principal.currency) + " " +
                    res.principal.amount * (1 + res.interestRate * (res.numPayments / 12)).toFixed(2)}</i></p>
                <hr style={{ "border": "1px solid white" }} />
                <div className="row">

                  <div className="col card-text text-right">
                    <h4 className="">
                      {/* </i> */}
                      Principal (P) :
                </h4>
                    <h4 className="">
                      Rate (r) :
                </h4>
                    <h4 className="">
                      Time (T) :
                </h4>
                    <h5 className="">
                      time in months (t) :
                </h5>
                    <h5 className="">
                      Monthly Payment :
                  </h5>
                    <h5 className="">
                      No. of payments :
                  </h5>
                  </div>
                  <div className="col-sm-5 card-text text-left">
                    <h4 className=" ">
                      {
                        (res.principal.currency === "USD" ? "$" : res.principal.currency) + " " +
                        res.principal.amount}
                    </h4>
                    <h4 className=" ">
                      {res.interestRate + " %"}
                    </h4>
                    <h4 className="">
                      {(res.numPayments / 12).toFixed(2) + " years"}
                    </h4>
                    <h5 className=" ">
                      {res.numPayments + " months"}
                    </h5>
                    <h5 className="">
                      {(res.monthlyPayment.currency === "USD" ? "$" : res.monthlyPayment.currency) + " " +
                        res.monthlyPayment.amount}
                    </h5>
                    <h5 className="">
                      {res.numPayments}
                    </h5>
                  </div>
                </div>

              </div>


            </div>
            <div className="col"></div>
          </div>

        }
      </div>
    )
  }
}
