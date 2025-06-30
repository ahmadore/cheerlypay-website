import "./InfoCard.css";

function InfoCard({ icon, title, text }) {
  return (
    <div className="member-info-card">
      <img src={icon} alt="" />
      {/* <h4>{title}</h4> */}
      <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
      <p>{text}</p>
    </div>
  );
}

export default InfoCard;
