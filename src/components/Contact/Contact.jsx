import PropTypes from 'prop-types';
import { useState } from 'react';

const Contact = ({ isOpen, onClose }) => {
  const [isFormValid, setIsFormValid] = useState(false); // État pour suivre la validité du formulaire
  const handleInputChange = (e) => {
    // Vérifiez la validité du formulaire à chaque changement d'entrée
    const form = e.target.form;
    setIsFormValid(form.checkValidity());
  };
  let buttonStyle = {}; // Créez un objet pour stocker les styles du bouton

  if (!isFormValid) {
    buttonStyle = { borderColor: 'red'}; // Appliquez le style si le formulaire n'est pas valide
  }
  if (!isOpen) return null;
  return (
    <div className="modal-contact">
      <div className="__contact">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Contactez-Michel</h2>
        <form id="contact">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" onChange={handleInputChange} required/>
          <label htmlFor="lastName">Prénom</label>
          <input type="text" id="lastName" name="lastName" onChange={handleInputChange} required/>      
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleInputChange} required/>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" maxLength={250} onChange={handleInputChange} required placeholder="Max 250 caractères"/>
          <button style={buttonStyle}>Envoyer</button>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Contact;
