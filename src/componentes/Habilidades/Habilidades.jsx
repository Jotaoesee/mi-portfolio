import './Habilidades.css';

function Habilidades() {
  const tecnologias = [
    { nombre: "Java", icono: "☕", color: "naranja" },
    { nombre: "Kotlin", icono: "✨", color: "morado" },
    { nombre: "C#", icono: "#", color: "azul-oscuro" },
    { nombre: "Spring Boot", icono: "🍃", color: "verde" },
    { nombre: "SQL", icono: "🛢️", color: "cian" },
    { nombre: "Git", icono: "🌿", color: "naranja-oscuro" },
    { nombre: "Docker", icono: "📦", color: "azul-claro" },
    { nombre: "REST APIs", icono: "🌐", color: "amarillo" },
    { nombre: "Android", icono: "📱", color: "verde-lima" },
    { nombre: "Security", icono: "🛡️", color: "rojo" }
  ];

  return (
    <section id="habilidades" className="seccion-habilidades">
      <div className="contenedor-habilidades">
        <header className="cabecera-habilidades">
          <h2 className="titulo-stack">Habilidades</h2>
          <p className="subtitulo-stack">Tecnologías con las que trabajo día a día</p>
        </header>

        <div className="rejilla-skills">
          {tecnologias.map((tech, index) => (
            <div key={index} className={`tarjeta-skill ${tech.color}`}>
              <div className="contenedor-icono">
                <span className="icono-skill">{tech.icono}</span>
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