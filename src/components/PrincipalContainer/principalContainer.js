import React , {useState, useEffect} from 'react';
import './principalContainer.scss';
import CardInfo from '../CardInfo/cardInfo';
import Navbar from '../Navbar/navbar';
import TextComponent from '../TextComponent/TextComponent';
import ButtonMolecule from '../ButtonArray/Button-molecule';
import { planets } from '../../resourses/data';
import mercuryS from '../../assets/images/surface/planet-mercury.svg';


const PrincipalContainer = (props) => {
    const [actualPlanet, setActualPlanet] = useState("mercury");
    const [name, setName] = useState();
    const [images, setImages] = useState(`${mercuryS}`);
    const [description, setDescription] = useState();
    const [source, setSource] = useState();
    const [seleccionado, setSelected] = useState(0);
    const [rotation, setRotation] = useState();
    const [revolution, setRevolution] = useState();
    const [radius, setRadius] = useState();
    const [temperature, setTemperature] = useState();

    useEffect(() => {
        select(planets[actualPlanet].name, planets[actualPlanet].description, planets[actualPlanet].source, planets[actualPlanet].images, planets[actualPlanet].rotation, planets[actualPlanet].revolution, planets[actualPlanet].radius, planets[actualPlanet].temperature)
    },[actualPlanet]);

    
    

    let solarSystem = [];
    solarSystem = [planets.mercury.name, planets.venus.name, planets.earth.name,
    planets.mars.name, planets.jupiter.name, planets.saturn.name, planets.uranus.name, planets.neptune.name] 

    const onChangePlanet = (planetName) => {
        setActualPlanet(planetName);
    }

    const select = (name, description, source, images, rotation, revolution, radius, temperature) => {
        setName(name);
        setDescription(description);
        setSource(source);
        setImages(images);
        setRotation(rotation);
        setRevolution(revolution);
        setRadius(radius);
        setTemperature(temperature);
    }

    const handleOnClick = (number) => {
        setSelected(parseInt(number)-1);
    }

    return (

        <div className="principal">
            <Navbar title="the planets" elements={solarSystem} onClick={onChangePlanet}/>
            <div className="planet-text">
                <div className="buttonmobile">
                    <ButtonMolecule className="btn-molecule" onClick={handleOnClick} classPlanet={actualPlanet}/>
                </div>
                
                <div className="image-container">
                    <img src={images && images[seleccionado]} alt="planet"></img>
                </div>
                <div className="text-container">
                    <TextComponent className="text-component"
                         planet={name} 
                         description={description && description[seleccionado]} 
                         source={source && source[seleccionado]}
                    />
                    <ButtonMolecule className="btn-molecule" onClick={handleOnClick} classPlanet={actualPlanet}/>
                </div>
            </div>
            <div>
                <CardInfo title="rotation time" description={rotation}/>
                <CardInfo title="revolution time" description={revolution}/>
                <CardInfo title="radius" description={radius} />
                <CardInfo title="raverage temp." description={temperature}/>
            </div>
        </div>

    )
} 

export default PrincipalContainer;