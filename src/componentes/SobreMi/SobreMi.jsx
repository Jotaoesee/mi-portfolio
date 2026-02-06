import './SobreMi.css';
import miFoto from "../../assets/mi-foto.jpeg";

const AREAS_INTERES = [
  "Arquitectura .NET 8", 
  "Gestión de ERPs",     
  "Bases de Datos (SQL & Firebase)", 
  "Frontend con React", 
  "Mobile (Flutter/Dart)", 
  "Docker",      
  "Integración de IA"   
];

function SobreMi() {
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
                Desarrollador Full Stack con experiencia en el mantenimiento y evolución de sistemas críticos. 
                Recientemente, en el sector de la <strong>consultoría</strong>, lideré la evolución de un <strong>ERP empresarial</strong> utilizando <strong>.NET 8, WinForms y DevExpress</strong>, especializándome en la integridad de datos en <strong>SQL Server</strong> y la automatización mediante Web Scraping.
                <br /><br />
                Previamente, en <strong>Honeywell</strong>, colaboré en la optimización de plataformas de servicios técnicos bajo arquitectura <strong>MVC</strong>, trabajando con C#, HTML5 y JavaScript. 
                Mi formación sólida en <strong>Java y Python</strong> me permite abordar problemas complejos desde diversas perspectivas, mientras continúo evolucionando mi stack hacia tecnologías modernas como <strong>React y Flutter</strong>.
              </p>

              <div className="grid-soft-skills">
                <div className="skill-item">
                  <span className="skill-icon">⚡</span>
                  <div>
                    <h4>Adaptabilidad</h4>
                    <p>Transición ágil entre entornos Web y Desktop.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-icon">{"</>"}</span>
                  <div>
                    <h4>Mantenimiento</h4>
                    <p>Optimización y refactorización de código legacy hacia estándares limpios.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-icon">👥</span>
                  <div>
                    <h4>Trabajo Ágil</h4>
                    <p>Colaboración efectiva en equipos técnicos y resolución de conflictos.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-icon">🎯</span>
                  <div>
                    <h4>Foco en Datos</h4>
                    <p>Garantía de integridad y rendimiento en sistemas SQL y NoSQL.</p>
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
              {AREAS_INTERES.map((area, index) => (
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