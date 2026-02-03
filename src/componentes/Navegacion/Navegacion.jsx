import './Navegacion.css';

function Navegacion() {
  return (
    <nav className="navegacion-principal">
      <div className="logotipo">
        <span className="texto-neon">Jose Díaz</span>
      </div>
      <ul className="enlaces-navegacion">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto" className="boton-contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navegacion;