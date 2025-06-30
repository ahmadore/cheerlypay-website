import "./Info.css";
import InfoCard from "@components/home/InfoCard/InfoCard";
import { give, ChurchApp, ChurchAdmin, insights } from "@assets";

const infos = [
  {
    title: "Giving",
    body: "Simplify your donation process without losing the essential features for tracking, managing, and increasing contributions.",
    image: give,
    bgClass: "giving-bg",
    showAppstore: false,
  },
  {
    title: "Church App",
    body: "A powerful mobile app for churches that allows you to connect with your members, share upcoming programs and events, and includes a built-in Bible.",
    image: ChurchApp,
    bgClass: "church-app-bg",
    showAppstore: true,
  },
  {
    title: "Church Management",
    body: "Our all-in-one church management software (ChMS) scales and grows with your church. ",
    image: ChurchAdmin,
    bgClass: "church-management-bg",
    showAppstore: false,
  },
  {
    title: "Financial Insights",
    body: "Gain insights into your data to help you understand and grow your church. Leaders can monitor the health of their ministry by combining giving and engagement data into a single view.",
    image: insights,
    bgClass: "insights-bg",
    showAppstore: false,
  },
];

function Info() {
  return (
    <section id="info-section">
      <div className="wrapper">
        <div className="content-container">
          {infos.map((info, index) => (
            <InfoCard
              key={index}
              title={info.title}
              body={info.body}
              image={info.image}
              bgClass={info.bgClass}
              showAppstore={info.showAppstore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
