import { FaPhoneAlt, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import "../../App.css";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* ---------- HEADER ---------- */}
      <header className="contact-header">
        <h1>CONTACTEZ-NOUS</h1>
        <p>Nous sommes disponibles du lundi au dimanche de 11h à 23h.</p>
      </header>

      {/* ---------- INFO ADRESSE ---------- */}
      <section className="contact-info">
        <h3>Notre adresse</h3>
        <p>
         <span className="contact-highlight-black">216 Rue Ali Ammar</span>
          <br />
          34000 Montpellier<br />
        </p>
      </section>

      {/* ---------- MOYENS DE CONTACT ---------- */}
      <div className="contact-grid">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Par téléphone</h3>
          <p>
            Appelez-nous au : <br />
            <span className="contact-highlight">+33 4 XX XX XX XX</span>
            <br />
            (du lundi au dimanche de 11h à 23h)
          </p>
        </div>

        <div className="contact-card">
          <FaRegCommentDots className="contact-icon" />
          <h3>Par chat</h3>
          <p>
            Posez-nous vos questions directement sur le chat en bas à gauche de
            chaque page.
          </p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Par mail</h3>
          <p>
            Écrivez-nous à : <br />
            <span className="contact-highlight">contact@italy-example.com</span>
          </p>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="contact-footer">
        <p>© 2025 Italy Restaurant Template — Réalisation JY DEV — Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default Contact;
