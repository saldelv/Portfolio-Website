import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

function App() {

  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "MUI",
    "Express",
    "MongoDB",
    "SQL",
    "React",
    "Vue",
    "Node.js",
    "Babel",
    "StoryBook",
    "ES6",
    "Jest",
    "Webpack",
    "Git",
    "GitHub",
    "EJS",
    "RESTful API"
  ];
  const options = {
    radius: 200,
    maxSpeed: 1.5
  };

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div style={{display: "flex", justifyContent: "center"}}>
        </div>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/projects' exact element={<Projects/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
