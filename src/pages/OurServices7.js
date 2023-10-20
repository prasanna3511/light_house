import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices7.css";

const OurServices7 = () => {
  const navigate = useNavigate();

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services6");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/");
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
    <div className="our-services-7">
      <img className="vector-icon2" alt="" src="/vector.svg" />
      <img className="vector-icon3" alt="" src="/vector1.svg" />
      <img className="icon2" alt="" src="/2-1@2x.png" />
      <div className="rectangle-group">
        <div className="rectangle-div" />
        <div className="writing-and-editorial">
          Writing and Editorial Services
        </div>
        <div className="copywriting-excellence-articu-container">
          <ul className="copywriting-excellence-articu">
            <li className="enhance-the-quality">
              Copywriting Excellence: Articulate your thoughts with clarity,
              impact, and resonance.
            </li>
          </ul>
          <p className="blank-line2">&nbsp;</p>
          <ul className="copywriting-excellence-articu">
            <li>
              Editing and Proofreading Mastery: Ensure your message is
              communicated effectively and authentically.
            </li>
          </ul>
        </div>
        <div className="enhance-the-quality-container">
          <ul className="copywriting-excellence-articu">
            <li className="enhance-the-quality">
              Enhance the quality, resonance, and impact of your written
              communications with our expert editorial services.
            </li>
          </ul>
        </div>
        <div className="authors-corporations-and-container">
          <ul className="copywriting-excellence-articu">
            Authors, corporations, and individuals seeking clarity, impact, and
            authenticity in their written communications.
          </ul>
        </div>
        <div className="benefits2">
          <p className="blank-line2">Benefits</p>
        </div>
        <div className="ideal-for1">Ideal for</div>
        <div className="offerings1">Offerings:</div>
        <img className="benefit-icon1" alt="" src="/benefit-icon.svg" />
        <div className="frame-child1" />
        <div className="frame-child2" />
        <img className="ideal-icon1" alt="" src="/ideal-icon.svg" />
        <img className="editor-icon1" alt="" src="/editor-icon1.svg" />
      </div>
      <div className="auto-layout-vertical" onClick={onAutoLayoutVerticalClick}>
        <div className="auto-layout-horizontal1">
          <img className="frame-icon1" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal2"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon1" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary2" onClick={onStateSecondaryContainerClick}>
        <div className="button2">Contact us</div>
      </div>
      <div className="glossary1">Glossary</div>
      <div className="about1" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home1">Home</div>
      <div className="rent-a-skill1">Rent- a- skill</div>
      <div className="services1" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact1" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-7-child" onClick={onLineClick} />
    </div>
  );
};

export default OurServices7;
