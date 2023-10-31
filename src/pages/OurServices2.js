import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices2.css";
import "./OurServices3.css";
import axios from "axios";
import "./LandingPage.css";
const OurServices2 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
  
  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services1");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services3");
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


  useEffect(() => {
    fetchofferingData();
    fetchbenefitsData();
    fetchidealData();
  }, []);

  const fetchofferingData = () => {
    let typeToFetch = "creativeexpressive";
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
    let typeToFetch = "creativeexpressive";
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
    let typeToFetch = "creativeexpressive";
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
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 8,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 9,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 10,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("http://localhost:3000/service_page.php", {
        id: 11,
        value: text3,
      });
      console.log(cardResponse.data);
    }
  }

 
  return (
    <div className="our-services-2">
    


      <img className="icon8" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child12" />
        <div className="creative-and-expressive">
          Creative and Expressive Services
        </div>
        <div className="innovative-creative-writing-container">
          <p className="blank-line14">&nbsp;</p>
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
               {text}
              {  edit &&(
                <input placeholder="Enter text"
                           value={text}
                           onChange={(e) => {setText(e.target.value),setId1(true)}}
                           />
              )}
            </li>
          </ul>
          <p className="blank-line14">&nbsp;</p>
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
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
        <div className="elevate-your-brand-container">
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
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
        <div className="brands-corporations-and-container">
          <ul className="innovative-creative-writing-s">
            <li className="innovative-creative-writing">
            {text3}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text3}
                         onChange={(e) =>{ setText3(e.target.value),setId4(true)}}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line14">&nbsp;</p>
        </div>
        <div className="benefits12">
          <p className="blank-line14">Benefits</p>
        </div>
        <div className="ideal-for6">Ideal for</div>
        <div className="offerings6">Offerings:</div>
        <img className="benefit-icon6" alt="" src="/benefit-icon.svg" />
        <div className="frame-child16" />
        <div className="frame-child17" />
        <img className="ideal-icon6" alt="" src="/ideal-icon.svg" />
        <img
          className="creative-services-icon1"
          alt=""
          src="/creative-services1.svg"
        />
      </div>
      <div
        className="auto-layout-vertical4"
        onClick={onAutoLayoutVerticalClick}
      >
        <div className="auto-layout-horizontal9">
          <img className="frame-icon11" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal10"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon11" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary7" onClick={onStateSecondaryContainerClick}>
        <div className="button7">Contact us</div>
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
      <div className="our-services-2-child" onClick={onLineClick} />
      {edit ? (
        <>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      {isAuthenticated &&
      <button className="edit" onClick={handleEdit}>EDIT</button>
      }
      </div>
  
  );
};

export default OurServices2;
