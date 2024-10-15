// components/ProductUpdateForm.js
import { useState } from 'react';
import axios from 'axios';

const ProductUpdateForm = ({ productId }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = { name, price };
      await axios.patch(`/api/v1/products/${productId}`, updatedProduct);
      alert('Producto actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700">Nuevo Nombre del Producto</label>
        <input 
          type="text" 
          placeholder="Nuevo Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div>
        <label className="block text-gray-700">Nuevo Precio</label>
        <input 
          type="number" 
          placeholder="Nuevo Precio" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <button 
        type="submit" 
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
      >
        Actualizar Producto
      </button>
    </form>
  );
};

export default ProductUpdateForm;
