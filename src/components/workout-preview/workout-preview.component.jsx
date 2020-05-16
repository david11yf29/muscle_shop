import React from 'react';

import './workout-preview.styles.scss';

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
                                <div key={item.id}>
                                    {item.name}
                                </div>
                            )
                        }))
                }
            </div>
        </div>
    )
}

export default WorkoutPreview;