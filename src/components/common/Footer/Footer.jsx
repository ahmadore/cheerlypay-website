import "./Footer.css";
import {
  logoLight,
  facebookIcon,
  xIcon,
  instaIcon,
  phoneIcon,
  mailIcon,
  giveIcon,
} from "@assets";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="column-container">
          <div className="footer-container">
            <div className="about-links">
              <h4>About MyCheerly</h4>
              <p>
                MyCheerly is an all in one, church management software designed
                to streamline and simplify giving, administrative and operations
                tasks for churches.
              </p>
              <img src={logoLight} alt="" />
            </div>
            <div className="footer-links">
              <div className="product-links">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="/members" className="footer-link">
                      For Members
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      For Churches
                    </a>
                  </li>
                </ul>
              </div>
              <div className="company-links">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="/company/about-us" className="footer-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/company/privacy" className="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/company/terms" className="footer-link">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/company/contact-us" className="footer-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="socials-container">
            <div className="socials">
              <p>Follow us</p>
              <div className="social-icons">
                <img src={facebookIcon} alt="" />
                <img src={xIcon} alt="" />
                <img src={instaIcon} alt="" />
              </div>
            </div>
            <div className="contact">
              <p>
                <img src={mailIcon} alt="" /> hello@cheerly.com
              </p>
              <p>
                <img src={phoneIcon} alt="" /> +234-9033624842
              </p>
            </div>
          </div>
          <div className="copy-right">
            <p>© 2022 MyCheerly. All rights reserved.</p>
            <img src={giveIcon} alt="" className="footer-give" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
