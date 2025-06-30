import Grow from "@components/common/Grow/Grow";
import Hero from "@components/company/Hero/Hero";
import Quote from "@components/company/Quote/Quote";
import Mission from "@components/company/Mission/Mission";
import Partners from "@components/company/Partners/Partners";
import Network from "@components/company/Network/Network";
import FeedBack from "@components/company/FeedBack/FeedBack";

function Company() {
  return (
    <>
      <Hero />
      <Quote />
      <Mission />
      <Partners />
      <Network />
      <FeedBack />
      <Grow />
    </>
  );
}

export default Company;
