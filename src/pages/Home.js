import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3333/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const editProduct = (product) => {
    // Logic for editing a product
  };

  const deleteProduct = async (productId) => {
    // Logic for deleting a product
  };

  const showProductDetails = (id) => {
    // Logic for showing product details
  };

  return (
    <div>
      <h1>Gestion des produits</h1>
      <ProductList
        products={products}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
        showProductDetails={showProductDetails}
      />
    </div>
  );
}

export default Home;
