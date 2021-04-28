import React from "react";
import ProductList from "./ProductList";

export default function WomenClothes() {
  return (
    <div className="content">
      <div className="container">
        <div className="sidebar"></div>
        <div className="content">
          <div className="container">
            <ul>
              <ProductList />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
