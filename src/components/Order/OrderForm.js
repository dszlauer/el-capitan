import React, { Component } from "react";
import axios from "axios";

class Order extends Component {
  state = {
    order: null
  };

  componentDidMount() {
    axios.get(`/api/items/${this.props.id}`).then(response => {
      this.setState({
        order: response.data
      });
    });
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order;

    return (
      <div>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>

        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                product,
                qty,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} width={32} />
                  {name}({qty} @ ${price} = $
                  {parseFloat(qty) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : "Loading...."}</div>;
  }
}

export default Order;
