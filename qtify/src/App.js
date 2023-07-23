import './App.css';
import Body from './components/pages/body/Body';
import Navbar from './components/pages/header/Navbar';
// import Context from './context/Context';

function App() {
  return (
    <div className="App">
      {/* <Context.Provider> */}
      <Navbar />
      <Body />
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;
