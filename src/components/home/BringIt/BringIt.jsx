import "./BringIt.css";
import Button from "@components/common/Button/Button";
import { BringItImage } from "@assets";

function BringIt() {
  return (
    <section id="bringit-section">
      <div className="wrapper nowrap-right">
        <div className="content-container">
          <div className="left">
            <h2>Bring it all together</h2>
            <ul>
              <li>
                Know, grow, and connect your people every day of the week and
                encourage ongoing engagement{" "}
              </li>
              <li>
                Fuel the mission of your church with mobile, web giving. A
                robust analytics, and a beautifully simple experience for your
                church.
              </li>
            </ul>
            <div>
              <Button />
            </div>
          </div>
          <div className="right">
            <img src={BringItImage} alt="" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BringIt;
