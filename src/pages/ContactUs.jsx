import Network from "@components/company/Network/Network";
import FeedBack from "@components/company/FeedBack/FeedBack";
import ContactDetail from "@components/contact/ContactDetail/ContactDetail";
import Socials from "@components/contact/Socials/Socials";

function ContactUs() {
  return (
    <>
      <ContactDetail />
      <Network />
      <FeedBack />
      <Socials />
    </>
  );
}

export default ContactUs;
