import { useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecte mobile par userAgent
    const checkMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const menuData = [
    {
      title: "ANTIPASTI",
      items: [
        { it: "Bruschetta al pomodoro", fr: "Bruschetta à la tomate et au basilic", price: "9,90 €" },
        { it: "Carpaccio di manzo", fr: "Carpaccio de bœuf, roquette et parmesan affiné", price: "14,90 €" },
        { it: "Burrata cremosa", fr: "Burrata crémeuse, tomates confites et pesto verde", price: "13,90 €" },
        { it: "Calamari fritti", fr: "Calamars frits, sauce citronnée maison", price: "15,50 €" },
      ],
    },
    {
      title: "PIATTI PRINCIPALI",
      items: [
        { it: "Spaghetti alla bolognese", fr: "Spaghetti à la bolognaise", price: "17,90 €", model: "spaghetti.usdz" },
        { it: "Pizza Margherita", fr: "Sauce tomate, Mozzarella de Bufala, feuilles de basilic, huile d'olive", price: "22,90 €", model: "Pizza.usdz" },
        { it: "Filetto di manzo alla griglia", fr: "Filet de bœuf grillé, sauce chianti", price: "29,90 €" },
        { it: "Branzino al forno", fr: "Bar rôti au citron sicilien et légumes grillés", price: "26,50 €" },
      ],
    },
    {
      title: "CONTORNI",
      items: [
        { it: "Purè di patate all’olio d’oliva", fr: "Purée de pommes de terre à l’huile d’olive", price: "4,50 €" },
        { it: "Verdure grigliate", fr: "Légumes grillés à l’italienne", price: "6,00 €" },
        { it: "Polenta cremosa al parmigiano", fr: "Polenta crémeuse au parmesan", price: "6,50 €" },
        { it: "Pasta al burro e salvia", fr: "Pâtes fraîches au beurre et à la sauce", price: "7,00 €" },
      ],
    },
    {
      title: "DOLCI",
      items: [
        { it: "Tiramisù classico della casa", fr: "Tiramisù traditionnel maison", price: "8,90 €" },
        { it: "Panna cotta alla vaniglia", fr: "Panna cotta à la vanille et coulis de fruits rouges", price: "9,50 €" },
        { it: "Cannoli siciliani", fr: "Cannoli à la ricotta et éclats de pistache", price: "10,50 €" },
        { it: "Fondente al cioccolato", fr: "Fondant au chocolat noir et glace vanille", price: "9,90 €" },
      ],
    },
    {
      title: "BEVANDE",
      items: [
        { it: "Acqua frizzante San Pellegrino", fr: "Eau pétillante 50cl", price: "3,50 €" },
        { it: "Spritz Aperol", fr: "Prosecco italien et apéritif à l’orange amère", price: "8,90 €" },
        { it: "Limonata siciliana", fr: "Citronnade maison de Sicile", price: "5,90 €" },
        { it: "Caffè espresso", fr: "Café expresso italien", price: "2,90 €" },
      ],
    },
  ];

  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="menu-container">
      <div className="menu-content">
        {isMobile && isIOS() && (
          <div className="ar-page-label">
            <span>Voir sur la table</span>
            <img src="/ar-icon.png" alt="AR" />
          </div>

        )}
        {menuData.map((section, index) => (
          <div key={index} className="menu-section">
            <h2 className="menu-title">{section.title}</h2>
            <div className="menu-items">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="menu-item"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <span className="item-name">
                    {item.it} <em>– {item.fr}</em>
                  </span>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span className="item-price">{item.price}</span>

                    {isMobile && item.model && isIOS() && (
                      <a
                        rel="ar"
                        href={`/models/${item.model}`}
                        style={{
                          marginLeft: "10px",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                        title="Voir en AR"
                      >
                        <img
                          src="/ar-icon.png"
                          alt="AR"
                          style={{ width: "24px", height: "24px" }}
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;