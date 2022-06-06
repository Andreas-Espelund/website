import './App.css';
import Navigation from './components/Navigation';

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Music from './pages/Music'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/music" element={<Music/>}/>
      </Routes>

      <footer className="footer">
        <Socials/>
        <p>Jackbow &copy; 2022</p>
      </footer>
      </Router>
    </div>
  );
}

export default App;
