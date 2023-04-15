import React, { Component } from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem'
import CategoryTab from './CategoryTab/CategoryTab'
import RecommendItem from './RecommendItem/RecommendItem'

class RightContent extends Component {

    render() {
        return (
            <div className="col-sm-9 padding-right">
                <FeaturesItem />
                <CategoryTab />
                <RecommendItem />
            </div>
        );
    }
}

export default RightContent;