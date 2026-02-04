import './Contacto.css';

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Me pondré en contacto contigo lo antes posible.');
  };

  return (
    <section id="contacto" className="seccion-contacto">
      <div className="contenedor-contacto">
        <h2 className="titulo-seccion">
          <span className="texto-degradado">¿Hablamos sobre mi perfil?</span>
        </h2>
        
        <div className="grid-contacto">
          <div className="columna-izquierda">
            <div className="bloque-info">
              <h3>Contacto Profesional</h3>
              <p>
                Estoy abierto a nuevas oportunidades y colaboraciones. 
                Si mi perfil encaja con lo que buscas, hablemos.
              </p>
            </div>
            
            <div className="lista-datos">
              {/* Tarjeta de Email ESTÁTICA */}
              <div className="tarjeta-dato">
                <span className="icono">📧</span>
                <div className="texto-dato">
                  <strong>Email</strong>
                  <p>jadiazm1995@gmail.com</p>
                </div>
              </div>
              
              <div className="tarjeta-dato">
                <span className="icono">📍</span>
                <div className="texto-dato">
                  <strong>Ubicación</strong>
                  <p>Valverde de burguillos (Badajoz), España</p>
                </div>
              </div>

              {/* Tarjeta de LinkedIn CLICABLE */}
              <a 
                href="https://www.linkedin.com/in/jose-angel-diaz-dev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="tarjeta-dato enlace-contacto"
              >
                <span className="icono">💼</span>
                <div className="texto-dato">
                  <strong>LinkedIn</strong>
                  <p>jose-angel-diaz-dev</p>
                </div>
              </a>
            </div>
          </div>

          <div className="columna-derecha">
            <form className="formulario-card" onSubmit={handleSubmit}>
              <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Tu nombre" required />
              </div>
              
              <div className="campo">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" required />
              </div>
              
              <div className="campo">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" rows="4" placeholder="¿En qué puedo ayudarte?" required></textarea>
              </div>
              
              <button type="submit" className="boton-secundario">
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;