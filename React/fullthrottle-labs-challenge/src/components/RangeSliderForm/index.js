import React, { Component } from 'react'
import RangeSlider from '../RangeSlider';

export default class RangeSliderForm extends Component {
  constructor(){
    super()
    this.amountRef = React.createRef()
    this.monthsRef = React.createRef()
  }
  componentDidMount(){
    this.amountRef.current = this.props.rs_value_amount
    this.monthsRef.current = this.props.rs_value_months
    this.forceUpdate()
  }
  render() {
    console.log(this.amountRef.current)
    return (
      <div className="">
        <div className={this.props.isLoading ? "bg-secondary" : "bg-light "}>
          <div className="container pt-4 pb-3">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12 ">
                <div className="row">
                  <div className="form-group row col-sm-12 mx-auto">
                    <div className="col"></div>
                    <label htmlFor="amount_label" className="col-sm-3 col-form-label align-right">Amount :&nbsp;</label>
                    <div className="col-sm-2">
                      <input type="number" className="form-control-plaintext" id="amount_label"
                        min={this.props.min_amount} max={this.props.max_months}
                        value={this.amountRef.current}
                        onChange={(e) => this.props.handleOnChange(e, "set_amount")} />
                      {/* <small id="amountHelp" className="form-text text-muted">Click to Edit</small> */}
                    </div>
                    <div className="col"></div>
                  </div>

                </div>
                <div className="row py-2">
                  <div className="col">$500</div>
                  <div className="col-sm-8">
                    <RangeSlider
                      handleOnInput={this.props.handleOnInput}
                      handleOnMouseUp={this.props.handleOnMouseUp}
                      display_value={this.props.display_value} //true/false
                      min={this.props.min_amount}
                      max={this.props.max_amount}
                      id={this.props.id1}
                      rs_value={this.amountRef.current}
                      isLoading={this.props.isLoading}
                    />
                  </div>
                  <div className="col">$5000</div>
                </div>

              </div>
              <div className="col-md-6 col-sm-12">
                <div className="row">
                  <div className="form-group row col-sm-12 mx-auto">
                    <div className="col"></div>
                    <label htmlFor="month_label" className="col-sm-2 col-form-label">Month :&nbsp;</label>
                    <div className="col-sm-2">
                      <input type="number" className="form-control-plaintext" id="month_label"
                        min={this.props.min_months} max={this.props.max_months}
                        value={this.monthsRef.current}
                        onChange={(e) => this.props.handleOnChange(e, "set_months")} />
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">6</div>
                  <div className="col-sm-8">
                    <RangeSlider
                      handleOnInput={this.props.handleOnInput}
                      handleOnMouseUp={this.props.handleOnMouseUp}
                      display_value={this.props.display_value} //true/false
                      min={this.props.min_months}
                      max={this.props.max_months}
                      id={this.props.id2}
                      rs_value={this.monthsRef.current}
                      isLoading={this.props.isLoading}
                    />
                  </div>
                  <div className="col">24</div>
                </div>

              </div>
            </div>
            <div className="row mt-3">
              <div className="col"></div>
              <div className="col">
                <button
                  disabled={this.props.isLoading ||
                    this.props.rs_value_months < 6 || this.props.rs_value_months > 24 ||
                    this.props.rs_value_amount < 500 || this.props.rs_value_amount > 5000
                    ? true : false}
                  className={
                    this.props.isLoading ||
                      this.props.rs_value_months < 6 || this.props.rs_value_months > 24 ||
                      this.props.rs_value_amount < 500 || this.props.rs_value_amount > 5000 ? "btn btn-block mx-auto disabled btn-secondary" : "col btn btn-block mx-auto btn-outline-success"}
                  onClick={this.props.handleOnSubmit}>Submit</button>
                <small id="amountHelp" className="form-text text-muted">click on values to edit them</small>
              </div>

              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
