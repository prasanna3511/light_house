import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices4.css";
import "./OurServices3.css";
import axios from "axios";

const OurServices4 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
 const [text4, setText4] = useState("");
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

  useEffect(() => {
    fetchofferingData();
    fetchbenefitsData();
    fetchidealData();
  }, []);

  const fetchofferingData = () => {
    let typeToFetch = "experientialoutdoor";
    let categoryToFetch = "offerings";
    axios
      .get("http://localhost:3000/service_page.php", {
        params: {
          title: typeToFetch,
          category:categoryToFetch
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("API response", responseData.data);
          setText(responseData.data?.services[0]?.value);
          setText1(responseData.data?.services[1]?.value);
          setText2(responseData.data?.services[2]?.value);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const fetchbenefitsData = () => {
    let typeToFetch = "experientialoutdoor";
    let categoryToFetch = "benefits";
    axios
      .get("http://localhost:3000/service_page.php", {
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
    let typeToFetch = "experientialoutdoor";
    let categoryToFetch = "ideal";
    axios
      .get("http://localhost:3000/service_page.php", {
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
  
  const handleSave = async() => {
    setEdit(false);
    if (id1) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 16,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 17,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 18,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 19,
        value: text3,
      });
      console.log(cardResponse.data);
    }
    else if(id5) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 20,
        value: text4,
      });
      console.log(cardResponse.data);
    }
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
                         onChange={(e) => {setText(e.target.value),setId1(true)}}
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
                         value={text1}
                         onChange={(e) => {setText1(e.target.value),setId2(true)}}
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
                         onChange={(e) => {setText2(e.target.value),setId3(true)}}
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
                         onChange={(e) => {setText3(e.target.value),setId4(true)}}
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
                         onChange={(e) => {setText4(e.target.value),setId5(true)}}
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
      {isAuthenticated &&
      <button className="edit1" onClick={handleEdit}>EDIT</button>
      }
 
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
