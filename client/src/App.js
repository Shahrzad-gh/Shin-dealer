import React from "react";
import "./App.css";
import Landing from "./components/views/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Best from "./components/Best";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Women from "./components/Women";
import Navbar from "./components/layout/Header/Navbar";
import ProductList from "./components/ProductList";
import SignIn from "./components/views/SignIn"
import SignUp from "./components/views/SignUp"
import ForgetPass from "./components/ForgetPass"
import Shipping from "./components/views/shipping"
import axios from 'axios';
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/Admin/Dashboard";

axios.defaults.withCredentials = true;

function App() {

  return (
    <AuthContextProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/ForgetPass" component={ForgetPass} />
        <Route exact path="/Best" component={Best} />
        <Route exact path="/Kids" component={Kids} />
        <Route exact path="/Men" component={Men} />
        <Route exact path="/Women" component={Women} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route exact path="/Shipping" component={Shipping} />
        <Route exact path="/Admin" component={Dashboard} />
      </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
