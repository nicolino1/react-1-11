import React from 'react';
import "./cardInfo.scss";
import PropTypes from "prop-types";

const CardInfo = (props) => {
    const { title, description} = props;

    return (
        <div className="cardInfo">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
} 

CardInfo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default CardInfo;