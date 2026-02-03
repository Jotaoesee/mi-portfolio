import Navegacion from './componentes/Navegacion/Navegacion';
import Principal from './componentes/Principal/Principal';
import SobreMi from './componentes/SobreMi/SobreMi';
import Proyectos from './componentes/Proyectos/Proyectos';
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className="contenedor-aplicacion">
      <Navegacion />
      <main>
        <Principal />
        <SobreMi />
        <Proyectos />
        <Contacto /> 
        <Footer />
      </main>
    </div>
  );
}

export default App;