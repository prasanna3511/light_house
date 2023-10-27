import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage1.css";

const AboutPage1 = () => {
  const navigate = useNavigate();
  const [edit,setEdit]=useState(false);
  const [text, setText] = useState("The only constant is change! And the only certainty is uncertainty.");
  const [text1, setText1] = useState("At The Lighthouse, we guide people in navigating change, whatever phase of their life they are in.`Bringing the path of transformation to light is a holistic process that combines various tools and techniques to support individuals and organisations on their journey towards personal and professional growth. We are committed to facilitating both individuals and organisations in their transformational journeys, by making the complex simple and ‘eating the elephant piece by piece’. ");
  const [text2, setText2] = useState(" Our goal is to shed light on the concept of awareness and transformation and to bring it to the forefront in a meaningful, and impactful way. Holistically. We collaborate to define the path of transformation and integration, making it more accessible and understandable to all stakeholders, connecting personal purpose to the company’s mission and vision.");
  const [text3, setText3] = useState("Transformation in a business can involve significant challenges and requires understanding, careful planning, and execution. It may involve rethinking traditional approaches and adopting new technologies or practices, as well as adapting to new ways of communicating and working.");
  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onStateSecondaryContainer1Click = useCallback(() => {
    navigate("/about-page11");
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

  const onReadMoreTextClick = useCallback(() => {
    navigate("/about-page11");
  }, [navigate]);

    const handleEdit = ()=>{
    setEdit(true);
  }
  
const handleSave = ()=>{
    setEdit(false);
    setText(text);
    setText1(text1);
    setText2(text2);
    setText3(text3);
}


  return (
    <div className="about-page-1">
    <img className="vector-icon52" alt="" src="/Aboutpage-1.png" />    



        <div className="statesecondary17"
        onClick={onStateSecondaryContainerClick}
      >
        <div className="button29">REad more</div>
      </div>
      <div
        className="statesecondary18"
        onClick={onStateSecondaryContainer1Click}
      >
        <div className="button29">EXplore our vision, mission</div>
      </div>
      <div className="statesecondary19">
        <div className="button29">Discover our services</div>
      </div>
      


      <div className="rent-a-skill20">Rent- a- Skill</div>
      <div className="glossary20">Glossary</div>
      <div className="about15">About</div>
      <div className="home15" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services20" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact15" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="about-page-1-child" />
      <div className="who-we-are-group">
        <div className="who-we-are1">Who We Are.</div>
        <div className="at-the-lighthouse-container">
          <p className="bringing-the-path">{text1}</p>
          <p className="bringing-the-path">&nbsp;</p>
          <p className="bringing-the-path">
          {text2}
          </p>
          <p className="bringing-the-path">&nbsp;</p>
          <p className="bringing-the-path">
          {text3}
          </p>
          <p className="bringing-the-path">&nbsp;</p>
          <p className="bringing-the-path">{`And the bottom line is The Triple Bottom Line: People, Planet, and Profit. `}</p>
        </div>
        <div className="read-more" onClick={onReadMoreTextClick}>
          Read more.
        </div>
         {edit ? (
                      <>
                      <input placeholder="Enter text"
                      value={text}
                      onChange={(e) => setText(e.target.value)} />
                  

                  <input placeholder="Enter text"
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}/>
              

              <input placeholder="Enter text"
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}/>

              <input placeholder="Enter text"
                  value={text3}
                  onChange={(e) => setText3(e.target.value)}/>
                  <button onClick={handleSave}>Save</button>
                     </>
                      ) : (
        <div className="the-only-constant1">
        {text}
        
        </div>
       
          )}
          <button onClick={handleEdit}>EDIT</button>
        <div className="lets-light-up6">Let’s light up our lives!</div>
        <div className="statesecondary20">
          <div className="button29">REad less</div>
        </div>
        <div className="statesecondary21">
          <div className="button29">EXplore our vision, mission</div>
        </div>
        <div className="statesecondary22">
          <div className="button29">Discover our services</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage1;
// <img className="vector-icon52" alt="" src="/vector23.svg" />
// <img className="vector-icon53" alt="" src="/vector24.svg" />
//  <img className="vector-icon54" alt="" src="/vector25.svg" /> 
// img className="icon24" alt="" src="/2-1@2x.png" />