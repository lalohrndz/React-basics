import React, { useState, useEffect } from 'react';

function Reloj({hora}){
    return(
        <>
            <h2>{hora}</h2>
        </>
    )
}

export default function RelojHooks(){

    const [hora,setHora] = useState(new Date().toLocaleTimeString());
    const [visible,setVisible] = useState(false);


    useEffect(()=>{
        let temporizador;

        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000);
        }else{
            clearInterval(temporizador);
        }
        
        return()=>{
            console.log("Fase de desmontaje");
            clearInterval(temporizador);
        }
    },[visible])

    const tictac = (valor)=>{
        setVisible(valor)
    }

    return(
        <>
            <h2>Reloj Hooks</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick={()=>tictac(true)}>Iniciar</button>
            <button onClick={()=>tictac(false)}>Detener</button>
        </>
    )
}