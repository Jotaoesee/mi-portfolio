import './Principal.css';

function Principal() {
  return (
    <section id="inicio" className="seccion-principal">
      <div className="cuadricula-fondo"></div>
      
      <div className="contenedor-contenido">
        <h1 className="titulo-hero">
          <span className="nombre">José Ángel</span> 
          <span className="apellido"> Díaz Mulero</span>
        </h1>
        
        <h2 className="rol-profesional">
          Desarrollador <span className="resaltado-gradiente">Full Stack</span>
        </h2>
        
        <p className="breve-descripcion">
          Técnico Superior en DAM especializado en .NET 8, C# y arquitecturas escalables. 
          Apasionado por el código limpio y soluciones de alto impacto.
        </p>
        
        <div className="botones-accion"> 
          <a href="#proyectos" className="boton-relleno">Explorar Proyectos</a>
          <a href="#sobre-mi" className="boton-linea">Sobre mí</a>
        </div>
      </div>
    </section>
  );
}

export default Principal;