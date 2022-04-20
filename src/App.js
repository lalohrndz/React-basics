import logo from './logo.svg';
import './App.css';
import Componente from './Componente/Componente';
import Props from './Componente/Props';
import Estado from './Componente/Estado'
import RenderizadoCondicional from './Componente/RederizadoCondicional'
import RenderizadoDeElementos from './Componente/RenderizadoDeElementos'
import {EventosES6,EventosES7, MasSobreEventos} from './Componente/Eventos'
import ComunicacionComponentes from './Componente/ComunicacionComponentes';
import CicloVida from './Componente/CicloVida'
import PeticionesAsincrona from './Componente/PeticionesAsincrona';
import ContadorHooks from './Componente/ContadorHooks';
import ScrollHooks from './Componente/ScrollHooks';
import RelojHooks from './Componente/RelojHooks';
import AjaxHooks from './Componente/AjaxHooks';
import HooksPersonalizados from './Componente/HooksPersonalizados';
import Referencias from './Componente/Referencias';
import Formularios from './Componente/Formularios';

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
        <ComunicacionComponentes />
        {/* <CicloVida /> */}
        <br />
        <PeticionesAsincrona />
        <ContadorHooks titulo="Seguidores"/>
        <ScrollHooks />
        <RelojHooks/>
        <AjaxHooks/>
        <HooksPersonalizados/>
        <Referencias/>
        <Formularios/>
      </header>
    </div>
  );
}

export default App;
