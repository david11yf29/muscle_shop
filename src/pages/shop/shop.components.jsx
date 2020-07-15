import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions.js';

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);

// 0: {id: 1, title: "chest", routeName: "chest", items: Array(5)}
// 1: {id: 2, title: "back", routeName: "back", items: Array(5)}
// 2: {id: 3, title: "legs", routeName: "legs", items: Array(5)}
// 3: {id: 4, title: "shoulder", routeName: "shoulder", items: Array(5)}
// 4: {id: 5, title: "core", routeName: "core", it