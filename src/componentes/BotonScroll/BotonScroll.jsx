import { useState, useEffect } from 'react';
import './BotonScroll.css';

function BotonScroll() {
  const [visible, setVisible] = useState(false);
  const [progreso, setProgreso] = useState(0);

  useEffect(() => {
    const controlarScroll = () => {
      const scrollActual = window.pageYOffset;
      const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calcular progreso del scroll
      const porcentaje = (scrollActual / alturaTotal) * 100;
      setProgreso(porcentaje);
      
      // Mostrar botón después de 300px
      setVisible(scrollActual > 300);
    };

    window.addEventListener('scroll', controlarScroll);
    controlarScroll();

    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`boton-scroll ${visible ? 'show' : ''}`} 
      onClick={volverArriba}
      aria-label="Volver al inicio"
    >
      <svg className="circulo-progreso" viewBox="0 0 64 64">
        <circle 
          className="circulo-fondo"
          cx="32" 
          cy="32" 
          r="30"
        />
        <circle 
          className="circulo-barra"
          cx="32" 
          cy="32" 
          r="30"
          style={{
            strokeDasharray: 188.5,
            strokeDashoffset: 188.5 - (188.5 * progreso) / 100
          }}
        />
      </svg>
      <span className="icono-flecha">↑</span>
    </button>
  );
}

export default BotonScroll;