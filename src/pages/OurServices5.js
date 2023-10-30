import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices5.css";
import "./OurServices3.css";
import axios from "axios";

const OurServices5 = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
 const [text4, setText4] = useState("");
  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services4");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services6");
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
 
  const handleEdit = () => {
    setEdit(true);
  };

  useEffect(() => {
    fetchofferingData();
    fetchbenefitsData();
    fetchidealData();
  }, []);

  const fetchofferingData = () => {
    let typeToFetch = "brandingstrategic";
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
    let typeToFetch = "brandingstrategic";
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
    let typeToFetch = "brandingstrategic";
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
        id: 21,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 22,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 23,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 24,
        value: text3,
      });
      console.log(cardResponse.data);
    }
    else if(id5) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 25,
        value: text4,
      });
      console.log(cardResponse.data);
    }
  }

  return (
    <div className="our-services-5">
    
      
      <img className="icon5" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child6" />
        <div className="branding-and-strategic">
          Branding and Strategic Communication
        </div>
        <div className="strategic-branding-cohesive-container">
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
            {text}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => {setText(e.target.value),setId1(true)}}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line4">&nbsp;</p>
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
            {text1}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text1}
                         onChange={(e) => {setText1(e.target.value),setId2(true)}}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line4">&nbsp;</p>
          <ul className="strategic-branding-cohesive-a">
            <li>
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
        <div className="strengthen-your-brand-container">
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
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
        <div className="brands-and-organisations-container">
          <ul className="strategic-branding-cohesive-a">
            <li className="strategic-branding-cohesive">
               {text4}
              {  edit &&(
                <input placeholder="Enter text"
                           value={text4}
                           onChange={(e) => {setText4(e.target.value),setId5(true)}}
                           />
              )}
            </li>
          </ul>
          <p className="blank-line4">&nbsp;</p>
        </div>
        <div className="benefits6">
          <p className="blank-line4">Benefits</p>
        </div>
        <div className="ideal-for3">Ideal for</div>
        <div className="offerings3">Offerings:</div>
        <img className="benefit-icon3" alt="" src="/benefit-icon.svg" />
        <div className="frame-child7" />
        <div className="frame-child8" />
        <img className="ideal-icon3" alt="" src="/ideal-icon.svg" />
        <img className="branding-icon1" alt="" src="/branding-icon1.svg" />
      </div>
      <div
        className="auto-layout-vertical4"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal9">
          <img className="frame-icon5" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal10"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon5" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary4" onClick={onStateSecondaryContainerClick}>
        <div className="button4">Contact us</div>
      </div>
      <div className="glossary3">Glossary</div>
      <div className="about3" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home3">Home</div>
      <div className="rent-a-skill3">Rent- a- skill</div>
      <div className="services3" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact3" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-5-child" onClick={onLineClick} />
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

export default OurServices5;
// <img className="vector-icon7" alt="" src="/vector2.svg" />