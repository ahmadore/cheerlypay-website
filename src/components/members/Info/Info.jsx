import "./Info.css";
import InfoCard from "@components/members/InfoCard/InfoCard";
import {
  giveQuickIcon,
  spiritualIcon,
  updateIcon,
  communityIcon,
} from "@assets";

function Info() {
  const infos = [
    {
      icon: giveQuickIcon,
      title: "Give securely in <br> seconds",
      text: "No need for cash, bank transfers, or long forms",
    },
    {
      icon: updateIcon,
      title: "Stay updated on church <br> events",
      text: "Never miss an important service or program",
    },
    {
      icon: communityIcon,
      title: "Engage with your <br>church community",
      text: "Get announcements, and streaming links to programs",
    },
    {
      icon: spiritualIcon,
      title: "Grow spiritually every <br> day",
      text: "Receive a Bible verse daily to keep you inspired.",
    },
  ];
  return (
    <section id="member-info">
      <div className="wrapper">
        <div className="column-container">
          <div className="info-header">
            <h2>Why Use Mycheerly?</h2>
            <p>
              We understand that life gets busy—but giving, staying connected to
              your church, and growing spiritually should be effortless.{" "}
            </p>
          </div>
          <h3>MyCheerly helps you:</h3>
          <div className="member-info-cards">
            {infos.map((info, index) => (
              <InfoCard
                key={index}
                icon={info.icon}
                title={info.title}
                text={info.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
