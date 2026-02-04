import './Proyectos.css';

function Proyectos() {
  const listaProyectos = [
    {
      titulo: "Realidad Impresa 3D",
      descripcion: "Plataforma integral para la gestión de impresiones 3D personalizadas, con sistema de pedidos y seguimiento en tiempo real.",
      tecnologias: [".NET 8", "C#", "SQL Server", "React"],
      enlace: "#"
    },
    {
      titulo: "Gestión de Datos ETL",
      descripcion: "Desarrollo de procesos de automatización y transformación de datos a gran escala para optimización de procesos empresariales.",
      tecnologias: [".NET", "Entity Framework", "SQL Server"],
      enlace: "#"
    }
  ];

  return (
    <section id="proyectos" className="seccion-proyectos">
      <div className="contenedor-proyectos">
        <header className="cabecera-proyectos">
          <h2 className="titulo-seccion">
            <span className="texto-degradado">Mis Proyectos</span>
          </h2>
          <p className="subtitulo-seccion">Soluciones técnicas enfocadas en rendimiento y escalabilidad</p>
        </header>
        
        <div className="rejilla-proyectos">
          {listaProyectos.map((proyecto, indice) => (
            <article className="tarjeta-proyecto" key={indice}>
              <div className="contenido-proyecto">
                <h3 className="titulo-proyecto">{proyecto.titulo}</h3>
                <p className="descripcion-proyecto">{proyecto.descripcion}</p>
                
                <div className="etiquetas-tecnologias">
                  {proyecto.tecnologias.map((tecnologia, id) => (
                    <span key={id} className="etiqueta-tech">{tecnologia}</span>
                  ))}
                </div>
              </div>
              
              <div className="pie-proyecto">
                <a href={proyecto.enlace} className="enlace-proyecto">
                  Ver Detalles <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;