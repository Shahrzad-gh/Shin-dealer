import React from "react";
import ProductList from "./ProductList";
import { useLocation } from "react-router";

export default function GirlsCloths() {
  let location = useLocation();

  return (
    <div className="content">
      <div className="container">
        <div className="sidebar"></div>
        <div className="content">
          <div className="container">
            <ul>
              <ProductList category={location.state} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
