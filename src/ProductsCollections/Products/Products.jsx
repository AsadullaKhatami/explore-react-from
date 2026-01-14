import React from 'react';
import ProductsForm from './ProductsForm/ProductsForm';
import ProductsCollections from '../ProductsCollections/ProductsCollections';

const Products = () => {
    return (
        <div>
            <ProductsForm></ProductsForm>
            <ProductsCollections></ProductsCollections>
        </div>
    );
};

export default Products;