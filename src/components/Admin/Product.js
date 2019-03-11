import React from "react";

import "./product.css";

const Product = ({ product, deleteProductFn, selectProductFn }) => {
  //   console.log(product);
  return (
    <div className="product-container">
      <img src={product.image} alt="" />
      <div>
        <h3>Name:</h3>
        <p>{product.name}</p>
        <h3>Description:</h3>
        <p>{product.description}</p>
        <h3>Price:</h3>
        <p>${product.price}</p>
        <div>
          <button onClick={() => selectProductFn(product.id)}>Edit</button>
          <button onClick={() => deleteProductFn(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
