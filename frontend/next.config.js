module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/api/:path*', // Asegúrate de que el puerto sea el correcto
        },
      ];
    },
  };
  