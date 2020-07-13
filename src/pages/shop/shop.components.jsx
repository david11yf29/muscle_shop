import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WorkoutPreview from '../../components/workout-preview/workout-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = (props) => {
    // console.log(this.state);
    return (
        <div className="shop-page">
            {
                props.workouts.map((workout) => {
                    return (
                        <WorkoutPreview 
                            key={workout.id}  
                            title={workout.title}
                            items={workout.items} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);