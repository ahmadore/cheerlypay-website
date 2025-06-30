import "./InfoCard.css";
import Appstore from "@components/common/AppStore/AppStore";

function InfoCard({ title, body, image, bgClass, showAppstore }) {
  return (
    <div className={`info-card ${bgClass}`}>
      <div className="left pb-0">
        <h2>{title}</h2>
        <p>{body}</p>
        {showAppstore && <Appstore />}
      </div>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default InfoCard;
