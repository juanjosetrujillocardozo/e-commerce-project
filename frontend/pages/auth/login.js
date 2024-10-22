import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('Por favor complete todos los campos');
      return;
    }
    try {
      const { data } = await axios.post('/api/v1/auth/login', form);
      localStorage.setItem('token', data.token);
      router.push('/');
    } catch (error) {
      setError('Error en las credenciales, intente nuevamente');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Iniciar Sesión</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
