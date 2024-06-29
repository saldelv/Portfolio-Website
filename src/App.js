import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import Sphere from './components/Sphere';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div style={{display: "flex", justifyContent: "center"}}>
          <Sphere />
        </div>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/menu' exact element={<Menu/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
