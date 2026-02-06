import './Habilidades.css';

const TECNOLOGIAS = [
  // BACKEND & DATA
  { nombre: ".NET 8", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", color: "azul-oscuro" },
  { nombre: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "azul-oscuro" },
  { nombre: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", color: "cian" },
  { nombre: "Entity Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", color: "cian" },
  { nombre: "WinForms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", color: "azul-claro" },
  { nombre: "DevExpress", logo: "https://static-00.iconduck.com/assets.00/devexpress-icon-503x512-v63ctr2l.png", color: "azul-claro" },
  { nombre: "Arquitectura ETL", logo: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", color: "naranja" },
  { nombre: "Web Scraping", logo: "https://cdn-icons-png.flaticon.com/512/9850/9850774.png", color: "verde" },

  // FRONTEND & MOBILE
  { nombre: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "azul-claro" },
  { nombre: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "azul-claro" },
  { nombre: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "amarillo" },
  { nombre: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "naranja" },
  { nombre: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "azul-claro" },
  { nombre: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "morado" },
  { nombre: "Integración IA", logo: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", color: "rojo" },

  // HERRAMIENTAS & LENGUAJES
  { nombre: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "azul-claro" },
  { nombre: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "naranja-oscuro" },
  { nombre: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "naranja" },
  { nombre: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "amarillo" }
];

function Habilidades() {
  return (
    <section id="habilidades" className="seccion-habilidades">
      <div className="contenedor-habilidades">
        <header className="cabecera-habilidades">
          <h2 className="titulo-stack">
            <span className="texto-degradado">Habilidades Técnicas</span>
          </h2>
          <p className="subtitulo-stack">Especialista en ecosistema .NET y gestión de datos empresariales</p>
        </header>

        <div className="rejilla-skills">
          {TECNOLOGIAS.map((tech, index) => (
            <div key={index} className={`tarjeta-skill ${tech.color}`}>
              <div className="contenedor-icono">
                <img 
                  src={tech.logo} 
                  alt={tech.nombre}
                  className="logo-tech"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span style="font-size: 2rem;">📦</span>';
                  }}
                />
              </div>
              <span className="nombre-skill">{tech.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;