import React from 'react';
import ProductForm from '../components/ProductForm';

function AddProduct() {
  const fetchProducts = () => {
    // Logic to fetch products
  };

  return (
    <div>
      <h1>Ajouter un nouveau produit</h1>
      <ProductForm editingProductId={null} fetchProducts={fetchProducts} />
    </div>
  );
}

export default AddProduct;
