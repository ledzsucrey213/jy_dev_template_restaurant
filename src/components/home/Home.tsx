import { useState, type ChangeEvent, type FormEvent } from "react";
import tableImage from "../../assets/images/table.webp";
import logo from "../../assets/images/chef_icon.png";
import { FaInstagram } from "react-icons/fa";
import "../../App.css";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    jour: "27/10/2025",
    heure: "19:00",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <>
      {/* ---------- SECTION HERO ---------- */}
      <section className="hero">
        <div className="overlay"></div>
        <img src={tableImage} alt="background" className="background" loading="eager" />

        <div className="hero-content">
          <div className="circle">
            <img src={logo} alt="logo" className="circle-logo" />
            <p className="circle-subtitle">Experience the taste of Italy</p>
            <h2 className="circle-title">Great Dining</h2>
            <h2 className="circle-title bold">Experience</h2>
            <button className="circle-btn">Authentic Experience →</button>
          </div>

          <div className="buttons">
            <Link to="/menu" className="btn">
              CARTE
            </Link>
            <button className="btn" onClick={() => setShowModal(true)}>
              RÉSERVATION
            </button>
          </div>

          <div className="social">
            <a href="#" className="instagram">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- MODAL DE RÉSERVATION ---------- */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Réservation</h2>
            <form onSubmit={handleSubmit} className="reservation-form">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="jour"
                value={formData.jour}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="heure"
                value={formData.heure || ""}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                RÉSERVER
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ---------- MODAL DE SUCCÈS ---------- */}
      {showSuccess && (
        <div className="success-modal">
          <div className="success-box">
            <div className="check-icon">✓</div>
            <p>Merci !</p>
          </div>
        </div>
      )}

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
    </>
  );
}

export default Home;
