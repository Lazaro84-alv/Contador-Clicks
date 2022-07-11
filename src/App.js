import { useState } from "react"; 
import './App.css';
import Boton from "./componentes/Boton"
import Contador from "./componentes/Contador"
import kemetecLogo from "./imagenes/kemetec-logo.png";


function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
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
        <Contador numClics={numClics} />
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
