import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices4.css";
import "./OurServices3.css";

const OurServices4 = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("Team-building Excellence: Customised sessions to foster collaboration, mutual growth, and synergistic relationships.");
  const [text1, setText1] = useState(" Inspiring Retreats: Tailored experiences to rejuvenate, inspire, and transform.");
  const [text2, setText2] = useState("Shinrin Yoku (Forest Bathing): Experience the healing and transformative power of nature..");
 const [text3, setText3] = useState("  Create memorable and transformative experiences, fostering growth, learning, and well-being through our experiential and outdoor services.");
 const [text4, setText4] = useState("Teams, organisations, and individuals seeking transformative and rejuvenating experiences in nature and beyond.");
 const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services3");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services5");
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
  setText(text4);
}
  return (
    <div className="our-services-4">
     


      <img className="icon6" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child12" />
        <div className="experiential-and-outdoor">
          Experiential and Outdoor Services
        </div>
        <div className="team-building-excellence-cust-container">
          <p className="blank-line7">&nbsp;</p>
          <ul className="team-building-excellence-cust">
            <li className="inspiring-retreats-tailored">
            {text}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line7">&nbsp;</p>
          <ul className="team-building-excellence-cust">
            <li className="inspiring-retreats-tailored">
            {text1}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => setText1(e.target.value)}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line7">&nbsp;</p>
          <ul className="team-building-excellence-cust">
            <li className="inspiring-retreats-tailored">
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
        <div className="create-memorable-and-container">
          <ul className="team-building-excellence-cust">
            <li className="inspiring-retreats-tailored">
            {text3}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text3}
                         onChange={(e) => setText(e.target.value)}
                         />
            )}
            </li>
          </ul>
        </div>
        <div className="teams-organisations-and-container">
          <ul className="team-building-excellence-cust">
            <li className="inspiring-retreats-tailored">
            {text4}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text4}
                         onChange={(e) => setText4(e.target.value)}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line7">&nbsp;</p>
        </div>
        <div className="benefits8">
          <p className="blank-line7">Benefits</p>
        </div>
        <div className="ideal-for4">Ideal for</div>
        <div className="offerings4">Offerings:</div>
        <img className="benefit-icon4" alt="" src="/benefit-icon.svg" />
        <div className="frame-child13" />
        <div className="frame-child14" />
        <img className="ideal-icon4" alt="" src="/ideal-icon.svg" />
        <img
          className="outdoor-services-icon1"
          alt=""
          src="/outdoor-services.svg"
        />
      </div>
      <div
        className="auto-layout-vertical4"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal9">
          <img className="frame-icon7" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal10"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon7" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary5" onClick={onStateSecondaryContainerClick}>
        <div className="button5">Contact us</div>
      </div>
      <div className="glossary4">Glossary</div>
      <div className="about4" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home4">Home</div>
      <div className="rent-a-skill4">Rent- a- skill</div>
      <div className="services4" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact4" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-4-child" />
      {edit ? (
        <>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      <button onClick={handleEdit}>EDIT</button>
 
      </div>
  );
};

export default OurServices4;
// <img className="vector-icon8" alt="" src="/vector3.svg" />
// <img className="vector-icon9" alt="" src="/vector2.svg" />
// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OurServices4.css";
// import "./OurServices3.css";

// const OurServices4 = () => {
//   const navigate = useNavigate();

//   const onAutoLayoutVerticalClick = useCallback(() => {
//     navigate("/our-services3");
//   }, [navigate]);

//   const onAutoLayoutHorizontal1Click = useCallback(() => {
//     navigate("/our-services5");
//   }, [navigate]);

//   const onStateSecondaryContainerClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const onAboutTextClick = useCallback(() => {
//     navigate("/about-page1");
//   }, [navigate]);

//   const onServicesTextClick = useCallback(() => {
//     navigate("/our-services-main-page");
//   }, [navigate]);

//   const onContactTextClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   return (
//     <div className="our-services-4">
     


//       <img className="icon6" alt="" src="/2-1@2x.png" />
//       <div className="rectangle-parent2">
//         <div className="frame-child9" />
//         <div className="experiential-and-outdoor">
//           Experiential and Outdoor Services
//         </div>
//         <div className="team-building-excellence-cust-container">
//           <p className="blank-line7">&nbsp;</p>
//           <ul className="team-building-excellence-cust">
//             <li className="inspiring-retreats-tailored">
//               Team-building Excellence: Customised sessions to foster
//               collaboration, mutual growth, and synergistic relationships.
//             </li>
//           </ul>
//           <p className="blank-line7">&nbsp;</p>
//           <ul className="team-building-excellence-cust">
//             <li className="inspiring-retreats-tailored">
//               Inspiring Retreats: Tailored experiences to rejuvenate, inspire,
//               and transform.
//             </li>
//           </ul>
//           <p className="blank-line7">&nbsp;</p>
//           <ul className="team-building-excellence-cust">
//             <li className="inspiring-retreats-tailored">
//               Shinrin Yoku (Forest Bathing): Experience the healing and
//               transformative power of nature.
//             </li>
//           </ul>
//         </div>
//         <div className="create-memorable-and-container">
//           <ul className="team-building-excellence-cust">
//             <li className="inspiring-retreats-tailored">
//               Create memorable and transformative experiences, fostering growth,
//               learning, and well-being through our experiential and outdoor
//               services.
//             </li>
//           </ul>
//         </div>
//         <div className="teams-organisations-and-container">
//           <ul className="team-building-excellence-cust">
//             <li className="inspiring-retreats-tailored">
//               Teams, organisations, and individuals seeking transformative and
//               rejuvenating experiences in nature and beyond.
//             </li>
//           </ul>
//           <p className="blank-line7">&nbsp;</p>
//         </div>
//         <div className="benefits8">
//           <p className="blank-line7">Benefits</p>
//         </div>
//         <div className="ideal-for4">Ideal for</div>
//         <div className="offerings4">Offerings:</div>
//         <img className="benefit-icon4" alt="" src="/benefit-icon.svg" />
//         <div className="frame-child13" />
//         <div className="frame-child14" />
//         <img className="ideal-icon4" alt="" src="/ideal-icon.svg" />
//         <img
//           className="outdoor-services-icon1"
//           alt=""
//           src="/outdoor-services.svg"
//         />
//       </div>
//       <div
//         className="auto-layout-vertical3"
//         onClick={onAutoLayoutVerticalClick}
//       >
//         <div className="auto-layout-horizontal9">
//           <img className="frame-icon7" alt="" src="/frame1.svg" />
//         </div>
//       </div>
//       <div
//         className="auto-layout-horizontal8"
//         onClick={onAutoLayoutHorizontal1Click}
//       >
//         <img className="frame-icon7" alt="" src="/frame2.svg" />
//       </div>
//       <div className="statesecondary5" onClick={onStateSecondaryContainerClick}>
//         <div className="button5">Contact us</div>
//       </div>
//       <div className="glossary4">Glossary</div>
//       <div className="about4" onClick={onAboutTextClick}>
//         About
//       </div>
//       <div className="home4">Home</div>
//       <div className="rent-a-skill4">Rent- a- skill</div>
//       <div className="services4" onClick={onServicesTextClick}>
//         Services
//       </div>
//       <div className="contact4" onClick={onContactTextClick}>
//         Contact
//       </div>
//       <div className="our-services-4-child" />
//     </div>
//   );
// };
