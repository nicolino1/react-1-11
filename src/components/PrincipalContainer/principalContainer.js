import React , {useState} from 'react';
import "./css/navbar.scss";
import CardInfo from '../CardInfo/cardInfo';
import Navbar from '../Navbar/navbar';
import TextComponent from '../TextComponent/TextComponent';

const PrincipalContainer = (props) => {


    return (

        <div className="principal">
            <Navbar />
            <div>
                aca va la imagen y los botones con la descripcion del planeta
            </div>
            <div>
                iterar cardsInfo y pasar datos
            </div>
        </div>

    )
} 

export default PrincipalContainer;