import React from "react";

const ProductsForm = ({ productsData }) => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const amount = e.target.amount.value;
    const quantity = e.target.quantity.value;
    const products = {
      name,
      amount,
      quantity,
    };
    // console.log(products);
    productsData(products);
  };
  return (
    <div>
      <h1>Enter your products here..</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="product name" required />
        <br />
        <input type="number" name="amount" placeholder="amount" required />
        <br />
        <input type="number" name="quantity" placeholder="quantity" required />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ProductsForm;
