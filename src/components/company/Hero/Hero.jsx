import "./Hero.css";
import { cathedral } from "@assets";
import Button from "@components/common/Button/Button";

function Hero() {
  return (
    <section id="company-hero-section" className="pb-0">
      <div className="wrapper">
        <div className="column-container">
          <div className="top">
            <h4>About Us</h4>
            <h2>Empowering Churches, Strengthening Faith Communities</h2>
            <p>
              At MyCheerly, we believe that technology should make it easier for
              churches to connect, engage, and grow—not more complicated. We are
              on a mission to help churches thrive in the digital era by
              providing a seamless platform for giving, communication, and
              member engagement.
            </p>
            <div className="cta">
              <Button label={"Create free account"} />
            </div>
          </div>
          <div className="bottom">
            <img src={cathedral} alt="" className="cathedral" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
