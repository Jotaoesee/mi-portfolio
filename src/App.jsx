import Navegacion from './componentes/Navegacion/Navegacion';

function App() {
  return (
    <div className="contenedor-aplicacion">
      <Navegacion />
      <main style={{ marginTop: '100px', textAlign: 'center' }}>
        <h2 className="texto-neon">contenido</h2>
      </main>
    </div>
  );
}

export default App;