import React, { useState, useEffect } from 'react';
import './BotonScroll.css';

function BotonScroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const controlarVisibilidad = () => {
      const desplazamiento = window.pageYOffset || document.documentElement.scrollTop;
      
      if (desplazamiento > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', controlarVisibilidad);
    
    controlarVisibilidad();

    return () => window.removeEventListener('scroll', controlarVisibilidad);
  }, []);

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`boton-scroll ${visible ? 'show' : ''}`} 
      onClick={volverArriba}
    >
      ↑
    </button>
  );
}

export default BotonScroll;