import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './workout-item.styles.scss';

const WorkoutItem = (props) => {
    return (
        <div className="workout-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${props.item.imageUrl})`
                }} />
            <div className="workout-footer">
                <span className="name">{props.item.name}</span>
                <span className="price">{props.item.price}</span>
            </div>
            <CustomButton onClick={() => props.addItem(props.item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(WorkoutItem);

// {
//     id: 1,
//     name: 'barbell bench press',
//     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//     price: 25
//   }