import logo from './logo.svg';
import './App.css';
import CardInfo from './components/CardInfo/cardInfo';
import Navbar from './components/Navbar/navbar';
import TextComponent from "./components/TextComponent/TextComponent";
import PlanetComponent from './components/PlanetComponent/PlanetComponent';

function App() {
  const planetas = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

  return (
    <div className="App">
      <Navbar title="The Planets" elements={planetas}/>
      <CardInfo title="hola" description="como va"/>
    </div>
  );
}

export default App;
