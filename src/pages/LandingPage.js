import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [edit,setEdit]=useState(false);
  const [edit1,setEdit1]=useState(false);
  const [edit3,setEdit3]=useState(false);
  const [text1, setText1] = useState("The Lighthouse, - your beacon of transformation and holistic growth. \n In a world of constant change and uncertainty, we stand as a pillar of support.");
  const [text3, setText3] = useState("We are your steadfast companion, offering innovative solutions and guidance to both individuals and organisations embarking on their transformative journeys.");
  const [text, setText] = useState("Discover our mission, vision, and array of services designed to illuminate your path to sustainable success and holistic development.");
  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onStatePrimaryContainerClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

    const handleEdit = ()=>{
      setEdit(true);
    }
  const handleSave = ()=>{
      setEdit(false);
      setText(text);
  }
  const handleEdit1 = ()=>{
    setEdit1(true);
  }
  const handleSave1 = ()=>{
    setEdit1(false);
    setText1(text1);
}
const handleEdit3 = ()=>{
  setEdit3(true);
}
const handleSave3 = ()=>{
  setEdit3(false);
  setText3(text3);
}


  return (
    <div className="landing-page">
      <img
        className="the-lighthouse-logo-no-tagline"
        alt=""
        src="/the-lighthouse-logo-no-tagline-loose-text-1-1@2x.png"
      />

      <div className="rent-a-skill21">Rent- a- Skill</div>
      <div className="glossary21">Glossary</div>
      <div className="about16" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home16">Home</div>
      <div className="services21" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact16" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="landing-page-child" />
      <div className="rectangle-parent10">
        <div className="frame-child21" />
        <div className="frame">
          <div className="welcome-to-the-container">
            <span>{`Welcome to The `}</span>
            <span className="lighthouse">{`Lighthouse `}</span>
          </div>
        </div>
        <div className="frame1">
          <div className="bringing-the-path1">
            Bringing the Path of Transformation to Light
          </div>
        </div>
        <div className="the-lighthouse-container">
        <p className="the-lighthouse-">&nbsp;</p>
        
          {edit ? (
            <>
            <input  placeholder="Enter text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
          <input  placeholder="Enter text"
          value={text3}
          onChange={(e) => setText3(e.target.value)}

        />
       <input placeholder="Enter text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      />
        <button onClick={handleSave}>Save</button> 
           </>
            ) :(
              <p className="the-lighthouse-">
             {text1.split('\n').map((item, key) => (
                <span key={key}>
                  {item}
                  <br />
                </span>
              ))}</p> 
          )}
          <button onClick={handleEdit}>EDIT</button>
          <p className="the-lighthouse-">&nbsp;</p>
          
          

          <p className="the-lighthouse-">{text3}</p>
         
          
          <p className="the-lighthouse-">&nbsp;</p>
         
          <p className="the-lighthouse-">
           {text}
          </p>
        
         
        </div>
        <div className="stateprimary12" onClick={onStatePrimaryContainerClick}>
          <div className="button35">discover our services</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
<img className="vector-icon55" alt="" src="/vector26.svg" />
// <img className="vector-icon56" alt="" src="/vector27.svg" />
// import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [edit,setEdit]=useState(false);
//   const onAboutTextClick = useCallback(() => {
//     navigate("/about-page1");
//   }, [navigate]);

//   const onServicesTextClick = useCallback(() => {
//     navigate("/our-services-main-page");
//   }, [navigate]);

//   const onContactTextClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const onStatePrimaryContainerClick = useCallback(() => {
//     navigate("/our-services-main-page");
//   }, [navigate]);

//   const handleEdit = ()=>{
//     setEdit(true);
//   }

//   const handleSave = ()=>{
//     setEdit(false);

//   }
//   return (
//     <div className="landing-page">
//       <img
//         className="the-lighthouse-logo-no-tagline"
//         alt=""
//         src="/the-lighthouse-logo-no-tagline-loose-text-1-1@2x.png"
//       />

//       <div className="rent-a-skill21">Rent- a- Skill</div>
//       <div className="glossary21">Glossary</div>
//       <div className="about16" onClick={onAboutTextClick}>
//         About
//       </div>
//       <div className="home16">Home</div>
//       <div className="services21" onClick={onServicesTextClick}>
//         Services
//       </div>
//       <div className="contact16" onClick={onContactTextClick}>
//         Contact
//       </div>
//       <div className="landing-page-child" />
//       <div className="rectangle-parent10">
//         <div className="frame-child21" />
//         <div className="frame">
//           <div className="welcome-to-the-container">
//             <span>{`Welcome to The `}</span>
//             <span className="lighthouse">{`Lighthouse `}</span>
//           </div>
//         </div>
//         <div className="frame1">
//           <div className="bringing-the-path1">
//             Bringing the Path of Transformation to Light
//           </div>
//         </div>
//         <div className="the-lighthouse-container">
//           <p className="the-lighthouse-">
//             The Lighthouse, - your beacon of transformation and holistic growth.
//           </p>
//           <p className="the-lighthouse-">{`In a world of constant change and uncertainty, we stand as a pillar of support. `}</p>
//           <p className="the-lighthouse-">&nbsp;</p>
//           <p className="the-lighthouse-">{`We are your steadfast companion, offering innovative solutions and guidance to both individuals and organisations embarking on their transformative journeys. `}</p>
//           <p className="the-lighthouse-">&nbsp;</p>
//           {edit ? (
//             <>
//             <input placeholder="rfitdf"/>
//             <button onClick={handleSave}>Save</button> 
//             </>
//             ) : (
//               <p className="the-lighthouse-">
//               Discover our mission, vision, and array of services designed to
//               illuminate your path to sustainable success and holistic
//               development.
//               </p>
              
//             )}
//              <button onClick={handleEdit}>EDIT</button>
//         </div>
//         <div className="stateprimary12" onClick={onStatePrimaryContainerClick}>
//           <div className="button35">discover our services</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
// // <img className="vector-icon55" alt="" src="/vector26.svg" />
// // <img className="vector-icon56" alt="" src="/vector27.svg" />
