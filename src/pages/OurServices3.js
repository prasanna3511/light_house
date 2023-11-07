import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices3.css";
import axios from "axios";

import NavBar from "./NavBar";

const OurServices3 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");

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
  const onServicesTextClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLineClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);
  
  const handleEdit = () => {
    setEdit(true);
  };


  useEffect(() => {
    fetchofferingData();
    fetchbenefitsData();
    fetchidealData();
  }, []);

  const fetchofferingData = () => {
    let typeToFetch = "traninglearning";
    let categoryToFetch = "offerings";
    axios
      .get("https://thelighthouseweb.co/service_page.php", {
        params: {
          title: typeToFetch,
          category:categoryToFetch
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data);
          setText(responseData.data?.services[0]?.value);
          setText1(responseData.data?.services[1]?.value);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const fetchbenefitsData = () => {
    let typeToFetch = "traninglearning";
    let categoryToFetch = "benefits";
    axios
      .get("https://thelighthouseweb.co/service_page.php", {
        params: {
          title: typeToFetch,
          category:categoryToFetch
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data);
          setText2(responseData.data?.services[0]?.value);
          // setText5(responseData.data?.services[1]?.value);
          // setText2(responseData.data?.services[2]?.value);
          // setText3(responseData.data?.services[3]?.value);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const fetchidealData = () => {
    let typeToFetch = "traninglearning";
    let categoryToFetch = "ideal";
    axios
      .get("https://thelighthouseweb.co/service_page.php", {
        params: {
          title: typeToFetch,
          category:categoryToFetch
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data);
          setText3(responseData.data?.services[0]?.value);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const [id1,setId1] = useState(false);
  const [id2,setId2] = useState(false);
  const [id3,setId3] = useState(false);
  const [id4,setId4] = useState(false);

  
  const handleSave = async() => {
    setEdit(false);
    if (id1) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 12,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 13,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 14,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 15,
        value: text3,
      });
      console.log(cardResponse.data);
    }
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
                         onChange={(e) => {setText(e.target.value),setId1(true)}}
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
                         onChange={(e) => {setText1(e.target.value),setId2(true)}}
                         />
            )}
            </li>
          </ul>
        </div>
        <div className="enhance-organizational-and-container3">
          <ul className="customisable-trainings-leader">
            <li className="enhance-organizational-and3">
            {text2}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text2}
                         onChange={(e) => {setText2(e.target.value),setId3(true)}}
                         />
            )}
            </li>
          </ul>
        </div>
        <div className="organizations-and-individuals-container3">
          <ul className="customisable-trainings-leader">
            <li className="enhance-organizational-and3">
            {text3}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text3}
                         onChange={(e) => {setText3(e.target.value),setId4(true)}}
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
      <button className="button-menu" style={{width:'70px',height:"40px",color:"#bf9f45",backgroundColor:"transparent",backdropFilter:"blur(20px)", position:"absolute",top:"10px",right:"20px"}} onClick={toggleMobileNav}>
        ☰ 
      </button>
      {!isMobileNavOpen &&
      <div className="navbarnew">
     
        <div className="rent-a-skill21">Rent- a- Skill</div>
        <div className="glossary21">Glossary</div>
        <div className="about16" onClick={onAboutTextClick}>
          About
        </div>
        <div className="home16" onClick={onHomeTextClick}>Home</div>
        <div className="services21" onClick={onServicesTextClick}>
          Services
        </div>
        <div className="contact16" onClick={onContactTextClick}>
          Contact
        </div>
      </div>
      }
      {isMobileNavOpen && (
        <div className="navbar-mobile">
          {/* ... (mobile nav items) */}
          <div className="navbarnewmobile">
          <div className="home16mbl"  onClick={onHomeTextClick}>Home</div>
          <div className="about16mbl" onClick={onAboutTextClick}>
              About
            </div>
            
            <div className="services21mbl" onClick={onServicesTextClick}>
              Services
            </div>
            <div className="rent-a-skill21mbl">Rent- a- Skill</div>
            <div className="glossary21mbl">Glossary</div>
            
            <div className="contact16mbl" onClick={onContactTextClick}>
              Contact
            </div>
          </div>
            </div>
      )}

      <div className="our-services-3-child" onClick={onLineClick} />
      {edit ? (
        <>
          <button className="Save3"  onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      {isAuthenticated &&
      <button className="edit3" onClick={handleEdit}>EDIT</button>
      }
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