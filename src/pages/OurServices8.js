import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices8.css";
import "./OurServices3.css";
const OurServices8 = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("Holistic Individual and Team Empowerment: Unlock the full potential of every member through a deep exploration of individual motivations, passions, and purposes, fostering synergistic teams and holistic growth.");
  const [text1, setText1] = useState("Sustainable Role Alignment and Enhancement: Optimise individual contributions and team dynamics through strategic role alignment, tailored trainings, and profile creation, ensuring sustainable success and development.");
  const [text2, setText2] = useState("Cultural Evolution for a Better Tomorrow: Shape a resilient and positive organisational culture through comprehensive gap, mapping, best practice sharing, and transformative habit creation, contributing to a better, more equitable world..");
 const [text3, setText3] = useState("Embark on a transformative journey with our comprehensive solutions, enhancing organisational culture, optimising performances, and fostering an environment conducive to continuous growth and holistic development.");
 const [text4, setText4] = useState("Organisations aspiring to transformative and sustainable growth, seeking to strengthen their culture, optimise HR practices, and enhance employee experience and development in alignment with a vision for a better world.s.");
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
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  setEdit(false);
  setText(text);
  setText(text1);
  setText(text2);
  setText(text3);
  }
  return (
    <div className="our-services-8">
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="icon1" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child12" />
        <div className="comprehensive-organisational-t">
          Comprehensive Organisational Transformation and HR Solutions
        </div>
        <div className="holistic-individual-and-container">
          <ul className="holistic-individual-and-team-e">
            <li className="holistic-individual-and">
            {text}
            </li>
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                         />
            )}
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="holistic-individual-and-team-e">
            <li className="holistic-individual-and">
              {text1}
            </li>
            {  edit &&(
              <input placeholder="Enter text"
                         value={text1}
                         onChange={(e) => setText1(e.target.value)}
                         />
            )}
          </ul>
          <p className="blank-line">&nbsp;</p>
          <ul className="holistic-individual-and-team-e">
            <li>
              {text2}
            </li>
            {  edit &&(
              <input placeholder="Enter text"
                         value={text2}
                         onChange={(e) => setText2(e.target.value)}
                         />
            )}
          </ul>
        </div>
        <div className="embark-on-a-container">
          <ul className="holistic-individual-and-team-e">
            <li className="holistic-individual-and">
              {text3}
            </li>
            {  edit &&(
              <input placeholder="Enter text"
                         value={text3}
                         onChange={(e) => setText3(e.target.value)}
                         />
            )}
          </ul>
        </div>
        <div className="organisations-aspiring-to-container">
          <ul className="holistic-individual-and-team-e">
            {text4}
          </ul>
          {  edit &&(
            <input placeholder="Enter text"
                       value={text4}
                       onChange={(e) => setText4(e.target.value)}
                       />
          )}
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
        className="auto-layout-horizontal10"
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
      {edit ? (
        <>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      <button className="edit"  onClick={handleEdit}>EDIT</button>
  
      </div>
  );
};

export default OurServices8;
