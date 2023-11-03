import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices1.css";
import"./OurServices3.css";
import axios from "axios";

import NavBar from "./NavBar";

const OurServices1 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
 const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")
 
  const [text4, setText4] = useState("")
  const [text5, setText5] = useState("")  
 
  const [text6, setText6] = useState("") 
  
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

  const handleEdit = () => {
    setEdit(true);
  };

  useEffect(() => {
    fetchofferingData();
    fetchbenefitsData();
    fetchidealData();
  }, []);

  const fetchofferingData = () => {
    let typeToFetch = "personaldevlopment";
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
          setText2(responseData.data?.services[2]?.value);
          setText3(responseData.data?.services[3]?.value);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const fetchbenefitsData = () => {
    let typeToFetch = "personaldevlopment";
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
          setText4(responseData.data?.services[0]?.value);
          setText5(responseData.data?.services[1]?.value);
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
    let typeToFetch = "personaldevlopment";
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
          setText6(responseData.data?.services[0]?.value);
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
  const [id5,setId5] = useState(false);
  const [id6,setId6] = useState(false);
  const [id7,setId7] = useState(false);
  
  const handleSave = async() => {
    setEdit(false);
    if (id1) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 1,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 2,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 3,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 4,
        value: text3,
      });
      console.log(cardResponse.data);
    } else if(id5) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 5,
        value: text4,
      });
      console.log(cardResponse.data);
    } else if(id6) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 6,
        value: text5,
      });
      console.log(cardResponse.data);
    }
    else if(id7) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 7,
        value: text6,
      });
      console.log(cardResponse.data);
    }

  }
  return (
    <div className="our-services-1">
    
      <img className="icon9" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
      <div className="frame-child12" />
      <div className="personal-development-and">
          Personal Development and Holistic Growth
        </div>
        <div className="transformative-coaching-publi-container">
          <p className="blank-line17">&nbsp;</p>
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
              T{text}
              {  edit &&(
                <input placeholder="Enter text"
                           value={text}
                           onChange={(e) => {setText(e.target.value),setId1(true)}}
                           />
              )}</li>
              </ul>
              <p className="blank-line17">&nbsp;</p>
              <ul className="transformative-coaching-publi">
              <li className="positive-habit-building">
              {text1}
              {  edit &&(
                <input placeholder="Enter text"
                value={text1}
                onChange={(e) => {setText1(e.target.value),setId2(true)}}
                />
                )}</li>
                </ul>
                <p className="blank-line17">&nbsp;</p>
                <ul className="transformative-coaching-publi">
                <li className="positive-habit-building">
                {text2}
                {  edit &&(
                  <input placeholder="Enter text"
                  value={text2}
                  onChange={(e) => {setText2(e.target.value),setId3(true)}}
                  />
                  )} </li>
                  </ul>
                  <p className="blank-line17">&nbsp;</p>
                  <ul className="transformative-coaching-publi">
                  <li className="positive-habit-building">
                  {text3}
                  {  edit &&(
                    <input placeholder="Enter text"
                           value={text3}
                           onChange={(e) =>{ setText3(e.target.value),setId4(true)}}
                           />
              )}
              </li>
          </ul>
        </div>
        <div className="navigate-your-transformative-container">
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
            {text4}
            
            
            {edit && (
              <input
              placeholder="Enter text"
                  value={text4}
                  onChange={(e) => {setText4(e.target.value),setId5(true)}}
                />
              )}       </li>
            <li className="positive-habit-building">
              {text5}
            {edit && (
              <input
                placeholder="Enter text"
                value={text5}
                onChange={(e) => {setText5(e.target.value),setId6(true)}}
              />
            )}  
            </li>
          </ul>
        </div>
        <div className="individuals-seeking-personal-container">
          <ul className="transformative-coaching-publi">
            <li className="positive-habit-building">
            {text6}
         
            {edit && (
              <input
                  placeholder="Enter text" className="input6"
                  value={text6}
                  onChange={(e) => {setText6(e.target.value),setId7(true)}}
                  />
              )}     </li>
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
              <NavBar/>
              
      <div className="our-services-1-child" />
      <div
        className="auto-layout-horizontal13"
        onClick={onAutoLayoutHorizontalClick}
      >
        <img className="frame-icon13" alt="" src="/frame2.svg" />
      </div>
      {edit ? (
        <>
          <button className="Save" onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      {isAuthenticated &&
      <button  className="edit" onClick={handleEdit}>EDIT</button>
      }
    </div>
  );
};

export default OurServices1;
      // <img className="vector-icon14" alt="" src="/vector3.svg" />
      // <img className="vector-icon15" alt="" src="/vector4.svg" />
//       import { useCallback,useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OurServices1.css";
// import"./OurServices3.css";

// const OurServices1 = () => {
//   const navigate = useNavigate();
//   const [edit, setEdit] = useState(false);
//   const [text, setText] = useState("");

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

//   const onAutoLayoutHorizontalClick = useCallback(() => {
//     navigate("/our-services2");
//   }, [navigate]);
//   const handleEdit = () => {
//     setEdit(true);
//   };

//   const handleSave = () => {
//     setEdit(false);
//   setText(text);
//   }
//   return (
//     <div className="our-services-1">



//       <img className="icon9" alt="" src="/2-1@2x.png" />
//       <div className="rectangle-parent2">
//         <div className="frame-child18" />
//         <div className="personal-development-and">
//           Personal Development and Holistic Growth
//         </div>
//         <div className="transformative-coaching-publi-container">
//           <p className="blank-line17">&nbsp;</p>
//           <ul className="transformative-coaching-publi">
//             <li className="positive-habit-building">
//               Transformative Coaching: Public Speaking, Executive Guidance, and
//               Mentoring to unlock your true potential
//             </li>
//           </ul>
//           <p className="blank-line17">&nbsp;</p>
//           <ul className="transformative-coaching-publi">
//             <li className="positive-habit-building">
//               Meditative Practices: Traditional, Walking, and Customised Guided
//               Meditations for holistic well-being.
//             </li>
//           </ul>
//           <p className="blank-line17">&nbsp;</p>
//           <ul className="transformative-coaching-publi">
//             <li className="positive-habit-building">
//               Transformational Breathing Sessions: Breathe your way to a
//               balanced and harmonious life.
//             </li>
//           </ul>
//           <p className="blank-line17">&nbsp;</p>
//           <ul className="transformative-coaching-publi">
//             <li className="positive-habit-building">
//               Positive Habit Building: Tailored trainings to foster and sustain
//               healthy life habits.
//             </li>
//           </ul>
//         </div>
//         <div className="navigate-your-transformative-container">
//           <ul className="transformative-coaching-publi">
//             <li className="positive-habit-building">
//               Navigate your transformative journey with personalised trainings
//               and holistic growth services
//             </li>
//             <li className="positive-habit-building">
//               Unlocking realms of potential and paths to self-discovery
//             </li>
//           </ul>
//         </div>
//         <div className="individuals-seeking-personal-container">
//           <ul className="transformative-coaching-publi">
//             <li className="positive-habit-building">
//               Individuals seeking personal growth, self-discovery, balance, and
//               holistic well-being.
//             </li>
//             {edit && (
//               <input
//                 className="the-only-constant-textfield11"
//                 placeholder="Enter text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//               />
//             )}
//           </ul>
//         </div>
//         <div className="benefits14">
//           <p className="blank-line17">Benefits</p>
//         </div>
//         <div className="ideal-for7">Ideal for</div>
//         <div className="offerings7">Offerings:</div>
//         <img
//           className="personality-dev-icon1"
//           alt=""
//           src="/personality-dev-icon1.svg"
//         />
//         <img className="benefit-icon7" alt="" src="/benefit-icon.svg" />
//         <div className="frame-child19" />
//         <div className="frame-child20" />
//         <img className="ideal-icon7" alt="" src="/ideal-icon.svg" />
//       </div>
//       <div className="statesecondary8" onClick={onStateSecondaryContainerClick}>
//         <div className="button8">Contact us</div>
//       </div>
//       <div className="glossary7">Glossary</div>
//       <div className="about7" onClick={onAboutTextClick}>
//         About
//       </div>
//       <div className="home7">Home</div>
//       <div className="rent-a-skill7">Rent- a- skill</div>
//       <div className="services7" onClick={onServicesTextClick}>
//         Services
//       </div>
//       <div className="contact7" onClick={onContactTextClick}>
//         Contact
//       </div>
//       <div className="our-services-1-child" />
//       <div
//         className="auto-layout-horizontal13"
//         onClick={onAutoLayoutHorizontalClick}
//       >
//         <img className="frame-icon13" alt="" src="/frame2.svg" />
//       </div>
//       {edit ? (
//         <>
//           <button onClick={handleSave}>Save</button>
//         </>
//       ) : (
//         <></>
//       )}
//       <button onClick={handleEdit}>EDIT</button>
//     </div>
//   );
// };

// export default OurServices1;