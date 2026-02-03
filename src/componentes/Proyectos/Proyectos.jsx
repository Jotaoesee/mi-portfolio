import './Proyectos.css';

function Proyectos() {
  const listaProyectos = [
    {
      titulo: "Realidad Impresa 3D",
      descripcion: "Plataforma integral para la gestión de impresiones 3D personalizadas, con sistema de pedidos y seguimiento.",
      tecnologias: [".NET 8", "C#", "SQL Server", "React"],
      enlace: "#"
    },
    {
      titulo: "Gestión de Datos ETL",
      descripcion: "Desarrollo de procesos de automatización y transformación de datos para optimización empresarial.",
      tecnologias: [".NET", "Entity Framework", "SQL"],
      enlace: "#"
    }
  ];

  return (
    <section id="proyectos" className="seccion-proyectos">
      <div className="contenedor-proyectos">
        <h2 className="titulo-seccion">Mis <span className="texto-degradado">Proyectos</span></h2>
        
        <div className="rejilla-proyectos">
          {listaProyectos.map((proyecto, indice) => (
            <div className="tarjeta-proyecto" key={indice}>
              <div className="cabecera-proyecto">
                <h3>{proyecto.titulo}</h3>
              </div>
              <div className="cuerpo-proyecto">
                <p>{proyecto.descripcion}</p>
                <div className="etiquetas-tecnologias">
                  {proyecto.tecnologias.map((tecnologia, id) => (
                    <span key={id} className="etiqueta-tech">{tecnologia}</span>
                  ))}
                </div>
              </div>
              <div className="pie-proyecto">
                <a href={proyecto.enlace} className="enlace-proyecto">Ver Detalles →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;