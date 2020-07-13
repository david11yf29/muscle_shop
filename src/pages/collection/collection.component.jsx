import React from 'react';
import { connect } from 'react-redux';

import WorkoutItem from '../../components/workout-item/workout-item.component';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors.js';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection; 
    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => (
                        <WorkoutItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownPros) => {
    return {
        collection: selectCollection(ownPros.match.params.collectionId)(state)
    }
}
  
export default connect(mapStateToProps)(CollectionPage);