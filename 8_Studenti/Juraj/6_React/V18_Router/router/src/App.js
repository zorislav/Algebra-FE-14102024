import './App.css';
import Index from './components/Index';
import { Routes, Route } from "react-router-dom"
import Komponenta1 from './components/komponenta1';
import Komponenta2 from './components/komponenta2';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/"></Link>Home</li>
          <li><Link to="/k1"></Link>Komponenta1</li>
          <li><Link to="/k2"></Link>Komponenta2</li>
        </ul>


      </nav>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/k1" element={<Komponenta1/>} />
        <Route path="/k2" element={<Komponenta2/>} />
        </Routes>
    
    </div>
  );
}

export default App;
