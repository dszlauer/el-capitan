import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth0Reducer from "../components/Header/Auth0Reducer";
import productsReducer from "../components/Items/ProductsReducer";
import cartReducer from "../components/Cart/CartReducer";
import adminReducer from "../components/Admin/AdminReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer,
  auth0Reducer: auth0Reducer,
  adminReducer: adminReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
