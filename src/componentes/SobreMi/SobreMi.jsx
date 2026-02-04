import './SobreMi.css';
import miFoto from "../../assets/mi-foto.jpeg";
function SobreMi() {
  const areasInteres = [
    "Desarrollo Backend", "Arquitectura de Software", "Apps Móviles", "DevOps", "Desarrollo Front-end"
  ];

  return (
    <section id="sobre-mi" className="seccion-sobre-mi">
      <div className="contenedor-sobre-mi">
        <h2 className="titulo-seccion">
          <span className="texto-degradado">Sobre Mí</span>
        </h2>

        <div className="panel-sobre-mi">
          <div className="contenido-superior">
            {/* Círculo del Avatar */}
            <div className="columna-avatar">
              <div className="circulo-neon">
                <img 
                  src={miFoto} 
                  alt="José Ángel - Desarrollador .NET" 
                  className="foto-perfil" 
                />
              </div>
            </div>

            {/* Texto Principal y Soft Skills */}
            <div className="columna-texto">
              <h3 className="subtitulo-panel">Desarrollador Full Stack</h3>
              <p className="descripcion-larga">
                Graduado en <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> 
              </p>

              <div className="grid-soft-skills">
                <div className="skill-item">
                  <span className="skill-icon">⚡</span>
                  <div>
                    <h4>Aprendizaje Rápido</h4>
                    <p>Adaptación ágil a nuevas tecnologías.</p>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">{"</>"}</span>
                  <div>
                    <h4>Clean Code</h4>
                    <p>Código limpio y mantenible.</p>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">👥</span>
                  <div>
                    <h4>Trabajo en Equipo</h4>
                    <p>Comunicación clara y efectiva.</p>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🎯</span>
                  <div>
                    <h4>Resultados</h4>
                    <p>Foco en soluciones eficientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divisor-panel"></div>

          {/* Áreas de Interés */}
          <div className="seccion-intereses">
            <h3>Áreas de Interés</h3>
            <div className="tags-intereses">
              {areasInteres.map((area, index) => (
                <span key={index} className="tag-interes">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;