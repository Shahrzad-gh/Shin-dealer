import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Best from "./components/Best";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Women from "./components/Women";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route exact path="/Best" component={Best} />
        <Route exact path="/Kids" component={Kids} />
        <Route exact path="/Men" component={Men} />
        <Route exact path="/Women" component={Women} />
        <Route exact path="/ProductList" component={ProductList} />
      </div>
    </Router>
  );
}

export default App;
