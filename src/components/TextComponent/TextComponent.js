import React from "react";
import './textComponent.scss';
import arrow from './outbound_white_24dp.svg';

//planet: en funcion de navbar
//description: informacion a partir de 1 overview, 2 internal y 3 surface de cada planeta
//source: link a wiki 1 overview, 2 internal y 3 surface de cada planeta
const TextComponent = (props) => {
    const {planet, description, source} = props;
    console.log("textcomponent", description);
    return (
        <div class="planet-info">
            <h2>{planet}</h2>
            <p>{description}</p>
            <h3>Source: <a href={source} target="_blank">Wikipedia<img src={arrow}/></a></h3>
        </div>
    )
}
export default TextComponent;