import './App.css';
import kemetecLogo from "./imagenes/kemetec-logo.png"; 

function App() {
  return (
    <div className="App">
      <div className="kemetec-logo-contenedor">
        <img 
          className="kemetec-logo" 
          src={kemetecLogo}
          alt="Logo de Kemetec" 
        />
      </div>
      <div className="contenedor-principal">
        
      </div>
    </div>
  );
}

export default App;
