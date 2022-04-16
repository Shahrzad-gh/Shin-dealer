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
import ProductDetails from "./components/ProdocutDetails";
import SignIn from "./components/views/SignIn";
import SignUp from "./components/views/SignUp";
import ForgetPass from "./components/ForgetPass";
import Cart from "./containers/cart";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/Admin/Dashboard";
import Basket from "./components/Basket";
import WomenCloths from "./components/WomenClothes";
import MenCloths from "./components/MenCloths";
// import PrivateRoute from './HOC/privateRoutes';
import Order from "./containers/order";
import AllOrders from "./components/Admin/AllOrders";
import PaymentPanel from "./components/PaymentPanel";
import ManageOrder from "./components/Admin/ManageOrder";
import Profile from "./components/User/Profile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Girls from "./components/Girls";
import GirlsCloths from "./components/GirlsCloths";

axios.defaults.withCredentials = true;

function App() {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
            <Route exact path="/Cart" component={Cart} />
            <Route path="/Admin" roles={["admin"]} component={Dashboard} />
            <Route exact path="/Product/:id" component={ProductDetails} />
            <Route exact path="/Basket" component={Basket} />
            <Route exact path="/WomenCloths" component={WomenCloths} />
            <Route exact path="/MenCloths" component={MenCloths} />
            <Route exact path="/Order/:id" component={Order} />
            <Route exact path="/allOrders" component={AllOrders} />
            <Route exact path="/PaymentPanel" component={PaymentPanel} />
            <Route exact path="/ManageOrder/:id" component={ManageOrder} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Girls" component={Girls} />
            <Route exact path="/GirlsCloths" component={GirlsCloths} />
          </div>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
