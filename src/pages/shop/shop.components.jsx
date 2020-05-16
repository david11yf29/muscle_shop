import React from 'react';

import SHOP_DATA from './shop.data.js';

import WorkoutPreview from '../../components/workout-preview/workout-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workouts: SHOP_DATA
        }
    }

    render() {
        // console.log(this.state);
        return (
            <div className="shop-page">
                {
                    this.state.workouts.map((workout) => {
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
}

export default ShopPage;