import React, { useState } from 'react';
import ProductsForm from './ProductsForm/ProductsForm';
import ProductsCollections from '../ProductsCollections/ProductsCollections';

const Products = () => {
    const [products, setProducts] = useState([]);

    const productsData = (data) => {
        const newProducts = [...products, data];
        setProducts(newProducts);

        console.log(products.length);
    }

    return (
        <div>
            <ProductsForm productsData={productsData}></ProductsForm>
            <ProductsCollections products={products}></ProductsCollections>
        </div>
    );
};

export default Products;