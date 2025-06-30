import "./Hero.css";
import Button from "@components/common/Button/Button";
import AnimatedButton from "@components/home/AnimatedButton/AnimatedButton";
import { DemoCTA, HeroImage } from "@assets";

function Hero() {
  return (
    <section id="hero-section">
      <div className="wrapper pr-0">
        <div className="row-container">
          <div className="left">
            <AnimatedButton />
            <h2>to grow your ministry</h2>
            <p>
              MyCheerly is an all in one, church management software designed to
              streamline and simplify giving, administrative and operations
              tasks for churches.
            </p>
            <Button />
            <div className="demo-cta">
              <img src={DemoCTA} alt="" className="demo-cta" />
            </div>
          </div>
          <div className="right">
            <img src={HeroImage} alt="" className="hero-bg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
