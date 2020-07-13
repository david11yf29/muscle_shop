import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WorkoutPreview from '../workout-preview/workout-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors.js';

import './collections-overview.styles.scss';

const CollectionsOverview = (props) => {
    return (
        <div className="collections-overview">
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
    workouts: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);