import './Contacto.css';

function Contacto() {
  return (
    <section id="contacto" className="seccion-contacto">
      <div className="contenedor-contacto">
        <h2 className="titulo-seccion">Hablemos de tu próximo <span className="texto-degradado">Proyecto</span></h2>
        
        <div className="grid-contacto">
          <div className="info-contacto">
            <h3>Contacto</h3>
            <p>¿Tienes una oferta, un proyecto o simplemente quieres saludar? Estaré encantado de hablar contigo.</p>
            
            <div className="enlaces-directos">
              <div className="item-contacto">
                <strong>Email:</strong>
                <p>tu-email@ejemplo.com</p>
              </div>
              <div className="item-contacto">
                <strong>Ubicación:</strong>
                <p>Badajoz, España</p>
              </div>
            </div>
          </div>

          <form className="formulario-contacto" onSubmit={(e) => e.preventDefault()}>
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Tu nombre" />
            </div>
            <div className="campo">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="tu@email.com" />
            </div>
            <div className="campo">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="4" placeholder="¿En qué puedo ayudarte?"></textarea>
            </div>
            <button type="submit" className="boton-enviar">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;