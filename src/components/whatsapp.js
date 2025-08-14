import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

const WhatsAppButton = () => {
  const phoneNumber = '923088798324'; // Your WhatsApp number
  const message = 'Hello! I have a question about your services.'; // Default message

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </div>
  );
};

export default WhatsAppButton;