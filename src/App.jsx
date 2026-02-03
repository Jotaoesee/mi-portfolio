import Navegacion from './componentes/Navegacion/Navegacion';
import Principal from './componentes/Principal/Principal';
import SobreMi from './componentes/SobreMi/SobreMi';

function App() {
  return (
    <div className="contenedor-aplicacion">
      <Navegacion />
      <main>
        <Principal />
        <SobreMi />
      </main>
    </div>
  );
}

export default App;