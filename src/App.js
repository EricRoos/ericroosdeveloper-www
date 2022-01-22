import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Aside from './Aside';
import AboutMe from './AboutMe';

function App() {
  return (
    <>
      <div>
        <div id='container' className='container bg-white md:rounded-lg drop-shadow overflow-hidden flex'>
          <Aside className='hidden md:block md:w-2/5 lg:w-1/3'/>
          <Routes>
            <Route path='/' element={<AboutMe />} /> 
            <Route path='/about' element={<AboutMe />} /> 
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
