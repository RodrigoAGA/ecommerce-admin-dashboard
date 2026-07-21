import { Routes, Route } from "react-router-dom"
import Inicio from './components/Inicio'
import Checkout from "./components/Checkout"
import Carrito from "./components/Carrito"
import PedidoCompleto from "./components/PedidoCompleto"
import Detalle from "./components/Detalle"
import Busqueda from "./components/Busqueda"
// Componentes alumno 4
import ListadoSeries from "./components/cliente/ListadoSeries"
import DetalleOrden from "./components/cliente/DetalleOrden"
import DatosRegistroUsuario from "./components/cliente/DatosRegistroUsuario"
import CambiarContrasena from "./components/cliente/CambiarContrasena"
import AgregarSerie from "./components/cliente/AgregarSerie"
//

import Formulario from "./components/Formulario"
import Registro from "./components/Registro"
import Recuperar from "./components/Recuperar"

// Componentes de alumno 5
import AdminDashboard from './components/admin-productos/AdminDashboard'
import AdminAgregarProductos from "./components/admin-productos/AdminAgregarProductos"
import AdminListaProductos from "./components/admin-productos/AdminListaProductos"

// Componentes de alumno 6
import ListaUsuarios from "./components/admin-ordenes-usuarios/ListaUsuarios";
import DetalleUsuarioAdmin from "./components/admin-ordenes-usuarios/DetalleUsuarioAdmin";
import ListadoOrdenesAdmin from "./components/admin-ordenes-usuarios/ListadoOrdenesAdmin";
import DetalleOrdenAdmin from "./components/admin-ordenes-usuarios/DetalleOrdenAdmin";

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        {/* Ruta de inicio por defecto */}
        <Route path="/" element={ <Inicio /> } />

        <Route path="/detalle" element={ <Detalle /> } />
        <Route path="/busqueda" element={ <Busqueda /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/pedido_completo" element={ <PedidoCompleto /> } />
        
        <Route path="/Formulario" element={ <Formulario /> } />
        <Route path="/Recuperar" element={ <Recuperar /> } />
        <Route path="/Registro" element={ <Registro /> } />
        {/* Rutas de alumno 4 */}
        <Route path="/ListadoSeries" element={<ListadoSeries/>}/> 
        <Route path="/AgregarSerie" element={<AgregarSerie/>}/> 
        <Route path="/DetalleOrden/:id" element={<DetalleOrden/>}/> 
        <Route path="/DatosRegistroUsuario" element={<DatosRegistroUsuario/>}/>  
        <Route path="/CambiarContrasena" element={<CambiarContrasena/>}/> 
        {/* Rutas de alumno 5 */}
        <Route path="/admin_dashboard" element={ <AdminDashboard /> } />
        <Route path="/admin_lista_productos" element={ <AdminListaProductos /> } />
        <Route path="/admin_agregar_productos" element={ <AdminAgregarProductos /> } />

        {/* Rutas de alumno 6 */}
        <Route path="/DetalleOrdenAdmin/:id" element={ <DetalleOrdenAdmin /> } />
        <Route path="/ListadoOrdenesAdmin" element={ <ListadoOrdenesAdmin /> } />
        <Route path="/DetalleUsuarioAdmin/:id" element={ <DetalleUsuarioAdmin /> } />
        <Route path="/ListaUsuarios" element={ <ListaUsuarios /> } />
      
      </Routes>
    </div>
  )
}

export default App
