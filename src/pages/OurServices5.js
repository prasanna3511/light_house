import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices5.css";

const OurServices5 = () => {
  const navigate = useNavigate();

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services4");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services6");
  }, [navigate]);

  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLineClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  return (
    <div className="our-services-5">
      <img className="vector-icon6" alt="" src="/vector3.svg" />
      <img className="vector-icon7" alt="" src="/vector2.svg" />
      <img className="icon5" alt="" src="/2-1@2x.png" />
      <div className="frame-div">
        <div className="frame-child6" />
        <div className="branding-and-strategic">
          Branding and Strategic Communication
        </div>
        <div className="strategic-branding-cohesive-container">
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
              Strategic Branding: Cohesive and impactful branding solutions to
              strengthen your identity.
            </li>
          </ul>
          <p className="blank-line4">&nbsp;</p>
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
              Content Marketing Mastery: Amplify your presence with tailored and
              strategic content solutions.
            </li>
          </ul>
          <p className="blank-line4">&nbsp;</p>
          <ul className="strategic-branding-cohesive-a">
            <li>
              Social Media Management: Effective and resonant connection with
              your audience.
            </li>
          </ul>
        </div>
        <div className="strengthen-your-brand-container">
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
              Strengthen your brand identity and communicate your message
              effectively and strategically with our comprehensive solutions.
            </li>
          </ul>
        </div>
        <div className="brands-and-organisations-container">
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
              Brands and organisations looking to enhance their identity,
              presence, and communication strategies.
            </li>
          </ul>
          <p className="blank-line4">&nbsp;</p>
        </div>
        <div className="benefits6">
          <p className="blank-line4">Benefits</p>
        </div>
        <div className="ideal-for3">Ideal for</div>
        <div className="offerings3">Offerings:</div>
        <img className="benefit-icon3" alt="" src="/benefit-icon.svg" />
        <div className="frame-child7" />
        <div className="frame-child8" />
        <img className="ideal-icon3" alt="" src="/ideal-icon.svg" />
        <img className="branding-icon1" alt="" src="/branding-icon1.svg" />
      </div>
      <div
        className="auto-layout-vertical2"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal5">
          <img className="frame-icon5" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal6"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon5" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary4" onClick={onStateSecondaryContainerClick}>
        <div className="button4">Contact us</div>
      </div>
      <div className="glossary3">Glossary</div>
      <div className="about3" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home3">Home</div>
      <div className="rent-a-skill3">Rent- a- skill</div>
      <div className="services3" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact3" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-5-child" onClick={onLineClick} />
    </div>
  );
};

export default OurServices5;
