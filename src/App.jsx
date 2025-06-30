import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@components/common/ScrollToTop";
import Navbar from "@components/common/Navbar/Navbar";
import Footer from "@components/common/Footer/Footer";
import Home from "@pages/Home";
import Members from "@pages/Members";
import Company from "@pages/Company";
import Privacy from "@pages/Privacy";
import Terms from "@pages/Terms";
import FAQ from "@pages/FAQ";
import ContactUs from "@pages/ContactUs";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/company/about-us" element={<Company />} />
        <Route path="/company/privacy" element={<Privacy />} />
        <Route path="/company/terms" element={<Terms />} />
        <Route path="/company/faq" element={<FAQ />} />
        <Route path="/company/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
