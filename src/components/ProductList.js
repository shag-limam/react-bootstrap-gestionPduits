import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, editProduct, deleteProduct, showProductDetails }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
            showProductDetails={showProductDetails}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
