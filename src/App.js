import './App.css';
import Boton from "./componentes/Boton"
import kemetecLogo from "./imagenes/kemetec-logo.png"; 


function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
  }

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
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
