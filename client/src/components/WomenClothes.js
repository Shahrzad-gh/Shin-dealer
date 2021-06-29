import React from "react";
import ProductList from "./ProductList";

export default function WomenClothes(props) {
  return (
    <div className="content">
      <div className="container">
        <div className="sidebar"></div>
        <div className="content">
          <div className="container">
            <ul>
              <ProductList category={props.location.state} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
