import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices2.css";

const OurServices2 = () => {
  const navigate = useNavigate();

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services1");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services3");
  }, [navigate]);

  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLineClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  return (
    <div className="our-services-2">
      <img className="vector-icon12" alt="" src="/vector3.svg" />
      <img className="vector-icon13" alt="" src="/vector2.svg" />
      <img className="icon8" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent3">
        <div className="frame-child15" />
        <div className="creative-and-expressive">
          Creative and Expressive Services
        </div>
        <div className="innovative-creative-writing-container">
          <p className="blank-line14">&nbsp;</p>
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
              Innovative Creative Writing: Scriptwriting, Corporate and Film
              Songs, Radio Jingles, and Brandings to elevate your narrative.
            </li>
          </ul>
          <p className="blank-line14">&nbsp;</p>
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
              Voice-over Mastery: For Trainings, Audiobooks, Podcasts, and
              Multimedia Projects, giving voice to your story.
            </li>
          </ul>
        </div>
        <div className="elevate-your-brand-container">
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
              Elevate your brand and narrative with our innovative and
              expressive solutions, creating resonant and engaging experiences.
            </li>
          </ul>
        </div>
        <div className="brands-corporations-and-container">
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
              Brands, corporations, and individuals looking to express their
              story and elevate their presence further through creative mediums.
            </li>
          </ul>
          <p className="blank-line14">&nbsp;</p>
        </div>
        <div className="benefits12">
          <p className="blank-line14">Benefits</p>
        </div>
        <div className="ideal-for6">Ideal for</div>
        <div className="offerings6">Offerings:</div>
        <img className="benefit-icon6" alt="" src="/benefit-icon.svg" />
        <div className="frame-child16" />
        <div className="frame-child17" />
        <img className="ideal-icon6" alt="" src="/ideal-icon.svg" />
        <img
          className="creative-services-icon1"
          alt=""
          src="/creative-services1.svg"
        />
      </div>
      <div
        className="auto-layout-vertical5"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal11">
          <img className="frame-icon11" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal12"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon11" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary7" onClick={onStateSecondaryContainerClick}>
        <div className="button7">Contact us</div>
      </div>
      <div className="glossary6">Glossary</div>
      <div className="about6" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home6">Home</div>
      <div className="rent-a-skill6">Rent- a- skill</div>
      <div className="services6">Services</div>
      <div className="contact6" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-2-child" onClick={onLineClick} />
    </div>
  );
};

export default OurServices2;
