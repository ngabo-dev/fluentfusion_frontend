import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Lessons from "./pages/Lessons";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import VideoPage from "./pages/VideoPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videopage" element={<VideoPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={'404 - Page not found! 👹'} />
        </Routes>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
