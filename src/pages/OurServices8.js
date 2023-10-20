import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices8.css";

const OurServices8 = () => {
  const navigate = useNavigate();

  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onAutoLayoutHorizontalClick = useCallback(() => {
    navigate("/our-services7");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="our-services-8">
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="icon1" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="comprehensive-organisational-t">
          Comprehensive Organisational Transformation and HR Solutions
        </div>
        <div className="holistic-individual-and-container">
          <ul className="holistic-individual-and-team-e">
            <li className="holistic-individual-and">
              Holistic Individual and Team Empowerment: Unlock the full
              potential of every member through a deep exploration of individual
              motivations, passions, and purposes, fostering synergistic teams
              and holistic growth.
            </li>
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="holistic-individual-and-team-e">
            <li className="holistic-individual-and">
              Sustainable Role Alignment and Enhancement: Optimise individual
              contributions and team dynamics through strategic role alignment,
              tailored trainings, and profile creation, ensuring sustainable
              success and development.
            </li>
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="holistic-individual-and-team-e">
            <li>
              Cultural Evolution for a Better Tomorrow: Shape a resilient and
              positive organisational culture through comprehensive gap,
              mapping, best practice sharing, and transformative habit creation,
              contributing to a better, more equitable world.
            </li>
          </ul>
        </div>
        <div className="embark-on-a-container">
          <ul className="holistic-individual-and-team-e">
            <li className="holistic-individual-and">
              Embark on a transformative journey with our comprehensive
              solutions, enhancing organisational culture, optimising
              performances, and fostering an environment conducive to continuous
              growth and holistic development.
            </li>
          </ul>
        </div>
        <div className="organisations-aspiring-to-container">
          <ul className="holistic-individual-and-team-e">
            Organisations aspiring to transformative and sustainable growth,
            seeking to strengthen their culture, optimise HR practices, and
            enhance employee experience and development in alignment with a
            vision for a better world.
          </ul>
        </div>
        <div className="benefits">
          <p className="blank-line">Benefits</p>
        </div>
        <div className="ideal-for">Ideal for</div>
        <div className="offerings">Offerings:</div>
        <img className="benefit-icon" alt="" src="/benefit-icon.svg" />
        <div className="frame-item" />
        <div className="frame-inner" />
        <img className="ideal-icon" alt="" src="/ideal-icon.svg" />
        <img
          className="org-transform-icon1"
          alt=""
          src="/org-transform-icon1.svg"
        />
        <div
          className="statesecondary1"
          onClick={onStateSecondaryContainerClick}
        >
          <div className="button1">Contact us</div>
        </div>
      </div>
      <div
        className="auto-layout-horizontal"
        onClick={onAutoLayoutHorizontalClick}
      >
        <img className="frame-icon" alt="" src="/frame.svg" />
      </div>
      <div className="glossary">Glossary</div>
      <div className="about" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="rent-a-skill">Rent- a- skill</div>
      <div className="services" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-8-child" />
    </div>
  );
};

export default OurServices8;
