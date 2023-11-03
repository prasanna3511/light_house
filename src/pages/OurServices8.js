import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices8.css";
import "./OurServices3.css";
import "./LandingPage.css";
import axios from "axios";

const OurServices8 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
 const [text4, setText4] = useState("");
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

  useEffect(() => {
    fetchofferingData();
    fetchbenefitsData();
    fetchidealData();
  }, []);

  const fetchofferingData = () => {
    let typeToFetch = "comprehensive";
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
    let typeToFetch = "comprehensive";
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
    let typeToFetch = "comprehensive";
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
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 34,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 35,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 36,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 37,
        value: text3,
      });
      console.log(cardResponse.data);
    }
    else if(id5) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 38,
        value: text4,
      });
      console.log(cardResponse.data);
    }
  }
  
  return (
    <div className="our-services-8">

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
                         onChange={(e) => {setText(e.target.value),setId1(true)}}
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
                         onChange={(e) => {setText1(e.target.value),setId2(true)}}
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
                         onChange={(e) => {setText2(e.target.value),setId3(true)}}
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
                         onChange={(e) => {setText3(e.target.value),setId4(true)}}
                         />
            )}
          </ul>
        </div>
        <div className="organisations-aspiring-to-container">
          <ul className="holistic-individual-and-team-e">
          <li className="holistic-individual-and">
            {text4}
            </li>
          </ul>
          {  edit &&(
            <input placeholder="Enter text"
                       value={text4}
                       onChange={(e) => {setText4(e.target.value),setId5(true)}}
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
      <div className="glossary21">Glossary</div>
      <div className="about16" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home16" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="rent-a-skill21">Rent- a- skill</div>
      <div className="services21" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact16" onClick={onContactTextClick}>
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
      {isAuthenticated &&
      <button className="edit"  onClick={handleEdit}>EDIT</button>
    }
  
      </div>
  );
};

export default OurServices8;
// <img className="vector-icon" alt="" src="/vector.svg" />
// <img className="vector-icon1" alt="" src="/vector1.svg" />