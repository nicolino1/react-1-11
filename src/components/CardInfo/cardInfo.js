import React from 'react';
import "./cardInfo.scss";

const CardInfo = (props) => {
    const { title, description} = props;

    return (
        <div className="cardInfo">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
} 

export default CardInfo;