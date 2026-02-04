import './SobreMi.css';

function SobreMi() {
  return (
    <section id="sobre-mi" className="seccion-sobre-mi">
      <div className="contenedor-sobre-mi">
        <h2 className="titulo-seccion">
          <span className="texto-degradado">Sobre Mí</span>
        </h2>
        
        <div className="contenido-grid">
          <div className="columna-biografia">
            <p>
              Soy <strong>José Ángel</strong>, un desarrollador enfocado en soluciones 
              robustas con <strong>.NET</strong> y <strong>React</strong>. Mi objetivo 
              es crear aplicaciones escalables y eficientes.
            </p>
          </div>

          <div className="columna-tarjetas">
            <div className="tarjeta-dato">
              <span className="etiqueta">Formación</span>
              <p className="valor">Grado Superior DAM</p>
            </div>
            <div className="tarjeta-dato">
              <span className="etiqueta">Experiencia</span>
              <p className="valor">Honeywell & 60 DÍAS</p>
            </div>
            <div className="tarjeta-dato">
              <span className="etiqueta">Stack</span>
              <p className="valor">C#, .NET 8, React, SQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;