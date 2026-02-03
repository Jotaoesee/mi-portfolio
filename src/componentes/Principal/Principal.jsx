import './Principal.css';

function Principal() {
  return (
    <section id="inicio" className="seccion-hero">
      <div className="contenido-hero">
        
        <div className="saludo-hero">
          <span className="mano-animada">👋</span>
          <span>Hola, soy</span>
        </div>
        
        <h1 className="nombre-hero">José Ángel Díaz Mulero</h1>
        
        <p className="rol-hero">
          Desarrollador Full Stack <span className="enfoque-rol">Backend-Focused</span>
        </p>

        <p className="descripcion-hero">
          Técnico Superior en DAM especializado en <strong>C#/.NET 8</strong> y <strong>SQL Server</strong>.
          Me apasiona escribir código limpio y optimizar el rendimiento de los datos.
        </p>

        <div className="botones-hero">
          <a href="#proyectos" className="boton-primario">Ver Proyectos</a>
          <a href="#contacto" className="boton-secundario">Contactar</a>
        </div>

        <div className="tecnologias-hero">
          <span>.NET 8</span>
          <span className="separador">•</span>
          <span>C#</span>
          <span className="separador">•</span>
          <span>React</span>
          <span className="separador">•</span>
          <span>SQL Server</span>
        </div>
      </div>
    </section>
  );
}

export default Principal;