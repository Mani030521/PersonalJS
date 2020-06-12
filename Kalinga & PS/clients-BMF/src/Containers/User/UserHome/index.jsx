import React, { Component } from 'react';
import BestProducts from './BestProducts'
import CategoryNavigation from '../CategoryNavigation'
import CoverPage from './coverPage/coverpage'
class UserHome extends Component {
    render() {
        return (
            <div>
                <CoverPage/>
                <CategoryNavigation />
              {/* <Carousel /> */}
              <BestProducts />
              {/* <Collage />   */}
            </div>
        )
    }
}
export default UserHome;
