import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Dictionary from "./pages/Dictionary"
import Lessons from "./pages/Lessons"
import Games from "./pages/Games"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="*" element={'404 - Page not found! 👹'} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
