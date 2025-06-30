import "./NavModal.css";
import AppStore from "@components/common/AppStore/AppStore";
import Button from "@components/common/Button/Button";
import { aboutIcon, termsIcon, faqIcon } from "@assets";

function NavModal() {
  return (
    <>
      <div className="modal">
        <div className="modal-left">
          <div className="currrent-menu">
            <h3>Company</h3>
            <p>
              Learn more about what we've built and how it can be of help to you
            </p>
            <Button label={"Create a free account"} />
          </div>
          <ul className="pages">
            <li>
              <a href="/company/about-us">
                <div>
                  <img src={aboutIcon} alt="" />
                </div>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="/company/privacy">
                <div>
                  <img src={termsIcon} alt="" />
                </div>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="/company/terms">
                <div>
                  <img src={faqIcon} alt="" />
                </div>
                <span>Terms and Conditions</span>
              </a>
            </li>

            <li>
              <a href="/company/faq">
                <div>
                  <img src={faqIcon} alt="" />
                </div>
                <span>FAQ</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="modal-right">
          <AppStore isDark={false} />
        </div>
      </div>
    </>
  );
}

export default NavModal;
