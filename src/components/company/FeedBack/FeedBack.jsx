import "./FeedBack.css";
import Button from "@components/common/Button/Button";
import { feedback } from "@assets";

function FeedBack() {
  return (
    <section id="feedback-section">
      <div className="wrapper">
        <div className="row-container">
          <div className="left">
            <h2>Share your feedback with us</h2>
            <p>
              At MyCheerly, your voice matters! We are committed to continuously
              improving our platform to better serve churches and members.
              Whether you have suggestions, feature requests, or concerns, we'd
              love to hear from you.
            </p>
            <div>
              <Button label={"Submit a feedback"} />
            </div>
          </div>
          <div className="right">
            <img src={feedback} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedBack;
