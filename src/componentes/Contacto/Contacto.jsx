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

              {/* Tarjeta de GitHub CLICABLE */}
              <a 
                href="hhttps://github.com/Jotaoesee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="tarjeta-dato enlace-contacto"
              >
                <span className="icono">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <div className="texto-dato">
                  <strong>GitHub</strong>
                  <p>github.com/Jotaoesee</p>
                </div>
              </a>

              <div className="tarjeta-dato">
                <span className="icono">📍</span>
                <div className="texto-dato">
                  <strong>Ubicación</strong>
                  <p>Valverde de burguillos (Badajoz), España</p>
                </div>
              </div>
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