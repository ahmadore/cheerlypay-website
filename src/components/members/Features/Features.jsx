import "./Features.css";
import FeatureCard from "@components/members/FeatureCard/FeatureCard";
import AppStore from "@components/common/AppStore/AppStore";
import { giveNow, connected, bibleVerses, manageGiving } from "@assets";

function Features() {
  const featuresList = [
    {
      title: "Effortless & Secure Giving",
      bg: "rgba(214, 169, 121, 0.13)",
      subtitle:
        "Tithing and donations should be simple. With MyCheerly, you can:",
      image: giveNow,
      features: [
        {
          label: "Give in just a few taps",
          detail: "Use your card, bank transfer, USSD, or mobile money.",
        },
        {
          label: "Set Up Recurring Giving",
          detail: "Automate your tithes and offerings for consistency.",
        },
        {
          label: "Gift Wallet",
          detail: "Pre-fund your giving so you can donate anytime, anywhere.",
        },
        {
          label: "Track Your Donations",
          detail: "See your full giving history in one place.",
        },
      ],
    },
    {
      title: "Stay Connected with Your Church",
      bg: "rgba(255, 150, 163, 0.15)",
      subtitle:
        "Tithing and donations should be simple. With MyCheerly, you can:",
      image: connected,
      features: [
        {
          label: "Church Announcements",
          detail:
            "Receive real-time updates about services, programs, and special events.",
        },
        {
          label: "Event Reminders",
          detail: "Never miss a service, conference, or community outreach.",
        },
      ],
    },
    {
      title: "Daily Spiritual Growth",
      bg: "rgba(255, 217, 141, 0.18)",
      subtitle:
        "MyCheerly helps you stay inspired and connected to your faith daily:",
      image: bibleVerses,
      features: [
        {
          label: "Bible Verse of the Day",
          detail: "Receive uplifting scriptures every morning.",
        },
        {
          label: "Spiritual Reflections",
          detail: "Engage with devotionals and inspiring messages.",
        },
      ],
    },
    {
      title: "Manage Your Giving Easily",
      bg: "rgba(146, 113, 239, 0.1)",
      subtitle:
        "With MyCheerly, your financial generosity is organized and transparent:",
      image: manageGiving,
      features: [
        {
          label: "Instant Receipts",
          detail: "Get confirmation for every donation you make.",
        },
        {
          label: "Full Transaction History",
          detail: "See all your past giving in one place.",
        },
      ],
    },
  ];
  return (
    <section id="features-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="features-header">
            <h2>Key Features for Members</h2>
            <p>
              We understand that life gets busy—but giving, staying connected to
              your church, and growing spiritually should be effortless.{" "}
            </p>
            <AppStore />
          </div>
          <div className="feature-cards">
            {featuresList.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                subtitle={feature.subtitle}
                image={feature.image}
                bg={feature.bg}
                features={feature.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
