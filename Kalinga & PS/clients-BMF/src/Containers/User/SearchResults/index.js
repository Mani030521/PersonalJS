import React from 'react'
import { Redirect } from 'react-router-dom'
import CardCustomized from '../../../Components/CardCustomized/index.jsx'
import Filter from '../../../Components/Filter/filter.jsx'
import noresult from '../../../assests/no_result.png'
import ExpansionPanelCustomized from '../../../Components/ExpansionPanelCustomized'
import Hidden from '@material-ui/core/Hidden';

class Category extends React.Component {
    constructor(props) {
        super();
        this.state = {
            redirect: false,
            progress: false,
            shadow: 1,
            id:"",
            type1: "warning",
            finalResults: props.result,
        }
    }


    filterProducts = (data) => {
        this.setState({ finalResults: data })
    }
    onclick = (data) => {
        this.setState({redirect:true,id:data._id})
        this.props.SearchReterivals(data);
        
    }
    componentWillMount = () => {
        var search = new URL(window.location.href).searchParams;
        let x = false;
        if (search.get('search') !== null) {
            for (let i = 0; i < search.get('search').length; i++)
                if (search.get('search')[i] !== " ") {
                    x = true;
                    break;
                }
        }
        if (!x) {
            this.props.showSnackBar("Enter Something to Search", this.state.type1)
        }
        if (this.props.startingState.searchInitiated === false) {
            this.props.searchResults(search.get('search'));
        }
    }

    render() {
        let results;
        if (this.props.result.length === 0 && this.props.startingState.searchInitiated === true) {
            return (
                <div style={{ marginTop: "450px" }} />)
        }
        else if (this.props.result.length === 0 && this.props.startingState.searchInitiated === false) {
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
                </div>)
        }
        else if (this.state.finalResults.length === 0 && this.props.startingState.searchInitiated === false) {
            results = <div className="col-sm-12" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
                <center style={{ marginBottom: '310px' }}><img alt="noresult" src={noresult} />
                    <div><strong style={{ fontSize: "26px", color: "silver" }}>Sorry, No Products Available</strong></div></center>

            </div>
        }
        else {
            results = this.state.finalResults.map((data, index) =>
                <div >
                    <CardCustomized key={index} product={data} actions={[
                        {
                            actionTitle: "View Product",
                            color: "primary",
                            actionCallback: () => {
                                this.onclick(data)
                            }
                        }
                    ]} />
                </div>)
        }
        return (
            <div className="container-fluid">
                {this.state.redirect===true ?<Redirect to ={{ 
                    pathname:"/product",
                        search:`?product=${this.state.id}`

                }} />:null}
                <div className="row" >
                    <div className="col-sm-3 col-xs-12" style={{marginTop:"10px",marginBottom:"10px"}}>
                        <Hidden only={['md', 'lg']}>
                            <ExpansionPanelCustomized summary1="Filter" >
                                <Filter DisplayData={this.props.result}
                                    filterProducts={this.filterProducts} />
                            </ExpansionPanelCustomized>
                        </Hidden>
                        <Hidden only={['sm', 'xs']}>
                            <Filter DisplayData={this.props.result}
                                filterProducts={this.filterProducts} />
                        </Hidden>
                    </div>
                    <div className="col-sm-9">
                        <div className="row" style={{ margin: "10px" }}>
                            {results}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;




