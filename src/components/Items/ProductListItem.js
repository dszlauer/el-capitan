import React from "react";

import AddBtn from "./AddButton";
import RemoveBtn from "./RemoveButton";

export default function ProductListItem(props) {
  return (
    <div className="item-card">
      <h3>{props.product.name}</h3>
      <img title={props.product.name} src={props.product.image} />

      <p>
        <hr />
        {props.product.description}
        <hr />
      </p>

      <div>${props.product.price}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
