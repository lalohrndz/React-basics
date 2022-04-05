import React from 'react';

export default class ComunicacionComponentes extends React.Component{
    state={
        contador:0,
    }

    incrementarContador=(e)=>{
    this.setState({
        contador: this.state.contador + 1,
    })
    };

    decrementarContador = (e)=>{
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <>
                <br />
                <h3>Comunicación entre componentes</h3>
                <p>Contador: <b>{this.state.contador}</b> </p>
                <Hijo
                msg="Mensaje para el hijo 1"
                incrementarContador={this.incrementarContador}
                decrementarContador={this.decrementarContador}/>
                <br />
            </>
        )
    }
}

function Hijo(props){
    return(
        <>
            <h4>{props.msg}</h4>
            <button onClick={props.incrementarContador}> + </button>
            <br />
            <button onClick={props.decrementarContador}> - </button>
        </>
    )
}