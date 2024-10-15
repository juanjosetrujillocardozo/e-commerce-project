import Navbar from '../components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/v1/products');
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 text-white p-4">
  <h1 className="text-2xl font-bold">Welcome to the E-commerce Store</h1>
</div>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
