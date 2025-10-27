import "./Menu.css";

const Menu = () => {
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
        { it: "Tagliatelle al tartufo", fr: "Tagliatelles à la crème de truffe noire", price: "24,90 €" },
        { it: "Risotto ai funghi porcini", fr: "Risotto aux cèpes et copeaux de parmesan", price: "22,90 €" },
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
        { it: "Pasta al burro e salvia", fr: "Pâtes fraîches au beurre et à la sauge", price: "7,00 €" },
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

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>RESTAURANT ITALY</h1>
        <p>Un voyage culinaire au cœur de l’Italie.</p>
      </header>

      <div className="menu-content">
        {menuData.map((section, index) => (
          <div key={index} className="menu-section">
            <h2 className="menu-title">{section.title}</h2>
            <div className="menu-items">
              {section.items.map((item, idx) => (
                <div key={idx} className="menu-item">
                  <span className="item-name">
                    {item.it} <em>– {item.fr}</em>
                  </span>
                  <span className="item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="menu-footer">
        <p>Prix taxes et service inclus — © 2025 Restaurant Italy - JY DEV</p>
      </footer>
    </div>
  );
};

export default Menu;
