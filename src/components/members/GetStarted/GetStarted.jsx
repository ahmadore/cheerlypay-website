import "./GetStarted.css";
import { getStarted } from "@assets";

function GetStarted() {
  return (
    <section id="get-started-section">
      <div className="wrapper">
        <div className="row-container">
          <div className="left width-half column-container">
            <h3>How to Get Started</h3>
            <ul className="steps">
              <li>Download the MyCheerly App (Available on iOS & Android)</li>
              <li>Sign Up & Choose Your Church</li>
              <li>Start Giving, Engaging, and Growing!</li>
            </ul>
          </div>
          <div className="right width-half">
            <img src={getStarted} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
