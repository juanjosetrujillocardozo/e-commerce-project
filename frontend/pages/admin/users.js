import { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Obtener usuarios desde el backend
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage
        const response = await axios.get('/api/v1/auth/users', {
          headers: {
            Authorization: token, // Enviar el token en el encabezado
          },
        });
        setUsers(response.data);
      } catch (err) {
        setError('Error al obtener usuarios');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Lista de usuarios</h1>
        {error && <p className="text-red-500">{error}</p>}
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user._id} className="border p-4 rounded">
                <p>Nombre de usuario: {user.username}</p>
                <p>ID: {user._id}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No hay usuarios registrados.</p>
        )}
      </div>
    </div>
  );
};

export default UsersList;
