import "./Network.css";
import InviteForm from "@components/common/InviteForm/InviteForm";
// import { inviteUser } from "@assets";

function Network() {
  return (
    <section id="network-section">
      <div className="wrapper">
        <div className="row-container">
          <div className="left">
            <h2>Join Our Network</h2>
            <p>
              Interested in partnering with MyCheerly? Let’s work together to
              empower faith communities with technology.
            </p>
          </div>
          <div className="right">
            <InviteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Network;
