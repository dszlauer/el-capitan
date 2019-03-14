import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";

import { getUser } from "../Header/Auth0Reducer";
import "../Header/header.css";
import logo from "../../media/el_capitan.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(response => {
      console.log("NEWUSER", response.data);
      this.props.getUser(response.data);
    });
  }

  login = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth`);

    window.location = `https://${
      process.env.REACT_APP_AUTH_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&scope=openid%20email%20profile&redirect_uri=${redirectUri}&response_type=code`;
  };

  toggler = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    return (
      <header className="header-container">
        <div>
          <NavLink to="/">
            <div className="logo">
              <img src={logo} />
            </div>
          </NavLink>
          <div>
            <button onClick={this.toggler}>Menu</button>
            <nav className={this.state.toggle ? "show" : "hide"}>
              <NavLink to="/products">
                <a href="#">ALL ITEMS</a>
              </NavLink>
              <a href="#">BACKPACKS</a>
              <a href="#">SHOES</a>
              <a href="#">PANTS</a>
              <a onClick={this.login} href="#">
                SIGN IN
              </a>
              <NavLink to="/cart">
                <a href="#">
                  CART(
                  {this.props.cart.reduce((acc, item) => {
                    return acc + item.quantity;
                  }, 0)}
                  )
                </a>
              </NavLink>
            </nav>
          </div>
          <input className="search-box" placeholder="search items" />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(Header);
