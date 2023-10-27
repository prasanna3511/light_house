import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices1.css";
import"./OurServices3.css";

const OurServices1 = () => {
  const navigate = useNavigate();

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

  const onAutoLayoutHorizontalClick = useCallback(() => {
    navigate("/our-services2");
  }, [navigate]);

  return (
    <div className="our-services-1">



      <img className="icon9" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child18" />
        <div className="personal-development-and">
          Personal Development and Holistic Growth
        </div>
        <div className="transformative-coaching-publi-container">
          <p className="blank-line17">&nbsp;</p>
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              Transformative Coaching: Public Speaking, Executive Guidance, and
              Mentoring to unlock your true potential
            </li>
          </ul>
          <p className="blank-line17">&nbsp;</p>
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              Meditative Practices: Traditional, Walking, and Customised Guided
              Meditations for holistic well-being.
            </li>
          </ul>
          <p className="blank-line17">&nbsp;</p>
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              Transformational Breathing Sessions: Breathe your way to a
              balanced and harmonious life.
            </li>
          </ul>
          <p className="blank-line17">&nbsp;</p>
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              Positive Habit Building: Tailored trainings to foster and sustain
              healthy life habits.
            </li>
          </ul>
        </div>
        <div className="navigate-your-transformative-container">
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              Navigate your transformative journey with personalised trainings
              and holistic growth services
            </li>
            <li className="positive-habit-building">
              Unlocking realms of potential and paths to self-discovery
            </li>
          </ul>
        </div>
        <div className="individuals-seeking-personal-container">
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              Individuals seeking personal growth, self-discovery, balance, and
              holistic well-being.
            </li>
          </ul>
        </div>
        <div className="benefits14">
          <p className="blank-line17">Benefits</p>
        </div>
        <div className="ideal-for7">Ideal for</div>
        <div className="offerings7">Offerings:</div>
        <img
          className="personality-dev-icon1"
          alt=""
          src="/personality-dev-icon1.svg"
        />
        <img className="benefit-icon7" alt="" src="/benefit-icon.svg" />
        <div className="frame-child19" />
        <div className="frame-child20" />
        <img className="ideal-icon7" alt="" src="/ideal-icon.svg" />
      </div>
      <div className="statesecondary8" onClick={onStateSecondaryContainerClick}>
        <div className="button8">Contact us</div>
      </div>
      <div className="glossary7">Glossary</div>
      <div className="about7" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home7">Home</div>
      <div className="rent-a-skill7">Rent- a- skill</div>
      <div className="services7" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact7" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-1-child" />
      <div
        className="auto-layout-horizontal13"
        onClick={onAutoLayoutHorizontalClick}
      >
        <img className="frame-icon13" alt="" src="/frame2.svg" />
      </div>
    </div>
  );
};

export default OurServices1;
      // <img className="vector-icon14" alt="" src="/vector3.svg" />
      // <img className="vector-icon15" alt="" src="/vector4.svg" />