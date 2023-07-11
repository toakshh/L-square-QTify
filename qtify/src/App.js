import './App.css';
import Hero from './components/pages/body/hero/Hero';
import Navbar from './components/pages/header/Navbar';
import Grid  from './components/pages/body/grid/Grid';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Grid />
    </div>
  );
}

export default App;
