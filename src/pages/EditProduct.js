import React from 'react';
import ProductForm from '../components/ProductForm';

function EditProduct({ match }) {
  const productId = match.params.id;

  const fetchProducts = () => {
    // Logic to fetch products
  };

  return (
    <div>
      <h1>Modifier un produit</h1>
      <ProductForm editingProductId={productId} fetchProducts={fetchProducts} />
    </div>
  );
}

export default EditProduct;
