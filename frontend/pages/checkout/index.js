import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleConfirmPurchase = () => {
    localStorage.removeItem('cart');
    alert('Compra confirmada. Gracias por tu compra.');
    router.push('/');
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Confirmar Compra</h1>
        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border p-4 rounded flex justify-between">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p>Precio: ${item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={handleConfirmPurchase}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
              >
                Confirmar Compra
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
