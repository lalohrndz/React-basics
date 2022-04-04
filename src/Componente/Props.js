import React from 'react';
import PropTypes from 'prop-types';

export default function Props(props){
    return(
        <>
            <h3>{props.porDefecto}</h3>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{`${props.objeto.nombre}, ${props.objeto.correo}`}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </>
    )
}

Props.defaultProps={
    porDefecto:"Las props"
};

Props.propTypes={
    numero: PropTypes.number,
};