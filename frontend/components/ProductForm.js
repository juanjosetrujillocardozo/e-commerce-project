// components/ProductForm.js
import { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = { name, price };
      await axios.post('/api/v1/products', newProduct);
      alert('Producto creado exitosamente');
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700">Nombre del Producto</label>
        <input 
          type="text" 
          placeholder="Nombre del Producto" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div>
        <label className="block text-gray-700">Precio</label>
        <input 
          type="number" 
          placeholder="Precio" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear Producto
      </button>
    </form>
  );
};

export default ProductForm;
