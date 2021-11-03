import logo from './logo.svg';
import './App.css';
import CardInfo from './components/CardInfo/cardInfo';
import Navbar from './components/Navbar/navbar';
import TextComponent from "./components/TextComponent/TextComponent";
import PlanetComponent from './components/PlanetComponent/PlanetComponent';

function App() {
  const planetas = ["Mercurio", "Venus", "Tierra"]

  return (
    <div className="App">
      <Navbar title="Planets" elements={planetas}/>
      <PlanetComponent/>
      {/* <TextComponent 
        planet="mars"   
        description="Sarasa de marte sarasa de marte sarasa de marte sarasa de marte sarasa de marte sarasa de martesarasa de marte sarasa de marte" 
        source="https://en.wikipedia.org/wiki/Mars"
      /> */}
      <CardInfo title="hola" description="como va"/>
    </div>
  );
}

export default App;
