import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/login', {
        username,
        password,
      });
      const { token } = response.data;
      console.log('Usuario autenticado:', response.data);
      // Guardar el token en el localStorage o en una cookie
      localStorage.setItem('token', token);
      // Redirigir a la página de inicio o dashboard
      router.push('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      setErrorMessage(error.response.data.message || 'Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Nombre de usuario</label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
