import userEvent from '@testing-library/user-event';
import React, {createRef, useRef} from 'react';

/* 
En caso de que sea un componente de clase el manejo de referencias se hace con createRef
*/

export default function Referencias(){
    let refMenu = useRef(),
    refMenuBtn = useRef();

    const handleToggleMenu = (e)=>{
/*         const $menu = document.getElementById("menu");
        const $menuBtn = document.getElementById("menu-btn");

        if($menuBtn.textContent === "Menú"){
            $menuBtn.textContent = "Cerrar";
            $menu.style.display = "block";
        }else{
            $menuBtn.textContent = "Menú";
            $menu.style.display = "none";
        } */

        if(refMenuBtn.current.textContent==="Menú"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }

    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" style={{display:"none"}} ref={refMenu}>
                <a href="#">Sección 1</a>
                <br />
                <a href="#">Sección 2</a>
                <br />
                <a href="#">Sección 3</a>
                <br />
                <a href="#">Sección 4</a>
                <br />
                <a href="#">Sección 5</a>
                <br />
            </nav>
        </>
    )
}