// components/DeleteProduct.js
import axios from 'axios';

const DeleteProduct = ({ productId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/v1/products/${productId}`);
      alert('Producto eliminado');
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Eliminar Producto
    </button>
  );
};

export default DeleteProduct;
