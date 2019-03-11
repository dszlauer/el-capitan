import React, { Component } from "react";
import axios from "axios";

import "./form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      name: "",
      description: "",
      price: 0,
      editMode: false
    };
  }

  componentDidMount() {
    console.log();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selected && this.props.selected !== prevProps.selected) {
      axios.get(`/api/items/${this.props.selected}`).then(res => {
        const { image, name, description, price } = res.data;
        this.setState({
          image,
          name,
          description,
          price,
          editMode: true
        });
      });
    }
  }
  addProduct = () => {
    const { image, name, description, price } = this.state;
    this.props.addProductFn(image, name, description, price);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      image: "",
      name: "",
      description: "",
      price: 0,
      editMode: false
    });
  };

  editProduct = () => {
    const { image, name, description, price } = this.state;
    axios
      .put(`/api/products?id=${this.props.selected}`, {
        image,
        name,
        description,
        price
      })
      .then(res => {
        this.clearInputs();
        this.props.selectProductFn(null);
        this.props.reset();
      });
  };

  render() {
    const { image, name, description, price, editMode } = this.state;

    return (
      <div className="form-container">
        {image ? <img src={image} alt="" /> : <div className="no-image" />}
        <label>
          Name:
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <label>
          description:
          <input
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
          />
        </label>
        <label>
          Price:
          <input
            value={price}
            onChange={e => this.setState({ price: e.target.value })}
          />
        </label>
        <label>
          Image Url:
          <input
            value={image}
            onChange={e => this.setState({ image: e.target.value })}
          />
        </label>
        <button onClick={this.clearInputs}>Cancel</button>
        {editMode ? (
          <button onClick={this.editProduct}>Save Changes</button>
        ) : (
          <button onClick={this.addProduct}>Add</button>
        )}
      </div>
    );
  }
}
