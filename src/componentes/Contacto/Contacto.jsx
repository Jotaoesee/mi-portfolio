import './Contacto.css';

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado!');
  };

  return (
    <section id="contacto" className="seccion-contacto">
      <div className="contenedor-contacto">
        <h2 className="titulo-seccion">
          ¿Hablamos de tu próximo <span className="texto-degradado">Proyecto</span>?
        </h2>
        
        <div className="grid-contacto">
          <div className="columna-izquierda">
            <div className="bloque-info">
              <h3>Información de Contacto</h3>
              <p>Si tienes alguna propuesta o simplemente quieres conversar, no dudes en escribirme.</p>
            </div>
            
            <div className="lista-datos">
              <div className="tarjeta-dato">
                <span className="icono">📧</span>
                <div className="texto-dato">
                  <strong>Email</strong>
                  <p>tu-email@ejemplo.com</p>
                </div>
              </div>
              
              <div className="tarjeta-dato">
                <span className="icono">📍</span>
                <div className="texto-dato">
                  <strong>Ubicación</strong>
                  <p>Badajoz, España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="columna-derecha">
            <form className="formulario-card" onSubmit={handleSubmit}>
              <div className="campo">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre completo" required />
              </div>
              
              <div className="campo">
                <label>Email</label>
                <input type="email" placeholder="tu@email.com" required />
              </div>
              
              <div className="campo">
                <label>Mensaje</label>
                <textarea rows="5" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
              </div>
              
              <button type="submit" className="boton-degradado">
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