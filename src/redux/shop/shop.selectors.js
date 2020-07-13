import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    chest: 1,
    back: 2,
    legs: 3,
    shoulder: 4,
    core: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)