import "./ContactCard.css";

function ContactCard({ icon, contactType, contact }) {
  return (
    <div className="contact-card">
      <img src={icon} alt="" />
      <h3>{contactType}</h3>
      <h4>{contact}</h4>
    </div>
  );
}

export default ContactCard;
