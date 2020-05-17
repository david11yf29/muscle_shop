import React from 'react';

import './workout-item.styles.scss';

const WorkoutItem = (props) => {
    return (
        <div className="workout-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}/>
            <div className="workout-footer">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </div>
    )
}

export default WorkoutItem;

// {
//     id: 1,
//     name: 'barbell bench press',
//     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//     price: 25
//   }