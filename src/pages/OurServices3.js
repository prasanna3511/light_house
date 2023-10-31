import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices3.css";
import "./LandingPage.css";

const OurServices3 = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("Customisable Trainings: Leadership, Sales, Business Acumen, Storytelling, Vocal Coaching, and more, tailored to your developmental needs.");
  const [text1, setText1] = useState("Specialized Workshops: Personal Development, Vision Quests, CBT, Business English, and Conversational Skills for holistic learning experiences..");
  const [text2, setText2] = useState("Enhance organizational and individual skills, fostering a culture of continuous learning and development with our tailored and specialized programs..");
 const [text3, setText3] = useState("Organizations and individuals seeking to enhance skills, knowledge, and learning experiences in a diverse range of areas");

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services2");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services4");
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

  
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  setText(text);
  setText(text1);
  setText(text2);
  setText(text3);
  }
  return (
    <div className="our-services-3">
     


      <img className="icon7" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
      <div className="frame-child12" />
        <div className="training-and-learning">
          Training and Learning Solutions
        </div>
        <div className="customisable-trainings-leader-container">
          <p className="blank-line11">&nbsp;</p>
          <ul className="customisable-trainings-leader">
            <li className="enhance-organizational-and">
            {text}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line11">&nbsp;</p>
          <ul className="customisable-trainings-leader">
            <li className="enhance-organizational-and">
            {text1}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text1}
                         onChange={(e) => setText1(e.target.value)}
                         />
            )}
            </li>
          </ul>
        </div>
        <div className="enhance-organizational-and-container">
          <ul className="customisable-trainings-leader">
            <li className="enhance-organizational-and">
            {text2}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text2}
                         onChange={(e) => setText2(e.target.value)}
                         />
            )}
            </li>
          </ul>
        </div>
        <div className="organizations-and-individuals-container">
          <ul className="customisable-trainings-leader">
            <li className="enhance-organizational-and">
            {text3}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text3}
                         onChange={(e) => setText3(e.target.value)}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line11">&nbsp;</p>
        </div>
        <div className="benefits10">
          <p className="blank-line11">Benefits</p>
        </div>
        <div className="ideal-for5">Ideal for</div>
        <div className="offerings5">Offerings:</div>
        <img className="benefit-icon5" alt="" src="/benefit-icon.svg" />
        <div className="frame-child13" />
        <div className="frame-child14" />
        <img className="ideal-icon5" alt="" src="/ideal-icon.svg" />
        <img className="training-icon1" alt="" src="/training-icon1.svg" />
      </div>
      <div
        className="auto-layout-vertical4"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal9">
          <img className="frame-icon9" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal10"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon9" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary6" onClick={onStateSecondaryContainerClick}>
        <div className="button6">Contact us</div>
      </div>
      <div className="glossary21">Glossary</div>
      <div className="about16" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home16">Home</div>
      <div className="rent-a-skill21">Rent- a- skill</div>
      <div className="services21">Services</div>
      <div className="contact16" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-3-child" onClick={onLineClick} />
      {edit ? (
        <>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      <button className="edit" onClick={handleEdit}>EDIT</button>
      </div>
  );
};

export default OurServices3;
//  <img className="vector-icon10" alt="" src="/vector3.svg" />
//       <img className="vector-icon11" alt="" src="/vector2.svg" />
// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OurServices3.css";

// const OurServices3 = () => {
//   const navigate = useNavigate();
  

//   const onAutoLayoutVerticalClick = useCallback(() => {
//     navigate("/our-services2");
//   }, [navigate]);

//   const onAutoLayoutHorizontal1Click = useCallback(() => {
//     navigate("/our-services4");
//   }, [navigate]);

//   const onStateSecondaryContainerClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const onAboutTextClick = useCallback(() => {
//     navigate("/about-page1");
//   }, [navigate]);

//   const onContactTextClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const onLineClick = useCallback(() => {
//     navigate("/our-services-main-page");
//   }, [navigate]);

//   return (
//     <div className="our-services-3">
     


//       <img className="icon7" alt="" src="/2-1@2x.png" />
//       <div className="rectangle-parent2">
//       <div className="frame-child12" />
//         <div className="training-and-learning">
//           Training and Learning Solutions
//         </div>
//         <div className="customisable-trainings-leader-container">
//           <p className="blank-line11">&nbsp;</p>
//           <ul className="customisable-trainings-leader">
//             <li className="enhance-organizational-and">
//               Customisable Trainings: Leadership, Sales, Business Acumen,
//               Storytelling, Vocal Coaching, and more, tailored to your
//               developmental needs.
//             </li>
//           </ul>
//           <p className="blank-line11">&nbsp;</p>
//           <ul className="customisable-trainings-leader">
//             <li className="enhance-organizational-and">
//               Specialized Workshops: Personal Development, Vision Quests, CBT,
//               Business English, and Conversational Skills for holistic learning
//               experiences.
//             </li>
//           </ul>
//         </div>
//         <div className="enhance-organizational-and-container">
//           <ul className="customisable-trainings-leader">
//             <li className="enhance-organizational-and">
//               Enhance organizational and individual skills, fostering a culture
//               of continuous learning and development with our tailored and
//               specialized programs.
//             </li>
//           </ul>
//         </div>
//         <div className="organizations-and-individuals-container">
//           <ul className="customisable-trainings-leader">
//             <li className="enhance-organizational-and">
//               Organizations and individuals seeking to enhance skills,
//               knowledge, and learning experiences in a diverse range of areas
//             </li>
//           </ul>
//           <p className="blank-line11">&nbsp;</p>
//         </div>
//         <div className="benefits10">
//           <p className="blank-line11">Benefits</p>
//         </div>
//         <div className="ideal-for5">Ideal for</div>
//         <div className="offerings5">Offerings:</div>
//         <img className="benefit-icon5" alt="" src="/benefit-icon.svg" />
//         <div className="frame-child13" />
//         <div className="frame-child14" />
//         <img className="ideal-icon5" alt="" src="/ideal-icon.svg" />
//         <img className="training-icon1" alt="" src="/training-icon1.svg" />
//       </div>
//       <div
//         className="auto-layout-vertical4"
//         onClick={onAutoLayoutVerticalClick}
//       >
//         <div className="auto-layout-horizontal9">
//           <img className="frame-icon9" alt="" src="/frame1.svg" />
//         </div>
//       </div>
//       <div
//         className="auto-layout-horizontal10"
//         onClick={onAutoLayoutHorizontal1Click}
//       >
//         <img className="frame-icon9" alt="" src="/frame2.svg" />
//       </div>
//       <div className="statesecondary6" onClick={onStateSecondaryContainerClick}>
//         <div className="button6">Contact us</div>
//       </div>
//       <div className="glossary5">Glossary</div>
//       <div className="about5" onClick={onAboutTextClick}>
//         About
//       </div>
//       <div className="home5">Home</div>
//       <div className="rent-a-skill5">Rent- a- skill</div>
//       <div className="services5">Services</div>
//       <div className="contact5" onClick={onContactTextClick}>
//         Contact
//       </div>
//       <div className="our-services-3-child" onClick={onLineClick} />
//     </div>
//   );
// };

// export default OurServices3;