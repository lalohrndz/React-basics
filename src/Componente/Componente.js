import React, {Component} from 'react';

/* export default class Componente extends Component{
    render(){
        let message = this.prop.msg || "Mensaje predeterminado de componente"
        return(
            <>
                <p>{message}</p>
            </>
        )

    }
} */

/* export default function Componente(props){
    let message = props.msg || "Mensaje predeterminado del componente"
    return(
        <>
            <p>{message}</p>
        </>
    )
} */

const Componente = (props) =>{
    let message = props.msg || "Mensaje predeterminado del componente"
    return(
        <>
            <p>{message}</p>
        </>
    )
}

export default Componente;