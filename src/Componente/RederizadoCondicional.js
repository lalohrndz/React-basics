import React from 'react';

/* Las funciones login y logout en práctica son componentes por separado */
function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h3>logout</h3>
        </div>
    )
}

export default class RederizadoCondicional extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            session:false
        }
    }
    render(){
        return(
            <>
                <h3>Renderizado Condicional</h3>
                {this.state.session ? <Login /> : <Logout />}
            </>
        )
    }
}