import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Best from "./components/Best";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Best" component={Best} />
    </Router>
  );
}

export default App;
