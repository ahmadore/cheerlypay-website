import "./Socials.css";
import { facebookIcon, xIcon, instaIcon } from "@assets";

function Socials() {
  return (
    <section className="socials-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="section-header">
            <h1>Stay Connected</h1>
            <p>We're here to serve you—reach out anytime! 🙌</p>
          </div>
          <div className="socials">
            <img src={facebookIcon} alt="" className="social-icon" />
            <img src={xIcon} alt="" className="social-icon" />
            <img src={instaIcon} alt="" className="social-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Socials;
