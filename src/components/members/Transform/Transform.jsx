import "./Transform.css";
import AppStore from "@components/common/AppStore/AppStore";
import { tranform } from "@assets";

function Transform() {
  return (
    <div className="wrapper">
      <section id="transform-section">
        <div className="row-container">
          <div className="left">
            <h2>Ready to transform your church experience?</h2>
            <p>
              Download the MyCheerly app <br /> today!
            </p>
            <AppStore isDark={true} />
          </div>
          <div className="right">
            <img src={tranform} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Transform;
