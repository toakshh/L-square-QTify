import './App.css';
import Body from './components/pages/body/Body';
import Album from './components/pages/body/album/Album';
import Navbar from './components/pages/header/Navbar';
import NotFound from './components/pages/notFound/NotFound';
import { DataContextProvider } from './context/DataContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createBrowserRouter,RouterProvider } from 'react-router-dom' ;

function App() {
  // const body= createBrowserRouter([
  //   {
  //     path:"/",
  //     element: <Body />,
  //   },
  // ])

  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/album/:slug" element={<Album />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;