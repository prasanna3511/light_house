import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices6.css";
import "./OurServices3.css";

const OurServices6 = () => {
  const navigate = useNavigate();

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services5");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services7");
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

  return (
    <div className="our-services-6">
      <img className="vector-icon4" alt="" src="/vector.svg" />
      <img className="vector-icon5" alt="" src="/vector2.svg" />
      <img className="icon3" alt="" src="/2-1@2x.png" />
      <div className="rectangle-container">
        <div className="frame-child3" />
        <div className="language-and-cultural">
          Language and Cultural Services
        </div>
        <div className="translation-excellence-dutch-container">
          <ul className="translation-excellence-dutch-">
            <li className="communicate-seamlessly-and">
              Translation Excellence: Dutch-English-Dutch,
              English-German-English, German-Dutch-German, and more, for
              seamless communication across borders.
            </li>
          </ul>
          <p className="blank-line3">&nbsp;</p>
          <ul className="translation-excellence-dutch-">
            <li>
              English Language Mastery: Bespoke lessons to meet your
              communicative goals and needs.
            </li>
          </ul>
        </div>
        <div className="communicate-seamlessly-and-container">
          <ul className="translation-excellence-dutch-">
            <li className="communicate-seamlessly-and">
              Communicate seamlessly and foster mutual understanding and
              connection across cultures and languages.
            </li>
          </ul>
        </div>
        <div className="individuals-and-organisations-container">
          <ul className="translation-excellence-dutch-">
            Individuals and organisations seeking to enhance their linguistic
            capabilities and cultural understanding.
          </ul>
        </div>
        <div className="benefits4">
          <p className="blank-line3">Benefits</p>
        </div>
        <div className="ideal-for2">Ideal for</div>
        <div className="offerings2">Offerings:</div>
        <img className="benefit-icon2" alt="" src="/benefit-icon.svg" />
        <div className="frame-child13" />
        <div className="frame-child14" />
        <img className="ideal-icon2" alt="" src="/ideal-icon.svg" />
        <div className="cultural-icon1">
          <img className="icon4" alt="" src="/icon1.svg" />
          <div className="a1">A</div>
          <div className="div1">は</div>
        </div>
      </div>
      <div
        className="auto-layout-vertical1"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal3">
          <img className="frame-icon3" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal4"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon3" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary3" onClick={onStateSecondaryContainerClick}>
        <div className="button3">Contact us</div>
      </div>
      <div className="glossary2">Glossary</div>
      <div className="about2" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home2">Home</div>
      <div className="rent-a-skill2">Rent- a- skill</div>
      <div className="services2" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact2" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-6-child" />
    </div>
  );
};

export default OurServices6;
