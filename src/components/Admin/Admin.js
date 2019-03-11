import React, { Component } from "react";
import { connect } from "react-redux";
import { setProducts, addProduct } from "./AdminReducer";
import axios from "axios";

import "./admin.css";
import AdminDashboard from "./AdminDashboard";
import Form from "../Form/Form";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
      products: []
    };
  }

  componentDidMount() {
    this.fetchInventory();
  }

  fetchInventory = () => {
    console.log("FETCH INVENTORY", this.state);
    axios.get("/api/items").then(response => {
      this.props.setProducts(response.data);

      this.setState({
        products: response.data
      });
    });
  };

  addProduct = (image, name, description, price) => {
    const myProduct = {
      image,
      name,
      description,
      price
    };
    axios.post("/api/products", myProduct).then(response => {
      // console.log("ADDPRODUCT", response);
      this.state.addProduct(response.data);
    });
  };

  deleteProduct = id => {
    axios.delete(`/api/products/${id}`).then(() => {
      this.fetchInventory();
    });
  };

  selectProduct = id => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    // console.log("ADMINSTATE", this.state);
    return (
      <div className="admin-container">
        <AdminDashboard
          products={this.state.products}
          selectProductFn={this.selectProduct}
          deleteProductFn={this.deleteProduct}
        />
        <Form
          addProductFn={this.addProduct}
          selected={this.state.selectedId}
          selectProductFn={this.selectProduct}
          reset={this.fetchInventory}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { setProducts, addProduct }
)(Admin);
