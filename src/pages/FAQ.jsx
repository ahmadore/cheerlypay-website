import "@components/faq/FAQ.css";
import Accordion from "@components/faq/Accordion/Accordion";

const memberFaqs = [
  {
    title: "What is MyCheerly",
    children:
      "MyCheerly is a digital platform that enables seamless church giving, helps you stay connected with your local church, and provides faith-based resources.",
  },
  {
    title: "How do I give to my church using MyCheerly?",
    children:
      "Simply download the MyCheerly app, search for your church, and donate using your preferred payment method—card, bank transfer, or mobile money.",
  },
  {
    title: "Can I set up recurring donations?",
    children:
      "Yes! You can schedule automatic donations so you never miss giving your tithes and offerings.",
  },
  {
    title: "What if my church isn’t on MyCheerly?",
    children:
      "You can still give to churches through our general donation option or invite your church to join MyCheerly.",
  },
  {
    title: "Is my payment information secure?",
    children:
      "Absolutely. We use industry-standard encryption and security measures to protect your transactions.",
  },
  {
    title: "Can I track my donations?",
    children:
      "Yes! You can view all your contributions in the app and receive digital receipts for every donation.",
  },
];

const churchesFaqs = [
  {
    title: "How can my church join MyCheerly?",
    children:
      "Visit our website or app, sign up your church, and complete the onboarding process to start receiving digital donations and engaging members.",
  },
  {
    title: "How does MyCheerly help churches?",
    children:
      "We simplify giving, improve financial transparency, and provide tools for church management and member engagement.",
  },
  {
    title: "Are there fees for using MyCheerly?",
    children:
      "We charge a small platform fee for churches and a transaction fee on digital giving. Contact us for pricing details.",
  },
  {
    title: "How do we receive donations?",
    children:
      "Funds are securely processed and transferred to your church’s designated bank account.",
  },
  {
    title: "Can we send messages and updates to members?",
    children:
      "Yes! Churches can share announcements, events, and programs directly with members through the MyCheerly platform.",
  },
  {
    title: "Can I track my donations?",
    children:
      "Yes! You can view all your contributions in the app and receive digital receipts for every donation.",
  },
];

const generalFaqs = [
  {
    title: "Is MyCheerly available in my country?",
    children:
      "We are rolling out MyCheerly in multiple regions. Check our website for supported locations.",
  },
  {
    title: "How do I contact support?",
    children:
      "You can reach us via email at hello@cheerlypay.com or call us at +234-9033624842.",
  },
  {
    title: "How do I reset my password?",
    children:
      'Go to the login screen, click "Forgot Password," and follow the instructions to reset it. Still have questions? Contact us at [Insert Contact Details] and we’ll be happy to assist! 🚀',
  },
];

function FAQ() {
  return (
    <section id="faq-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="faq-header">
            <h1>Frequently asked questions (FAQs)</h1>
            <p>
              We've answered some of the most common questions to help you get
              the best experience with MyCheerly.
            </p>
          </div>
          <div className="for-members">
            <h2>For Members</h2>
            {memberFaqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                children={faq.children}
              />
            ))}
          </div>
          <div className="for-churches">
            <h2>For Churches</h2>
            {churchesFaqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                children={faq.children}
              />
            ))}
          </div>
          <div className="general">
            <h2>General</h2>
            {generalFaqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                children={faq.children}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
