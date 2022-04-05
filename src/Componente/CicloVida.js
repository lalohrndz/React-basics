/* 
.- ciclo de vida [ https://es.reactjs.org/docs/state-and-lifecycle.html ]

*/

import React,{Component} from 'react';

class Reloj extends Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }

    render(){
        return(
            <>
                <h3>{this.props.hora}</h3>
            </>
        )
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aún no esta en DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false,
        };

        this.temporizador = null;
    }

    tiktak = () =>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () =>{
        this.tiktak();
        this.setState({
            visible:true,
        });
    }

    detener = () =>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false,
        });
    }

    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps,prevState){
        console.log(2,"El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }



    render(){
        console.log(4,"El componente se dibuja o redibuja en el DOM");
        return(
            <>
                <h2>Ciclo de vida de un componente de clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <br />
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}