import "./Hero.css";
import { heroPhone } from "@assets";
import AppStore from "@components/common/AppStore/AppStore";

function Hero() {
  return (
    <>
      <section id="member-hero">
        <div className="wrapper">
          <div className="row-container">
            <div className="left">
              <h2>Giving Made Easy, Staying Connected Made Simple</h2>
              <p>
                Your faith journey doesn’t stop after Sunday service. With
                MyCheerly, you can give effortlessly, stay engaged with your
                church, and strengthen your spiritual life—all in one app.
              </p>
              <AppStore />
            </div>
            <div className="right">
              <img src={heroPhone} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
