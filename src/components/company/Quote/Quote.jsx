import "./Quote.css";
import { quoteFg } from "@assets";

function Quote() {
  return (
    <section id="quote-section">
      <div className="wrapper">
        <div className="row-container">
          <div className="left">
            <img src={quoteFg} alt="" />
          </div>
          <p className="right">
            We understand the challenges churches face—managing donations,
            keeping members engaged, and organizing events efficiently. That's
            why we built MyCheerly: a simple, powerful, and secure platform that
            helps churches and members stay connected like never before.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quote;
