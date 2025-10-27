import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Navbar() {
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

  // ✅ Typage explicite pour l’événement onSubmit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔹 Ferme le modal principal et ouvre le message de succès
    setShowModal(false);
    setShowSuccess(true);

    // 🔹 Cache le message après 2 secondes
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-links left">
          <Link to="/restaurant">RESTAURANT</Link>
          <Link to="/menu">MENU</Link>
        </div>

        <h1 className="logo">
          <Link to="/" className="logo-link">
            ITALY
          </Link>
        </h1>

        <div className="nav-links right">
          <button className="book-btn" onClick={() => setShowModal(true)}>
            RÉSERVER
          </button>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>

      {/* ---------- MODAL DE RÉSERVATION ---------- */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // évite la fermeture si on clique dedans
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
                value={formData.heure}
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
    </>
  );
}

export default Navbar;
