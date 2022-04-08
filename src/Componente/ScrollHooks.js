import React, { useState, useEffect } from 'react';

export default function ScrollHooks(){
    const [scrollY,setScrollY] = useState(0);

/*     useEffect(()=>{
        console.log("Fase de Montaje");
    },[])

    useEffect(()=>{
        console.log("Moviendo el scroll");

        const detectarScoll = () =>{
            setScrollY(window.pageYOffset)
        };

    window.addEventListener("scroll",detectarScoll);

    return()=>{
        window.removeEventListener("scroll",detectarScoll)    ;
        console.log("Fase de desmontaje");
    }

    },[scrollY]);

    useEffect(()=>{
        console.log("Fase de actualización");
    }); */

    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegaor {scrollY}px</p>
        </>
    )
}