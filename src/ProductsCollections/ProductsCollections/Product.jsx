import React from 'react';

const Product = ({ product, serialNo }) => {
  const { name, amount, quantity } = product;
  return (
    <tr>
      <td>{serialNo}</td>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{quantity}</td>
      <td></td>
    </tr>
  );
};

export default Product;