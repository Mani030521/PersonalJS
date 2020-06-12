import React from 'react';
import  offers  from '../../../../config.js'
const carousel = () => {
  return (
    <div id="abc" class="carousel slide"  data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={offers[0]} alt="First slide" height="370px" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={offers[1]} alt="Second slide" height="370px" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={offers[2]} alt="Third slide" height="370px" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={offers[3]} alt="Fourth slide" height="370px" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#abc" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" style={{backgroundColor:"black",height:"32px",width:"28px",marginRight:"30px"}} aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#abc" role="button" data-slide="next">
        <span className="carousel-control-next-icon" style={{backgroundColor:"black",height:"32px",width:"28px",marginRight:"30px"}} aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>



  )
}
export default carousel;