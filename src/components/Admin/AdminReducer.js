// initial state
const INITIAL_STATE = {
  products: []
};

const SET_PRDUCTS = "SET_PRDUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// reducer function
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PRDUCTS:
      // return Object.assign({}, state, { Products: action.payload }) Spread operator replaces that.
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      const productsCopy = state.products.slice();
      productsCopy.push(action.payload);
      return { ...state, products: productsCopy };
    default:
      return state;
  }
}

// actions

// Below, action creator
export function setProducts(products) {
  return {
    type: SET_PRDUCTS,
    payload: products
  };
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}
