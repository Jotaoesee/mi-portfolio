import './Navegacion.css';

function Navegacion() {
  return (
    <header className="cabecera">
      <nav className="navegacion">
        <div className="logotipo">
          <a href="#inicio" className="enlace-logo">
            <span className="texto-logo">José Ángel</span>
          </a>
        </div>
        <ul className="enlaces-nav">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navegacion;