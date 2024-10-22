Aquí tienes los **README** con el formato Markdown correctamente implementado tanto para el **frontend** como para el **backend**:

---

# E-commerce Project - Frontend

## Descripción

Este es el frontend del proyecto e-commerce desarrollado con **Next.js** y **Tailwind CSS**. Permite a los usuarios navegar por productos, añadirlos al carrito, registrarse, iniciar sesión y realizar compras. También cuenta con un sistema de autenticación y un panel de administración para gestionar productos, categorías y ventas.

## Requisitos previos

- Node.js (v14 o superior)
- NPM o Yarn

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/juanjosetrujillocardozo/e-commerce-project.git
   cd e-commerce-project/frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura el archivo `.env.local` en la raíz del proyecto con las siguientes variables:

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre el navegador en `http://localhost:3000`.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye el proyecto para producción.
- `npm run start`: Inicia el servidor en modo producción.

## Estructura del proyecto

```bash
frontend/
├── components/        # Componentes reutilizables
├── pages/             # Páginas principales (Home, Login, Sign Up, etc.)
├── public/            # Imágenes públicas y otros recursos
├── styles/            # Archivos de estilos (Tailwind, globales)
├── .env.local         # Variables de entorno
└── README.md          # Este archivo
```

## Tecnologías utilizadas

- **Next.js**: Framework para React con generación estática y del lado del servidor.
- **Tailwind CSS**: Framework de CSS utilitario.
- **Axios**: Cliente HTTP para realizar solicitudes al backend.

---