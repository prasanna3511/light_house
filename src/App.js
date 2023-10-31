import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OurServices8 from "./pages/OurServices8";
import OurServices7 from "./pages/OurServices7";
import OurServices6 from "./pages/OurServices6";
import OurServices5 from "./pages/OurServices5";
import OurServices4 from "./pages/OurServices4";
import OurServices3 from "./pages/OurServices3";
import OurServices2 from "./pages/OurServices2";
import OurServices1 from "./pages/OurServices1";
import OurServicesMainPage from "./pages/OurServicesMainPage";
import AboutPage11 from "./pages/AboutPage11";
import ContactUsCall from "./pages/ContactUsCall";
import ContactUsCall1 from "./pages/ContactUsCall1";
import ContactUsOnline from "./pages/ContactUsOnline";
import ContactUsOffline from "./pages/ContactUsOffline";
import ContactUs from "./pages/ContactUs";
import AboutPage1 from "./pages/AboutPage1";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/our-services7":
        title = "";
        metaDescription = "";
        break;
      case "/our-services6":
        title = "";
        metaDescription = "";
        break;
      case "/our-services5":
        title = "";
        metaDescription = "";
        break;
      case "/our-services4":
        title = "";
        metaDescription = "";
        break;
      case "/our-services3":
        title = "";
        metaDescription = "";
        break;
      case "/our-services2":
        title = "";
        metaDescription = "";
        break;
      case "/our-services1":
        title = "";
        metaDescription = "";
        break;
      case "/our-services-main-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-page11":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-call1":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-call":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-online":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-offline":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-page1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* <Route path="/" element={<OurServices8 />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/our-services8" element={<OurServices8 />} />
      <Route path="/our-services7" element={<OurServices7 />} />
      <Route path="/our-services6" element={<OurServices6 />} />
      <Route path="/our-services5" element={<OurServices5 />} />
      <Route path="/our-services4" element={<OurServices4 />} />
      <Route path="/our-services3" element={<OurServices3 />} />
      <Route path="/our-services2" element={<OurServices2 />} />
      <Route path="/our-services1" element={<OurServices1 />} />
      <Route path="/our-services-main-page" element={<OurServicesMainPage />} />
      <Route path="/about-page11" element={<AboutPage11 />} />
      <Route path="/contact-us-call1" element={<ContactUsCall />} />
      <Route path="/contact-us-call" element={<ContactUsCall1 />} />
      <Route path="/contact-us-online" element={<ContactUsOnline />} />
      <Route path="/contact-us-offline" element={<ContactUsOffline />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-page1" element={<AboutPage1 />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
