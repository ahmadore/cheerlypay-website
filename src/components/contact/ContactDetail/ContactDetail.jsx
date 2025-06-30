import "./ContactDetail.css";
import { updateIcon, giveQuickIcon } from "@assets";
import ContactCard from "@components/contact/ContactCard/ContactCard";

const contacts = [
  {
    contactType: "Email Us",
    icon: giveQuickIcon,
    contact: "hello@cheerlypay.com",
  },
  {
    contactType: "Call Us",
    icon: updateIcon,
    contact: "+234-9033624842",
  },
];

function ContactDetail() {
  return (
    <section id="contact-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="section-header">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have questions, need
              support, or want to explore partnership opportunities, our team is
              here to help.
            </p>
            <div className="contact-cards row-container">
              {contacts.map((contact, index) => (
                <ContactCard
                  key={index}
                  icon={contact.icon}
                  contactType={contact.contactType}
                  contact={contact.contact}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetail;
