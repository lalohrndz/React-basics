import React, {useState} from 'react';

/* export default function Formularios(){
    const [Nombre,setNombre] = useState("");
    const [Sabor,setSabor] = useState("");
    const [Lenguaje,setLenguaje] = useState("");
    const [Temrinos,setTerminos] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                type="text"
                id="nombre"
                name='nombre'
                value={Nombre}
                onChange={(e)=>{setNombre(e.target.value)}}/>
                
                <p>Elige tu sabor JS favorito</p>
                <label htmlFor="vanilla">Vanilla</label>
                <input
                type="radio"
                name="sabor"
                id="vanilla"
                value="Vanilla"
                defaultChecked
                onChange={(e)=>{setSabor(e.target.value)}}/>
                <br />

                <label htmlFor="react">React</label>
                <input
                type="radio"
                name="sabor"
                id="react"
                value="React"
                onChange={(e)=>{setSabor(e.target.value)}}/>
                <br />

                <label htmlFor="vue">Vue</label>
                <input
                type="radio"
                name="sabor"
                id="vue"
                value="vue"
                onChange={(e)=>{setSabor(e.target.value)}}/>
                <br />

                <label htmlFor="angular">Angular</label>
                <input
                type="radio"
                name="sabor"
                id="angular"
                value="angular"
                onChange={(e)=>{setSabor(e.target.value)}}/>
                <br />

                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={(e)=>{setLenguaje(e.target.value)}} defaultValue="">
                    <option value="">---</option>
                    <option value="JavaScript">JS</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                </select>
                <br />

                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={(e)=>{setTerminos(e.target.checked)}}/>
                <br />

                <button type='submit'>Envíar</button>
            </form>

            
        </>
    )
} */

export default function Formularios(){
    const [Form,setForm] = useState({});

    const handleChange = (e)=>{
        setForm({
            ...Form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    const handleChecked = (e)=>{
        setForm({
            ...Form,
            [e.target.name]:e.target.checked,
        })
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                type="text"
                id="nombre"
                name='nombre'
                value={Form.Nombre}
                onChange={handleChange}/>
                
                <p>Elige tu sabor JS favorito</p>
                <label htmlFor="vanilla">Vanilla</label>
                <input
                type="radio"
                name="sabor"
                id="vanilla"
                value="Vanilla"
                defaultChecked
                onChange={handleChange}/>
                <br />

                <label htmlFor="react">React</label>
                <input
                type="radio"
                name="sabor"
                id="react"
                value="React"
                onChange={handleChange}/>
                <br />

                <label htmlFor="vue">Vue</label>
                <input
                type="radio"
                name="sabor"
                id="vue"
                value="vue"
                onChange={handleChange}/>
                <br />

                <label htmlFor="angular">Angular</label>
                <input
                type="radio"
                name="sabor"
                id="angular"
                value="angular"
                onChange={handleChange}/>
                <br />

                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="JavaScript">JS</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                </select>
                <br />

                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
                <br />

                <button type='submit'>Envíar</button>
            </form>

            
        </>
    )
}