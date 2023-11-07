import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices6.css";
import "./OurServices3.css";
import "./LandingPage.css";
import axios from "axios";

const OurServices6 = () => {
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
    navigate("/our-services5");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services7");
  }, [navigate]);

  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);
  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
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
    let typeToFetch = "languageculture";
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
    let typeToFetch = "languageculture";
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
    let typeToFetch = "languageculture";
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
        id: 26,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 27,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 28,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 29,
        value: text3,
      });
      console.log(cardResponse.data);
    }
  }


  return (
    <div className="our-services-6">
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
        <div className="services21" >
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
        <div className="rent-a-skill21mbl">Rent- a- Skill</div>
        <div className="glossary21mbl">Glossary</div>
        <div className="about16mbl" onClick={onAboutTextClick}>
          About
        </div>
        <div className="home16mbl">Home</div>
        <div className="services21mbl" onClick={onServicesTextClick}>
          Services
        </div>
        <div className="contact16mbl" onClick={onContactTextClick}>
          Contact
        </div>
      </div>
        </div>
      )}
      <img className="icon3" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child12" />
        <div className="language-and-cultural">
          Language and Cultural Services
        </div>
        <div className="translation-excellence-dutch-container">
          <ul className="translation-excellence-dutch-">
            <li className="communicate-seamlessly-and">
            {text}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => {setText(e.target.value),setId1(true)}}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line3">&nbsp;</p>
          <ul className="translation-excellence-dutch-">
            <li>
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
        <div className="communicate-seamlessly-and-container">
          <ul className="translation-excellence-dutch-">
            <li className="communicate-seamlessly-and">
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
        <div className="individuals-and-organisations-container">
          <ul className="translation-excellence-dutch-">
          {text3}
          {  edit &&(
            <input placeholder="Enter text"
                       value={text3}
                       onChange={(e) => {setText3(e.target.value),setId4(true)}}
                       />
          )}
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
        className="auto-layout-vertical4 "
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal9">
          <img className="frame-icon3" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal10"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon3" alt="" src="/frame2.svg" />
      </div>
      
      
      <div className="our-services-6-child" />
      {edit ? (
        <>
          <button className="Save6" onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      {isAuthenticated &&
      <button className="edit6" onClick={handleEdit}>EDIT</button>
      }
      </div>
  );
};

export default OurServices6;
// <img className="vector-icon4" alt="" src="/vector.svg" />
//       <img className="vector-icon5" alt="" src="/vector2.svg" />
// <div className="statesecondary3" onClick={onStateSecondaryContainerClick}>
//          <div className="button3">Contact us</div>
//        </div>