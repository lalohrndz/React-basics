/* 
.- Hooks [ https://es.reactjs.org/docs/hooks-intro.html ]
*/

import React, { useState } from 'react';

export default function ContadorHooks(props){
    const [contador, setContador] = useState(0);
    /* console.log(useState()); */
    
    const sumar = ()=>{
        setContador(contador + 1)
    }

    const restar = ()=>{
        setContador(contador - 1)
    }

    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <h3>Contador: {contador}</h3>
                <p>Contador de {props.titulo}</p>
            </nav>
        </>
    )
}

/* 
.- Propiedad por defecto en funcion
*/

ContadorHooks.defaultProps = {
    titulo:"Clicks"
}