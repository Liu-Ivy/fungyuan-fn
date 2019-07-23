import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Footer from "./components/Footer";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import Category from "./pages/Category";
import Prodcut from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import './App.css';



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar className="navbar" />
          <Switch >
            <AnonRoute className="main-products info" exact path="/" component={MainPage} />
            <AnonRoute className="about-us" path="/form" component={FormPage} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute exact path="/category" component={Category} />
            <PrivateRoute path="/category/:id" component={Prodcut} />
            <PrivateRoute className="add-form" exact path="/addProduct" component={AddProduct} />
          </Switch>
         <Footer className="footer"/>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
