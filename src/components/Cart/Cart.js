import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import "./cart.css";

const sort = itmes => {
  return itmes.sort((a, b) => {
    if (a.id !== b.id) {
      return a.id - b.id;
    }
  });
};

function Cart(props) {
  console.log("CART", props);
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Item</th>
          <th />
          <th>Qty</th>
          <th />
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td>
              <img src={item.image} />
            </td>
            <td>{item.name}</td>
            <td>
              <button onClick={e => props.addToCart(item)}>+</button>
            </td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={e => props.removeFromCart(item)}>-</button>
            </td>
            <td>${item.price * item.quantity}</td>
            <td />
            <td>
              <button onClick={e => props.removeAllFromCart(item)}>
                Remove all from cart
              </button>
            </td>
            <td />
          </tr>
        ))}

        <NavLink to="./checkout">
          <button>Checkout</button>
        </NavLink>
        <div>Total:</div>
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
