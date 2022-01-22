import './App.css';
import Aside from './Aside';
import AboutMe from './AboutMe';

function App() {
  return (
    <div>
      <div id='container' className='container bg-white rounded-lg drop-shadow overflow-hidden flex'>
        <Aside className='w-1/5'/>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
