import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Products from "./components/Items/Products";
import ViewItem from "./components/ViewItem/ViewItem";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/Order/OrderForm";
import Admin from "./components/Admin/Admin";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Products} path="/products" />
    <Route component={ViewItem} path="/viewitem/:id" />
    <Route component={Cart} path="/cart" />
    <Route component={Checkout} path="/checkout" />
    <Route component={Order} path="/orders/:id" />
    <Route component={Admin} path="/admin" />
  </Switch>
);
