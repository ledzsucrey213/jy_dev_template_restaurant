import { FaInstagram } from "react-icons/fa";
import "../../App.css";
import "./Restaurant.css";
import plat1 from "../../assets/images/plat1.jpg";
import plat2 from "../../assets/images/plat2.jpg";
import plat3 from "../../assets/images/plat3.jpg";
import plat4 from "../../assets/images/plat4.jpg";
import plat5 from "../../assets/images/plat5.jpg";
import plat6 from "../../assets/images/plat6.jpg";
import plat7 from "../../assets/images/plat7.jpg";
import plat8 from "../../assets/images/plat8.jpg";
import plat9 from "../../assets/images/plat9.jpg";
import { Link } from "react-router-dom";

function Restaurant() {
  return (
    <div className="restaurant-page">
      <header className="contact-header">
        <h1>Une cuisine d'exception</h1>
      </header>
      {/* ---------- PREMIÈRE GALERIE ---------- */}
      <section className="restaurant-gallery">
        <div className="image-box"><img src={plat1} alt="plat 1" /></div>
        <div className="image-box"><img src={plat2} alt="plat 2" /></div>
        <div className="image-box"><img src={plat3} alt="plat 3" /></div>
      </section>

      {/* ---------- TEXTE 1 ---------- */}
      <section className="restaurant-text">
        <p>
          Malgré la recherche d'un goût unique, l'esthétique occupe une place
          prépondérante. Chaque assiette est présentée comme une œuvre d'art
          visuelle, une innovation.
        </p>
      </section>

      {/* ---------- DEUXIÈME GALERIE ---------- */}
      <section className="restaurant-gallery">
        <div className="image-box"><img src={plat4} alt="plat 4" /></div>
        <div className="image-box"><img src={plat5} alt="plat 5" /></div>
        <div className="image-box"><img src={plat6} alt="plat 6" /></div>
      </section>

      {/* ---------- TEXTE 2 ---------- */}
      <section className="restaurant-text">
        <p>
          Les combinaisons audacieuses de couleurs et de formes évoquent
          l'émotion et l'émerveillement à chaque service.
        </p>
      </section>

      {/* ---------- TROISIÈME GALERIE ---------- */}
      <section className="restaurant-gallery">
        <div className="image-box"><img src={plat7} alt="plat 7" /></div>
        <div className="image-box"><img src={plat8} alt="plat 8" /></div>
        <div className="image-box"><img src={plat9} alt="plat 9" /></div>
      </section>

      {/* ---------- TEXTE 3 ---------- */}
      <section className="restaurant-text">
        <p>
          Notre cuisine fusion, fruit d'une passion pour la créativité culinaire,
          marie harmonieusement les saveurs et les techniques de diverses
          traditions gastronomiques.
        </p>
        <p>
          Une symphonie de goûts, une danse de textures et une explosion de
          couleurs qui transcendent les frontières culinaires.
        </p>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="restaurant-footer">
        <div className="footer-content">
          <div className="footer-left">
            <FaInstagram className="footer-icon" />
            <p>SUIVEZ-NOUS SUR INSTAGRAM</p>
          </div>

          <div className="footer-center">
            <h2>ITALY RESTAURANT</h2>
            <p>216 Rue Ali Ammar</p>
            <p>34000 Montpellier</p>
            <p>contact@italy-example.com</p>
            <p>+33 4 XX XX XX XX</p>
          </div>

          <div className="footer-right">
            <ul>
              <Link to="/"><li>ACCUEIL</li></Link>
              <Link to="/restaurant"><li>LE RESTAURANT</li></Link>
              <Link to="/menu"><li>LA CARTE</li></Link>
              <Link to="/"><li>RÉSERVER UNE TABLE</li></Link>
              <Link to="/contact"><li>CONTACT</li></Link>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Italy Restaurant Template — Réalisation{" "}
            <span className="highlight">JYF Solutions</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Restaurant;
