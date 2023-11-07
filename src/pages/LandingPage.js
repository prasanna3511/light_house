import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import axios from "axios";
import { Box, TextField } from "@material-ui/core";

const LandingPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [edit, setEdit] = useState(false);
  const [edit1, setEdit1] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [text1, setText1] = useState("");
  const [text3, setText3] = useState("");
  const [text, setText] = useState("");

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

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

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = async () => {
    const cardResponse = await axios.put(
      "https://thelighthouseweb.co/home.php",
      {
        id: 1,
        description: text1,
      }
    );
    const cardResponse1 = await axios.put(
      "https://thelighthouseweb.co/home.php",
      {
        id: 2,
        description: text3,
      }
    );
    const cardResponse2 = await axios.put(
      "https://thelighthouseweb.co/home.php",
      {
        id: 3,
        description: text,
      }
    );

    // console.log(cardResponse.data);
    setEdit(false);
    setText(text);
  };

  const handleEdit1 = () => {
    setEdit1(true);
  };
  const handleSave1 = () => {
    setEdit1(false);
    setText1(text1);
  };
  const handleEdit3 = () => {
    setEdit3(true);
  };
  const handleSave3 = () => {
    setEdit3(false);
    setText3(text3);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = () => {
    axios
      .get("https://thelighthouseweb.co/home.php")
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          console.log("homefetch", responseData.data.cards[1]?.description);
          setText1(responseData?.data.cards[0]?.description);
          setText3(responseData?.data.cards[1]?.description);
          setText(responseData?.data.cards[2]?.description);
        } else {
          console.error("Error fetching employees data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching employees data:", error);
      });
  };

  return (
    <div className="landing-page">
      <img
        className="the-lighthouse-logo-no-tagline"
        alt=""
        src="/the-lighthouse-logo-no-tagline-loose-text-1-1@2x.png"
      />
      <img className="icon24" alt="" src="/2-1@2x.png" />
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
        <div className="home16">Home</div>
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
      <div className="home16mbl">Home</div>
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
            <Box
              style={{ width: "90%", display: "flex", flexDirection: "column" }}
            >
              <input
                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
                placeholder="Enter text"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
              <input
                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
                placeholder="Enter text"
                value={text3}
                onChange={(e) => setText3(e.target.value)}
              />
              <input
                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </Box>
          ) : (
            <>
              <p className="the-lighthouse-">
                {text1.split("\n").map((item, key) => (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                ))}
              </p>
              <p className="the-lighthouse-">&nbsp;</p>
              <p className="the-lighthouse-">{text3}</p>
              <p className="the-lighthouse-">&nbsp;</p>
              <p className="the-lighthouse-">{text}</p>
              {isAuthenticated && <button onClick={handleEdit}>EDIT</button>}
            </>
          )}
        </div>
        <div className="stateprimary12" onClick={onStatePrimaryContainerClick}>
          <div className="button35">discover our services</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
<img className="vector-icon55" alt="" src="/vector26.svg" />;
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
