import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';


function App() {
  return (
    <>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
        <div className='container'>
            < Navbar />
            < Hero />
            < About id='about' />
            < Services id='services' />
            < Skills id='skills' />
            < Portfolio id='portfolio' />
            < Contact />
        </div>
        </div>
        </>
  );
}

export default App;
