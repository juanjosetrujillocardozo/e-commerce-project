import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/products');
        setProducts(response.data.products);
      } catch (err) {
        setError('Error al obtener productos');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Tienda de productos</h1>
        {error && <p className="text-red-500">{error}</p>}
        {products.length > 0 ? (
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product._id} className="border p-4 rounded">
                <p className="text-lg font-bold">{product.name}</p>
                <p>Precio: ${product.price}</p>
                <Link href={`/products/${product._id}`} className="text-blue-500 hover:underline">
                  Ver detalles
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
