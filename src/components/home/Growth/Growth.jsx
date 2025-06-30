import "./Growth.css";
import { giveIcon, mobileIcon, chatIcon } from "@assets";

function Growth() {
  return (
    <section id="growth-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="column-container growth-text">
            <h1>
              <span>Growth</span> that speaks for itself
            </h1>
            <p className="growth-description">
              Our platform provides your ministry with innovative tools that
              lead to more engagement and greater impact
            </p>
          </div>
          <div className="growth-stats">
            <div className="stat">
              <img src={giveIcon} alt="" className="stat-icon" />
              <h2 className="stat-figure">10%</h2>
              <p>More donations</p>
            </div>
            <div className="stat">
              <img src={chatIcon} alt="" className="stat-icon" />
              <h2 className="stat-figure">50%</h2>
              <p>More Engagements</p>
            </div>
            <div className="stat">
              <img src={mobileIcon} alt="" className="stat-icon" />
              <h2 className="stat-figure">3x</h2>
              <p>More app usage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Growth;
