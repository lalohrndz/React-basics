import React from 'react';


export class EventosES6 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contador:0,
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    
/*
.- Debemos de pasarle el contexto al constructor del método que estamos creando (se crea variable de contexto "this.sumar" y se le asigna el método que estamos creando haciendo un "bindeo" para relacionar el método que estamos llamando al contexto del constructor)
*/

    sumar(e){
        this.setState({
            contador:this.state.contador + 1
        })
    }

    restar(e){
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){
        return(
            <>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <br />
                <button onClick={this.restar}>-</button>
                <br />
            </>
        )
    }
}

/* 
.- Property initializer [ https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2FCeWxGNmdEbm0yQ0hGdXVOTEY3VFlMeElid3xBQ3Jtc0trWHV1ak9Gb29CN3gtczhfY3Q0RC1OVEZoTmxjU0JTcWI5amM5ZnExeHQ1bUJqb3lMMi1GWDYxb3BUSk5SOFN2QS1GTHlNekZsTkdHdFd6OWVNMVBPQm4wNUtISGpUM2xLX1ZQUTg2U0w4TWxLbW02RQ&q=https%3A%2F%2Freactjs.org%2Fblog%2F2015%2F01%2F27%2Freact-v0.13.0-beta-1.html%23es7-property-initializers  ]

*/

function BotonComponente(props){
    return(
        <>
            <button onClick={props.myOnClick}>Botón hecho componente</button>
        </>
    )
}

export class EventosES7 extends React.Component{
    state = {
        contador: 0,
    }


    sumar = (e) =>{
        this.setState({
            contador:this.state.contador + 1
        })
    }

    restar = (e) =>{
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){
        return(
            <>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <br />
                <button onClick={this.restar}>-</button>
                <br />
            </>
        )
    }
}

/* 
Pasar más de un parametro en un evento
*/

export class MasSobreEventos extends React.Component{
    saludarHandler = (e,mensaje) =>{
        console.log("Evento de react",e);
        console.log("Evento nativo",e.nativeEvent);
        console.log(mensaje);
    }

    render(){
        return(
            <>
                <h2>Más sobre eventos</h2>
                <button onClick={(e)=>this.saludarHandler(e,"Hola pasando parametro desde un evento")}>Saludar</button>
                <BotonComponente 
                onClick={(e)=>this.saludarHandler(e,"Hola pasando parametro desde un evento")}
                />
                
                <BotonComponente 
                myOnClick={(e)=>this.saludarHandler(e,"Hola pasando parametro desde un evento")}
                />
            </>
        )
    }
}