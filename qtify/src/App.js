import './App.css';
import Hero from './components/body/Hero';
import Navbar from './components/header/Navbar';
import Card from './components/body/Card';
import card1 from "./components/assets/card1.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card img={card1} followCount="100" title="New Bollywood"/>
    </div>
  );
}

export default App;
