// pages/manage-products.js
import ProductForm from '../components/ProductForm';
import ProductUpdateForm from '../components/ProductUpdateForm';
import DeleteProduct from '../components/DeleteProduct';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Administrar Productos</h1>
      
      <h2 className="text-2xl font-semibold mb-2">Crear Producto</h2>
      <ProductForm />

      <h2 className="text-2xl font-semibold mt-8 mb-2">Productos Existentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>

            <ProductUpdateForm productId={product._id} />
            <DeleteProduct productId={product._id} />
          </div>
        ))}
      </div>
    </div>
  );
}
