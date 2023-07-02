import React from 'react';

function ProductDetails({ product }) {
  const { name, price, description } = product;

  return (
    <div>
      <h3>Détails du produit:</h3>
      <br />
      <p>Nom: {name}</p>
      <p>Prix: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default ProductDetails;
