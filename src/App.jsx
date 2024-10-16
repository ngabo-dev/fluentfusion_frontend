
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
          <Route path="*" element={'404 - Page not found! 👹'} />
        </Routes>
        <Footer />
      </>
   
  );
}

export default App;
