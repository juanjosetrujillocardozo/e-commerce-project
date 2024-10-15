// pages/index.js

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">
          Welcome to the E-commerce Store
        </h1>
        <p className="text-gray-700 mb-4">
          Discover amazing products at the best prices!
        </p>
        <div className="space-x-4">
          <a
            href="/products"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Browse Products
          </a>
          <a
            href="/cart"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
}
