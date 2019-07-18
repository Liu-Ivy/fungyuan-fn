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



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
            <AnonRoute exact path="/" component={MainPage} />
            <AnonRoute path="/form" component={FormPage} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute exact path="/category" component={Category} />
            <PrivateRoute path="/category/:id" component={Prodcut} />
          </Switch>
         <Footer />
        </div>
      </AuthProvider>
    );
  }
}

export default App;
