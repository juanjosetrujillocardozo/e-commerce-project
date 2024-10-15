// pages/_app.js
import '../styles/globals.css';  // Asegúrate de que el archivo CSS esté bien importado

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
