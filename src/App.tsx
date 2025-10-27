import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Restaurant from "./components/restaurant/Restaurant";

function App() {
  return (
    <Router>
      <div className="page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
