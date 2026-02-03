import Navegacion from './componentes/Navegacion/Navegacion';
import Principal from './componentes/Principal/Principal';
import SobreMi from './componentes/SobreMi/SobreMi';
import Proyectos from './componentes/Proyectos/Proyectos';

function App() {
  return (
    <div className="contenedor-aplicacion">
      <Navegacion />
      <main>
        <Principal />
        <SobreMi />
        <Proyectos />
      </main>
    </div>
  );
}

export default App; 