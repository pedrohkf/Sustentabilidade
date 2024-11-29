import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sustentabilidade</h3>
          <p>Comprometidos com a preservação do meio ambiente.</p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: phkfaria@gmail.com</p>
          <p>Telefone: +55 (12) 98118-4584</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.instagram.com/pedro.henrique.official/" target="_blank" rel="noopener noreferrer"> Instagram</a> 
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sustentável. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
