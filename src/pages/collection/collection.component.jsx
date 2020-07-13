import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors.js';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className="collection-page">
            <h2>Collection Page</h2>
        </div>
    )
}

const mapStateToProps = (state, ownPros) => {
    return {
        collection: selectCollection(ownPros.match.params.collectionId)(state)
    }
}
  
export default connect(mapStateToProps)(CollectionPage);