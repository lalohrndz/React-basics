import React from 'react';
import data from '../Helpers/data.json'

function ElementoDeLista(props){
    return(
        <>
            <li>
                <a href={props.el.web} target="_blank">{props.el.name}</a>
            </li>
        </>
    )
}

export default class RenderizadoDeElementos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seasons:["primavera","verano","otoño","invierno"],
        }
    }
    render(){
        return(
            <>
                <div>
                    <h2>Renderizado de elementos</h2>
                    <h3>Estaciones del año</h3>
                    <ol>
                        {this.state.seasons.map((el,index)=>(
                            <li key={index}>{el}</li>
                        ))}
                    </ol>
                    <h3>Frameworks Front-end JS</h3>
                    <ul>
                        {
                            data.frameworks.map((el,index)=><ElementoDeLista key={el.id} el={el}/>)
                        }
                    </ul>
                </div>
            </>
        )
    }
}