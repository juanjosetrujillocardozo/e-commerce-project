const AdminDashboard = () => {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <ul>
          <li><a href="/admin/products">Gestionar Productos</a></li>
          <li><a href="/admin/categories">Gestionar Categorías</a></li>
          <li><a href="/admin/orders">Gestionar Órdenes</a></li>
        </ul>
      </div>
    );
  };
  
  export default AdminDashboard;
  