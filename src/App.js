import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Services from './components/pages/Services'
import Gallery from './components/pages/Gallery'
import About from './components/pages/About'
import ContactUs from './components/pages/ContactUs'
import Interior from './components/pages/Interior'
import Exterior from './components/pages/Exterior'
import DoorTrim from './components/pages/DoorTrim'
import DecksFences from './components/pages/DecksFences'
import Home from './components/pages/Home'
import SimpleSlider from "./components/SimpleSlider";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/services'  element={<Services />} />
          <Route path='/gallery'  element={<Gallery/>} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact-us'  element={<ContactUs />} />
          <Route path='/interior'  element={<Interior />} />
          <Route path='/exterior'  element={<Exterior/>} />
          <Route path='/door-trim-painting'  element={<DoorTrim />} />
          <Route path='/decks-fences'  element={<DecksFences/>} />
        </Routes>
      
      <SimpleSlider />
      <Footer />
      </Router>
    
      {/* <Contact /> */}
    </div>
  );
}

export default App;
