import React from "react";
import OrderForm from "../Order/OrderForm";

export default function Order(props) {
  return (
    <div>
      <h2>My order</h2>
      <OrderForm id={props.match.params.id} />
    </div>
  );
}
