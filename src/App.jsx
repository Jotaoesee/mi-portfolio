import Navegacion from './componentes/Navegacion/Navegacion';
import Principal from './componentes/Principal/Principal';
import SobreMi from './componentes/SobreMi/SobreMi';
import Proyectos from './componentes/Proyectos/Proyectos';
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/Footer/Footer';
import Habilidades from './componentes/Habilidades/Habilidades';
import BotonScroll from './componentes/BotonScroll/BotonScroll';

function App() {
  return (
    <div className="contenedor-aplicacion">
      <Navegacion />
      <BotonScroll />      
      
      <main>
        <Principal />
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Contacto />
        <Footer />
      </main>
    </div>
  );
}

export default App;