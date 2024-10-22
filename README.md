# E-commerce Project

## Descripción

Este es un proyecto completo de e-commerce que permite a los usuarios navegar por productos, agregarlos al carrito, registrarse, iniciar sesión y realizar compras. También incluye un panel administrativo para gestionar productos, categorías y ventas. 

El proyecto está compuesto por dos partes principales:

1. **Frontend**: Desarrollado con **Next.js** y **Tailwind CSS**, proporciona la interfaz de usuario para clientes y administradores.
2. **Backend**: Construido con **Node.js**, **Express** y **MongoDB**, ofrece las APIs para la autenticación, la gestión de productos, categorías, ventas y checkout.

## Características principales

- Autenticación de usuarios (registro e inicio de sesión).
- Gestión de productos (crear, editar, eliminar).
- Carrito de compras y checkout.
- Panel administrativo para gestionar productos, categorías y ventas.
- Subida de imágenes para productos.
- API REST para todas las operaciones CRUD.
- Protección de rutas mediante autenticación JWT.

## Tecnologías utilizadas

- **Frontend**:
  - Next.js
  - Tailwind CSS
  - Axios

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Multer (para la subida de imágenes)
  - JWT (para autenticación)

## Requisitos previos

Para ejecutar el proyecto, necesitarás instalar lo siguiente:

- Node.js (v14 o superior)
- NPM o Yarn
- MongoDB (local o en la nube)

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/juanjosetrujillocardozo/e-commerce-project.git
cd e-commerce-project
```

### 2. Configuración del frontend

Ve al directorio del frontend e instala las dependencias:

```bash
cd frontend
npm install
```

Configura el archivo `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

### 3. Configuración del backend

Ve al directorio del backend e instala las dependencias:

```bash
cd backend
npm install
```

Configura el archivo `.env`:

```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/miapp?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El backend estará corriendo en `http://localhost:5000`.

## Estructura del proyecto

```bash
e-commerce-project/
├── frontend/         # Proyecto del frontend (Next.js + Tailwind CSS)
├── backend/          # Proyecto del backend (Node.js + Express + MongoDB)
├── README.md         # Este archivo
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor crea un **fork** del repositorio, realiza tus cambios y envía un **pull request**. También puedes reportar problemas o sugerir nuevas características utilizando la sección de **issues**.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](LICENSE).

---