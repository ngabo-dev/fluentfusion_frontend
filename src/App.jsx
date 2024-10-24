
import 'flowbite';
import 'flowbite-react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Fellowships from "./pages/Fellowships";
import About from "./pages/About";
import Blogs from './pages/Blogs';
import UrbanizationPage from './pages/UrbanizationPage';
import Environment from './pages/Environment';
import Communities from './pages/Communities';
import Landuse from './pages/Landuse';
import Detailed from './pages/Detailed';
import Swot from './pages/Swot';
import Transportation from './pages/Transportation';
import EnvironmentalPlanning from './pages/Environimentalplanning';
import Disasters from './pages/Disasters';
import Capacitybuilding from './components/Capacitybuilding';
import Smartcity from './pages/Smartcity';
import Gis from './pages/Gis';
import EventPlanning from './pages/Eventplanning';
import Partners from './components/Partners';
import EventShowcase from './components/EventShowcase';


function App() {
  return (

      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fellowship" element={<Fellowships />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/urbanization" element={<UrbanizationPage />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/landuse" element={<Landuse />} />
          <Route path="/detailed" element={<Detailed />} />
          <Route path="/swot" element={<Swot />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/environmentalPlanning" element={<EnvironmentalPlanning />} />
          <Route path="/disasters" element={<Disasters/>} />
          <Route path="/capacitybuilding" element={<Capacitybuilding/>} />
          <Route path="/smartcity" element={<Smartcity/>} />
          <Route path="/gis" element={<Gis/>} />
          <Route path="/partners" element={<Partners/>} />
          <Route path="/eventPlanning" element={<EventPlanning/>} />
          <Route path="/eventshowcase" element={<EventShowcase/>} />

          <Route path="*" element={'404 - Page not found! 👹'} />
        </Routes>
        <Footer />
      </>
   
  );
}

export default App;
