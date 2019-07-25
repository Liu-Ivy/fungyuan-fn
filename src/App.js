import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Private from "./pages/Private";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import Category from "./pages/Category";
import Prodcut from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import OrderList from "./pages/OrderList";
import './App.css';



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
              <Nav className="nav" />
          <Switch >
            <AnonRoute className="main-products info" exact path="/" component={MainPage} />
            <AnonRoute className="about-us" path="/form" component={FormPage} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute exact path="/category" component={Category} />
            <PrivateRoute path="/category/:id" component={Prodcut} />
            <PrivateRoute className="add-form" exact path="/addProduct" component={AddProduct} />
            <PrivateRoute className="order-list" path="/orderList" component={OrderList}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
