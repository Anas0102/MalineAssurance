import React from 'react';
import '../../css/LandingPage.css'; // Assurez-vous d'avoir un fichier CSS pour styliser votre page
import présentationentreprise from '../../images/présentationentreprise.jpg'
import expertise from '../../images/expertise.jpg'
import service from '../../images/service.jpg'
import img4 from '../../images/img4.jpg'
import Footer from './Footer';
import * as AiIcons from 'react-icons/ai'
const Landing = () => {
  return (
    <><div className="landing-page">
      <div className="section">
        <div className="content">
        
          
          <h2><b>1.Présentation générale d'entreprise:</b> </h2>
          <p>Bienvenue chez Maline Assurance, votre partenaire en matière d'assurances. En tant que courtier en assurance de confiance, nous mettons notre expertise à des services pour  aider à 
            naviguer dans le monde complexe de l'assurance. Notre objectif est d'offrir des solutions
             personnalisées qui répondent à vos besoins uniques tout en vous procurant une tranquillité d'esprit totale.</p>
        </div>
        <div className="image">
          <img src={expertise} alt="Image à gauche 1" />
        </div>
      </div>
      
      <div className="section">
        <div className="image">
          <img src={présentationentreprise} alt="Image à droite 1" />
        </div>
        <div className="content">
          <h2><b>2.Expertise approfondie:</b></h2>
          <p> Fort de notre expérience dans le domaine de l'assurance, 
            nous offrons une perspective experte pour la gestion des polices d'assurance. 
           Notre interface simplifiée vous 
           permet de gérer chaque aspect des couvertures d'assurance,
            du suivi des primes au traitement des réclamations.</p>
        </div>
      </div>
      
      <div className="section">
        <div className="content">
          <h2><b>3.Service clientèle efficace</b> </h2>
          <p>La satisfaction de vos clients est notre priorité absolue.
             Notre système de support intégré vous permet de gérer 
             rapidement les requêtes et de fournir un service clientèle exceptionnel.
             Restez en contact avec vos clients et répondez à leurs besoins rapidement et efficacement.</p>
        </div>
        <div className="image">
          <img src={service} alt="Image à gauche 1" />
        </div>
      </div>
      
      <div className="section">
        <div className="image">
          <img src={img4} alt="Image à droite 1" />
        </div>
        <div className="content">
          <h2><b>4.Commencez dès aujourd'hui </b></h2>
          <p> N'attendez pas pour profiter des avantages de notre plateforme d'administration.
             Commencez dès aujourd'hui à simplifier la gestion des polices d'assurance, 
             à fournir un service clientèle exceptionnel et à renforcer l'efficacité de votre entreprise.
             Faites le premier pas vers une gestion d'assurance optimisée avec [Maline Assurance].</p>
        </div>
        <a href='#'><AiIcons.AiFillCaretUp className='iconup' /></a>
      </div>
      
      
      
    </div>
    <Footer/></>
  );
}

export default Landing;
