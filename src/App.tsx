import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Restaurant from "./components/restaurant/Restaurant";

import { useEffect, useState } from "react";

/* ---------------- PRELOAD IMAGES ---------------- */

const preloadImages = (imagePaths: string[]) => {
  return Promise.all(
    imagePaths.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // évite blocage si erreur
        img.src = new URL(src, import.meta.url).href;
      });
    })
  );
};

export function usePreloadImages() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadImages([
      "./assets/images/chef_icon.png",
      "./assets/images/home_image.jpg",
      "./assets/images/icon_navbar.png",
      "./assets/images/plat1.jpg",
      "./assets/images/plat2.jpg",
      "./assets/images/plat3.jpg",
      "./assets/images/plat4.jpg",
      "./assets/images/plat5.jpg",
      "./assets/images/plat6.jpg",
      "./assets/images/plat7.jpg",
      "./assets/images/plat8.jpg",
      "./assets/images/plat9.jpg",
      "./assets/images/plat10.jpg",
      "./assets/images/table.jpg",
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  return loading;
}

/* ------------------- APP COMPONENT ------------------- */

function App() {
  const loading = usePreloadImages();

  if (loading) {
    return (
      <div className="loading-screen">
        Chargement...
      </div>
    );
  }

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
