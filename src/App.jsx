// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import './index.css'; // Import your Tailwind CSS

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
        <Navbar />
        <div className="max-w-full ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
