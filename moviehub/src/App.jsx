import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import All_movie from "./pages/All_movie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='mt-28'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmovie" element={<All_movie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;