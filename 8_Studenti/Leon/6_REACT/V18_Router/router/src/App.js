import "./App.css";
import Index from "./components/Index";
import Komponenta1 from "./components/Komponenta1";
import Komponenta2 from "./components/Komponenta2";
import NotFound from "./components/NotFound";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/k1">Komponenta1</Link>
          </li>
          <li>
            <Link to="/k2">Komponenta2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/k1" element={<Komponenta1 />} />
        <Route path="/k2" element={<Komponenta2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
