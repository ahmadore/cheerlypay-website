import "./Partners.css";
import { fire, daystar, partner, flutterwave } from "@assets";

function Partners() {
  const partners = [fire, flutterwave, daystar, partner];
  return (
    <>
      <section id="partners-section">
        <div className="wrapper">
          <div className="column-container">
            <div className="partner-text">
              <h2>Our Partners</h2>
              <p>
                At MyCheerly, we believe in the power of partnerships to
                strengthen faith communities and enhance digital giving. We
                collaborate with churches, financial institutions, and
                technology providers to make giving and engagement seamless for
                everyone.
              </p>
            </div>
            <div className="partner-images">
              {partners.map((partner) => {
                return <img src={partner} alt="" />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
