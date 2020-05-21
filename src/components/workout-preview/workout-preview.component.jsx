import React from 'react';

import './workout-preview.styles.scss';

import WorkoutItem from '../workout-item/workout-item.component';

const WorkoutPreview = (props) => {
    return (
        <div className="workout-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {
                    props.items
                        .filter((item, idx) => idx < 4)
                        .map((item => {
                            return (
                                <WorkoutItem key={item.id} item={item} />
                            )
                        }))
                }
            </div>
        </div>
    )
}

export default WorkoutPreview;