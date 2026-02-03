import './Footer.css'

function Footer() {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor-footer">
        <div className="contenido-footer">
          <div className="marca-footer">
            <h3 className="logo-footer">José Díaz</h3>
            <p className="lema-footer">
              Desarrollando soluciones con código limpio y arquitecturas escalables.
            </p>
          </div>

          <div className="enlaces-footer">
            <div className="columna-footer">
              <h4 className="titulo-columna">Navegación</h4>
              <ul className="lista-footer">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre Mí</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>

            <div className="columna-footer">
              <h4 className="titulo-columna">Tecnologías</h4>
              <ul className="lista-footer">
                <li>.NET 8 & C#</li>
                <li>SQL Server</li>
                <li>React</li>
                <li>Arquitectura ETL</li>
              </ul>
            </div>

            <div className="columna-footer">
              <h4 className="titulo-columna">Conecta</h4>
              <ul className="lista-footer">
                <li><a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:tu@email.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="inferior-footer">
          <p className="copyright-footer">
            © {anioActual} José Ángel Díaz Mulero. Hecho con React + Vite
          </p>
          <div className="tecnologias-footer">
            <span className="placa-tech">React</span>
            <span className="placa-tech">Vite</span>
            <span className="placa-tech">.NET 8</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;