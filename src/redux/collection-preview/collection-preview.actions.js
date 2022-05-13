import ShopActionsTypes from "./collection-preview.types";
export const updateCollections = (collectionsMap) => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
