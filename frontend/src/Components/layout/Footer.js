import React from 'react';
import '../../css/Footer.css'; // Assurez-vous d'avoir un fichier CSS pour styliser votre footer
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <Link to={"/"}><img src={logo} className='logofooter' alt='Maline Assurance' /> </Link>

      <div className="footer-content">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <p>Contactez-nous : contact@malineassurance.com</p>
      </div>
      <h5><p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés. 
        <i className="fas fa-rocket"></i></p></h5>
    </footer>
  );
}

export default Footer;
