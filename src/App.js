import './App.css';
import { Routes, Route } from "react-router-dom";
import Aside from './Aside';
import AboutMe from './AboutMe';

function App() {
  return (
    <div id='container' className='container bg-white md:rounded-lg drop-shadow overflow-hidden flex'>
      <Aside className='hidden md:flex md:w-1/4'/>
      <div className='w-full md:w-3/4 lg:w-3/4'>
        <Routes>
          <Route path='/' element={<AboutMe />} /> 
          <Route path='/about' element={<AboutMe />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
