import React, { Component } from 'react';
import './App.css';
import ResultsView from '../components/ResultsView';
import RangeSliderForm from '../components/RangeSliderForm'
import Header from '../components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set_amount: 500,
      min_amount: 500,
      max_amount: 5000,

      set_months: 6,
      min_months: 6,
      max_months: 24,

      isLoading: false,
      req_amount: 500,
      req_months: 6,
      api_response: { //the value for minimum
        interestRate: 0.25,
        monthlyPayment: { amount: 93, currency: "USD" },
        numPayments: 6,
        principal: { amount: 500, currency: "USD" },
      },
    }
  }
  handleOnInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleOnMouseUp = (e) => {
    this.fetchValue();
  }
  fetchValue = () => {
    this.setState({
      isLoading: true,
    })
    return fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.set_amount}&numMonths=${this.state.set_months}`)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(data => {

        this.fetchProductsSuccess(data);
      })
    //   .catch(error => dispatch(fetchProductsFailure(error)));
  }
  handleOnSubmit = () => {
    this.fetchValue();
  }
  handleOnChange = (e, param) => {
    this.setState({
      [param]: e.target.value,
    })
  }
  handleErrors = (response) => {
    if (!response.ok) {
      //   throw Error(response.statusText);
      console.log(response.statusText);
    }
    return response;
  }
  fetchProductsSuccess = (data) => {
    this.setState({
      api_response: data,
      isLoading: false,
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <RangeSliderForm
          handleOnInput={this.handleOnInput}
          handleOnMouseUp={this.handleOnMouseUp}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          display_value={false}
          min_amount={this.state.min_amount}
          max_amount={this.state.max_amount}
          min_months={this.state.min_months}
          max_months={this.state.max_months}
          id1={"set_amount"}
          id2={"set_months"}
          rs_value_amount={this.state.set_amount}
          rs_value_months={this.state.set_months}
          isLoading={this.state.isLoading}


        />
        <ResultsView isLoading={this.state.isLoading} api_response={this.state.api_response} />
      </div>
    );
  }
}

export default App;
