import './App.css';
import { Routes, Route } from "react-router-dom";
import Aside from './Aside';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio'
import Blog from './Blog'
import FloatingMenu from './FloatingMenu';

function App() {
  return (
    <>
      <div id='container' className='container bg-white h-full md:rounded-lg md:drop-shadow overflow-hidden flex'>
        <Aside className='hidden md:flex md:w-1/4'/>
        <div className='w-full md:w-3/4 lg:w-3/4'>
          <Routes>
            <Route path='/' element={<AboutMe />} /> 
            <Route path='/about' element={<AboutMe />} /> 
            <Route path='/portfolio' element={<Portfolio />} /> 
            <Route path='/blog' element={<Blog />} /> 
          </Routes>
        </div>
      </div>
      <FloatingMenu />
    </>
  );
}

export default App;
