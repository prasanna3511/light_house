import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices7.css";
import "./OurServices3.css";
import axios from "axios";

const OurServices7 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/our-services6");
  }, [navigate]);

  const onAutoLayoutHorizontal1Click = useCallback(() => {
    navigate("/our-services8");
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
    let typeToFetch = "writing";
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
    let typeToFetch = "writing";
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
    let typeToFetch = "writing";
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
        id: 30,
        value: text,
      });
      console.log(cardResponse.data);
    } else if(id2) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 31,
        value: text1,
      });
      console.log(cardResponse.data);
    }
    else if(id3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 32,
        value: text2,
      });
      console.log(cardResponse.data);
    } else if(id4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/service_page.php", {
        id: 33,
        value: text3,
      });
      console.log(cardResponse.data);
    }
  }

  
  return (
    <div className="our-services-7">
      <img className="vector-icon2" alt="" src="/vector.svg" />
      <img className="vector-icon3" alt="" src="/vector1.svg" />
      <img className="icon2" alt="" src="/2-1@2x.png" />
      <div className="rectangle-parent2">
        <div className="frame-child12" />
        <div className="writing-and-editorial">
          Writing and Editorial Services
        </div>
        <div className="copywriting-excellence-articu-container">
          <ul className="copywriting-excellence-articu">
            <li className="enhance-the-quality">
            {text}
            {  edit &&(
              <input placeholder="Enter text"
                         value={text}
                         onChange={(e) => {setText(e.target.value),setId1(true)}}
                         />
            )}
            </li>
          </ul>
          <p className="blank-line2">&nbsp;</p>
          <ul className="copywriting-excellence-articu">
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
        <div className="enhance-the-quality-container">
          <ul className="copywriting-excellence-articu">
            <li className="enhance-the-quality">
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
        <div className="authors-corporations-and-container">
          <ul className="copywriting-excellence-articu">
          {text3}
          {  edit &&(
            <input placeholder="Enter text"
                       value={text3}
                       onChange={(e) => {setText3(e.target.value),setId4(true)}}
                       />
          )}
          </ul>
        </div>
        <div className="benefits2">
          <p className="blank-line2">Benefits</p>
        </div>
        <div className="ideal-for1">Ideal for</div>
        <div className="offerings1">Offerings:</div>
        <img className="benefit-icon1" alt="" src="/benefit-icon.svg" />
        <div className="frame-child1" />
        <div className="frame-child2" />
        <img className="ideal-icon1" alt="" src="/ideal-icon.svg" />
        <img className="editor-icon1" alt="" src="/editor-icon1.svg" />
      </div>
      <div className="auto-layout-vertical4" onClick={onAutoLayoutVerticalClick}>
        <div className="auto-layout-horizontal9">
          <img className="frame-icon1" alt="" src="/frame1.svg" />
        </div>
      </div>
      <div
        className="auto-layout-horizontal10"
        onClick={onAutoLayoutHorizontal1Click}
      >
        <img className="frame-icon1" alt="" src="/frame2.svg" />
      </div>
      <div className="statesecondary2" onClick={onStateSecondaryContainerClick}>
        <div className="button2">Contact us</div>
      </div>
      <div className="glossary1">Glossary</div>
      <div className="about1" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home1">Home</div>
      <div className="rent-a-skill1">Rent- a- skill</div>
      <div className="services1" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact1" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-7-child" onClick={onLineClick} />
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

export default OurServices7;
