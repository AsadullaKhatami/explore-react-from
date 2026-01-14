import React from "react";
import Product from "./Product";

const ProductsCollections = ({ products }) => {
  return (
    <div>
      <h1>product list: {products.length}</h1>
      <table>
        <thead>
          <tr>
            <th>serial no.</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product key={index} serialNo={index+1} product={product}></Product>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsCollections;
