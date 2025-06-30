import "./Grow.css";
import Button from "@components/common/Button/Button";
import { growEngage } from "@assets";

function Grow() {
  return (
    <section id="grow-section">
      <div className="wrapper">
        <div className="content-container">
          <div className="left">
            <h2>
              Grow <br /> Engage <br /> Connect
            </h2>
            <p>
              One platform to help you reach more people and grow your
              ministry—church management, mobile and online giving, feedz,
              streaming links and so much more!
            </p>
            <div>
              <Button />
            </div>
          </div>
          <div className="right">
            <img src={growEngage} alt="" className="image-bg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grow;
