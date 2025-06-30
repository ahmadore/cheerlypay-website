import Hero from "@components/home/Hero/Hero";
import Solution from "@components/home/Solution/Solution";
import Info from "@components/home/Info/Info";
import Growth from "@components/home/Growth/Growth";
import BringIt from "@components/home/BringIt/BringIt";
import Testimonials from "@components/home/Testimonials/Testimonials";
import Blog from "@components/home/Blog/Blog";
import Grow from "@components/common/Grow/Grow";

function Home() {
  return (
    <>
      <Hero />
      <Solution />
      <Info />
      <Growth />
      <BringIt />
      <Testimonials />
      <Blog />
      <Grow />
    </>
  );
}

export default Home;
