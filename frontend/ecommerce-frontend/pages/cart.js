// pages/cart.js
export default function Cart() {
    const cartItems = [
      { id: 1, name: 'Product 1', price: 100, quantity: 2 },
      { id: 2, name: 'Product 2', price: 200, quantity: 1 },
    ];
  
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Your Shopping Cart
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div>
                  <p className="text-xl font-bold">${item.price * item.quantity}</p>
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="text-right mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
  