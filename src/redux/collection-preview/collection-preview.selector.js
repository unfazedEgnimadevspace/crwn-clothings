import { createSelector } from "reselect";

const selectCollections = (state) => state.collectionsPreview;

const selectCollectionsItems = createSelector(
  [selectCollections],
  (collectionsPreview) => collectionsPreview.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollectionsItems],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollectionsItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
export default selectCollectionsItems;
