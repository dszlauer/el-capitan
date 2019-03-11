import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import ProductListItem from "./ProductListItem";
import "./products.css";

class Products extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;

    setTimeout(() => {
      axios.get("/api/items").then(json => {
        loadProducts(json);
      });
    }, 1000);
  }
  render() {
    // console.log("this.props", this.props);
    // console.log("this.props.products", this.props.products);
    // console.log("this.props.prodcuts.data", this.props.products.data);
    // console.log("this.product", this.props.products);
    const { addToCart, removeFromCart, cart } = this.props;

    // if (this.props) {
    //   if (this.props.products) {
    //     if (this.props.products.data) {
    //       console.log("yes");
    //     }
    //   }
    // }

    return (
      <div className="main-items-container">
        {this.props &&
          this.props.products &&
          this.props.products.data &&
          this.props.products.data.map((product, index) => {
            // console.log("productID", product.id);

            return (
              <ProductListItem
                key={index}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItem={
                  cart.filter(cartItem => cartItem.id === product.id)[0]
                }
              />
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: "LOAD", payload: products });
    },
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
