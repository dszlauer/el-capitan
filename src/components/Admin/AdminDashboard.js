import React from "react";

import Product from "./Product";
// import "./adminDashboard.css";

const AdminDashboard = props => {
  const { products, deleteProductFn, selectProductFn } = props;
  const mappedProducts = products.map(product => {
    return (
      <div className="dashboard-container" key={product.id}>
        <Product
          product={product}
          selectProductFn={selectProductFn}
          deleteProductFn={deleteProductFn}
        />
      </div>
    );
  });
  return <div className="dashboard">{mappedProducts}</div>;
};

export default AdminDashboard;
