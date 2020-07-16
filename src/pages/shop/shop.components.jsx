import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions.js';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    constructor() {
        super();

        this.state = {
            loading: true
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({
                loading: false
            })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
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