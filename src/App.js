import logo from './logo.svg';
import './App.css';
import Componente from './Componente/Componente';
import Props from './Componente/Props';
import Estado from './Componente/Estado'
import RenderizadoCondicional from './Componente/RederizadoCondicional'
import RenderizadoDeElementos from './Componente/RenderizadoDeElementos'
import {EventosES6,EventosES7, MasSobreEventos} from './Componente/Eventos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componente scr="Texto pasado por un componente"/>
        <hr />
        <Props
        cadena="Cadena de texto"
        numero={25}
        booleano={true}
        arreglo={[1,2,3]}
        objeto={{nombre:"Pepe",correo:"edo.pstr@gmail.com"}}
        funcion={(num)=> num*num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
        />
        <Estado />   
        <RenderizadoCondicional />
        <RenderizadoDeElementos />
        <hr />
        <EventosES6 />
        <EventosES7 />
        <MasSobreEventos />
      </header>
    </div>
  );
}

export default App;
