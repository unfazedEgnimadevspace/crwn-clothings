import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import userReducer from "./users/userReducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directoryReducer";
import collectionsReducer from "./collection-preview/collectio-preview.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collectionsPreview: collectionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
