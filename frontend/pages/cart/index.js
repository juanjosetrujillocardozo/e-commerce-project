import { useState, useEffect } from 'react';
import Link from 'next/link';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Carrito de compras</h1>
        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border p-4 rounded flex justify-between">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p>Precio: ${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <Link href="/checkout" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 w-full text-center">
              Proceder al pago
            </Link>
          </>
        ) : (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
