
import {Grid,Typography}from '@material-ui/core/';


import FetchData from '../../../../NewActions/CategorySearch/CategorySearch.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as config from '../../../../config.js'

import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';
class collage extends Component {
    CategorySelected=(category)=>
    {   this.props.FetchData(category)
    }


    render(){
    return(
        <div>
            <Typography variant="heading" style={{color:"#793700", fontSize:"25px", textAlign:"center"}}>
                Furnique's Best Collection
                </Typography>
        <Grid container spacing={24}>
            
            <Grid item xs={6}>
            <NavLink to={{pathname:'/category',search:"?category=Sofa"}} > <img src={config.sofa3} alt="Sofas" height="300px" style={{width:"100%"}}/></NavLink>
            </Grid>
            <Grid item xs={6}>
                     <Typography variant="subheading" style={{color:"orange",marginTop:"100px"}} >Sophistication has a new name - Stanfield. Available in provincial teak, honey oak & warm chestnut, this elegant collection crafted in sheesham wood is built to last and designed to suit every lifestyle.
                            </Typography>
            </Grid>
        </Grid>

            <Grid container spacing={24}>
                <Grid item xs={6}> 
                        <Typography variant="subheading" style={{color:"#793700",marginTop:"100px"}} >Sophistication has a new name - Stanfield. Available in provincial teak, honey oak & warm chestnut, this elegant collection crafted in sheesham wood is built to last and designed to suit every lifestyle.
                        </Typography>
                </Grid>
                <Grid item xs={6}>
                <NavLink to={{pathname:'/category',search:"?category=Beds"}} >><img src={config.bed4} alt="beds" height="300px" style={{width:"100%"}}/></NavLink>
                </Grid>     

                
            </Grid>

            <Grid container spacing={24}>
                <Grid item xs={6} >
                <NavLink to={{pathname:'/category',search:"?category=Tables"}} > <img src={config.table1} alt="beds" height="300px" style={{width:"100%"}}/></NavLink>
                </Grid>     

                <Grid item xs={6}> 
                        <Typography variant="subheading" style={{color:"#2B2018",marginTop:"100px"}} >Sophistication has a new name - Stanfield. Available in provincial teak, honey oak & warm chestnut, this elegant collection crafted in sheesham wood is built to last and designed to suit every lifestyle.
                        </Typography>
                </Grid>
                
                
            </Grid>
            <Grid container spacing={24}>
            <Grid item xs={6}  > 
                        <Typography variant="subheading" style={{color:"#2B2018",marginTop:"100px"}} >Sophistication has a new name - Stanfield. Available in provincial teak, honey oak & warm chestnut, this elegant collection crafted in sheesham wood is built to last and designed to suit every lifestyle.
                        </Typography>
                </Grid>
                <Grid item xs={6}>
                <NavLink to={{pathname:'/category',search:"?category=Dressing Table"}} > <img src={config.dressingtable1} alt="beds" height="300px" style={{width:"100%"}}/></NavLink>
                </Grid>     

            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={6} >
                <NavLink to={{pathname:'/category',search:"?category=Chairs"}} > <img src={config.chair4} alt="beds" height="300px" style={{width:"100%"}}/></NavLink>
                </Grid>     

                <Grid item xs={6} > 
                        <Typography variant="subheading" style={{color:"#567AB0",marginTop:"100px"}} >Sophistication has a new name - Stanfield. Available in provincial teak, honey oak & warm chestnut, this elegant collection crafted in sheesham wood is built to last and designed to suit every lifestyle.
                        </Typography>
                </Grid>
                
                
            </Grid>
            
            
        </div>
    )
}
}
function matchdispatchtoProps(dispatch) {
    return bindActionCreators({ FetchData: FetchData }, dispatch)

}

export default connect( null,matchdispatchtoProps)(collage)
