import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Cart from "../Cart/Cart";
import CheckoutForm from "./Form";

function submitOrder(values, cart) {
  const { name, email } = values.order;

  axios
    .post("/api/checkout", {
      order: {
        name,
        email,
        order_items_attributes: cart.map(item => ({
          product_id: item.id,
          qty: item.quantity
        }))
      }
    })
    .then(json => {
      if (json.errors) {
        alert("something went wrong!");
        return;
      }
      document.location.href = `/orders/${json.id}`;
    });
}

function Checkout(props) {
  const { cart } = props;

  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <Cart />
      </div>

      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
export default connect(mapStateToProps)(Checkout);
