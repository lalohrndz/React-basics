import React from 'react';
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos(){
    let myStyles={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%",
        backgroundColor:"green"
    }

    return(
        <>
            <h2>Estilos CSS en React</h2>

            <h3 className='bg-react'>Estilos en hoja CSS Esterna</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem",margin:"1rem"}}>Estilos en línea (atributo style)</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en línea</h3>
            <h3>@import-normalize</h3>
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            <h3 className='bg-sass'>Estilos con SASS</h3>
        </>
    )
}

