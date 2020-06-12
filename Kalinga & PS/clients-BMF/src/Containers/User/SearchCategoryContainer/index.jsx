import React, { Component } from 'react';
import Filter from '../../../Components/Filter/filter'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { url } from '../../../config.js'
import noresult from '../../../assests/no_result.png'
import CardCustomized from '../../../Components/CardCustomized/index'
import ExpansionPanelCustomized from '../../../Components/ExpansionPanelCustomized'
import Hidden from '@material-ui/core/Hidden';


class SearchCategoryContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            id: "",
            redirect: false,
            produtsToDisplay: props.CategoryProducts.categoryResults,
        }
    }
    componentWillMount = () => {
        var category1 = new URL(window.location.href).searchParams;
        var category2 = category1.get('category')
        if (category2 === "Sofa" || category2 === "Beds" ||
            category2 === "Tables" || category2 === "Dressing Table" ||
            category2 === "Chairs") {
            if (this.props.CategoryProducts.searchInitiated === false) {
                this.props.startprogressBar();
                axios.post(`${url}/category`, {
                    typeOfProduct: category2
                })
                    .then(res => {
                        this.props.stopprogressBar();
                        this.props.CategorySearch(res.data);
                    })
                    .catch((err) => {
                        this.props.stopprogressBar();
                        this.props.showSnackBar(
                            "Error has occured",
                            "warning"
                        )

                    })
            }
        }
        else {
            this.props.stopprogressBar();
            this.props.showSnackBar(
                "No such Category exists",
                "warning"
            )
        }
    }

    filterProducts = (filteredProducts) => {
        this.setState({ produtsToDisplay: filteredProducts })
    }

    onclick = (data) => {
        this.setState({ redirect: true, id: data._id })
        this.props.SearchReterivals(data);

    }

    render() {
        if (this.props.CategoryProducts.searchInitiated === false && this.props.CategoryProducts.resultsReceived === false) {

            return (
                <div >
                    <div class="row" style={{ marginTop: "80px", fontSize: "26px", color: "silver" }}>
                        <div class="col-md-4 col-xs-6" style={{ marginLeft: "30px" }} />
                        <div class="col-md-5 col-xs-7" >
                            <img src={noresult} alt="noresults" />
                            <div><strong>Sorry, no results found</strong></div>
                        </div>

                    </div>
                    <div style={{ marginTop: "100px" }}>
                    </div>
                </div>
            )
        }
        else if (this.props.CategoryProducts.categoryResults.length === 0 && this.props.CategoryProducts.searchInitiated === false) {

            return (
                <div >
                    <div class="row" style={{ marginTop: "80px", fontSize: "26px", color: "silver" }}>
                        <div class="col-md-4 col-xs-6" style={{ marginLeft: "30px" }} />
                        <div class="col-md-5 col-xs-7" >
                            <img src={noresult} alt="noresults" />
                            <div><strong>Sorry, no results found</strong></div>
                        </div>

                    </div>
                    <div style={{ marginTop: "100px" }}>
                    </div>
                </div>
            )

        }




        let element;
        if (this.state.produtsToDisplay.length) {

            element = this.state.produtsToDisplay.map((item, index) =>

                <CardCustomized product={item} actions={[
                    {
                        actionTitle: "View Product",
                        color: "primary",
                        actionCallback: () => {
                            this.onclick(item)
                        }
                    }
                ]} />

            )
        }
        else {
            element = <div className="col-sm-12" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
                <center style={{ marginBottom: '310px' }}><img alt="noresult" src={noresult} />
                    <div><strong style={{ fontSize: "26px", color: "silver" }}>Sorry, No Products Available</strong></div></center>

            </div>
        }
        return (
            <div className="container-fluid" style={{marginBottom:"22px"}}>

                <div className="row" style={{ marginTop: "40px" }}>
                    {this.state.redirect === true ? <Redirect to={{
                        pathname: "/product",
                        search: `?product=${this.state.id}`

                    }} /> : null}
                    <div className="col-sm-3 col-xs-12" >
                        <Hidden only={['md', 'lg']}>
                            <ExpansionPanelCustomized summary1="Filter" >
                                <Filter DisplayData={this.props.CategoryProducts.categoryResults}
                                    filterProducts={this.filterProducts} />
                            </ExpansionPanelCustomized>
                        </Hidden>
                        <Hidden only={['sm', 'xs']}>
                            <Filter DisplayData={this.props.CategoryProducts.categoryResults}
                                filterProducts={this.filterProducts} />
                        </Hidden>
                    </div>
                    <div className="col-sm-9" >
                        <div className="row" style={{ margin: "10px" }}>
                            {element}
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default (SearchCategoryContainer)
