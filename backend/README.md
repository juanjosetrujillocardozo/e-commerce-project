# E-commerce Project - Backend

## Descripción

Este es el backend del proyecto e-commerce, construido con **Node.js**, **Express**, y **MongoDB**. Proporciona un conjunto de APIs para manejar el registro de usuarios, autenticación, gestión de productos, categorías, ventas y procesos de checkout. Utiliza JWT para la autenticación y multer para la carga de imágenes.

## Requisitos previos

- Node.js (v14 o superior)
- MongoDB (local o en la nube)
- NPM o Yarn

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/juanjosetrujillocardozo/e-commerce-project.git
   cd e-commerce-project/backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura el archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/miapp?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

El servidor estará corriendo en `http://localhost:5000`.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo con nodemon.
- `npm run start`: Inicia el servidor en modo producción.

## Estructura del proyecto

```bash
backend/
├── config/            # Configuración de la base de datos
├── controllers/       # Controladores de las rutas
├── middleware/        # Middlewares de autenticación y autorización
├── models/            # Modelos de MongoDB (Producto, Usuario, Categoría, Venta)
├── routes/            # Rutas para las API
├── uploads/           # Carpeta donde se almacenan las imágenes subidas
├── .env               # Variables de entorno
└── README.md          # Este archivo
```

## API Endpoints

### Autenticación

- **POST** `/api/v1/auth/sign-up`: Registrar un nuevo usuario.
- **POST** `/api/v1/auth/login`: Iniciar sesión y obtener el token JWT.

### Productos

- **GET** `/api/v1/products`: Obtener todos los productos.
- **POST** `/api/v1/products`: Crear un nuevo producto (autenticado).
- **GET** `/api/v1/products/:id`: Obtener los detalles de un producto.
- **PATCH** `/api/v1/products/:id`: Actualizar un producto (autenticado).
- **DELETE** `/api/v1/products/:id`: Eliminar un producto (autenticado).

### Categorías

- **GET** `/api/v1/categories`: Obtener todas las categorías.
- **POST** `/api/v1/categories`: Crear una nueva categoría (autenticado).

### Ventas

- **POST** `/api/v1/checkout`: Finalizar una compra.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir APIs.
- **MongoDB**: Base de datos NoSQL para almacenar productos, usuarios y ventas.
- **Multer**: Middleware para manejar la carga de archivos.
- **JWT**: Manejo de autenticación y autorización.

---