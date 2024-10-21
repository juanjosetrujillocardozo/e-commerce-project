import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/api/v1/products/${id}`);
          setProduct(response.data);
        } catch (err) {
          setError('Error al obtener detalles del producto');
        }
      };

      fetchProduct();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {error && <p className="text-red-500">{error}</p>}
      {product ? (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
            {product.name}
          </h1>
          <p>Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => handleAddToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      ) : (
        <p className="text-gray-600">Cargando detalles del producto...</p>
      )}
    </div>
  );
};

const handleAddToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.push(product);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert(`${product.name} ha sido añadido al carrito.`);
};

export default ProductDetails;
