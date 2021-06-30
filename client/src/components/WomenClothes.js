import React from "react";
import { useLocation } from "react-router";
import ProductList from "./ProductList";

export default function WomenClothes() {
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

