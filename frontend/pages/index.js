import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-5xl font-bold mb-8 text-blue-600">Bienvenido a nuestra tienda en línea</h1>
      <p className="text-lg mb-8">Descubre productos increíbles a los mejores precios.</p>
      <div className="space-x-4">
        <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explorar productos
        </Link>
        <Link href="/cart" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ver carrito
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
