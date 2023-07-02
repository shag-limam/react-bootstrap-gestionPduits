import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ editingProductId, fetchProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3333/products', {
        name,
        price,
        description,
      });
      fetchProducts();
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/products/${editingProductId}`, {
        name,
        price,
        description,
      });
      fetchProducts();
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  return (
    <form onSubmit={editingProductId ? updateProduct : createProduct}>
      <div className="form-group">
        <label>Nom du produit:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Prix du produit:</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description du produit:</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        {editingProductId ? 'Modifier le produit' : 'Ajouter un produit'}
      </button>
    </form>
  );
}

export default ProductForm;
