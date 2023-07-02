import React from 'react';

function ProductItem({ product, editProduct, deleteProduct, showProductDetails }) {
  const { id, name, price } = product;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-primary" onClick={() => editProduct(product)}>
          Modifier
        </button>
        <button className="btn btn-danger" onClick={() => deleteProduct(id)}>
          Supprimer
        </button>
        <button className="btn btn-info" onClick={() => showProductDetails(id)}>
          Détails
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
