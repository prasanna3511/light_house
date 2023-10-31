import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage1.css";
import "./LandingPage.css";
import { Box } from "@material-ui/core";
import axios from "axios";

const AboutPage1 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [id2, setId2] = useState(false);

  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);


  const onStateSecondaryContainer1Click = useCallback(() => {
    navigate("/about-page11");
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

  const onReadMoreTextClick = useCallback(() => {
    navigate("/about-page11");
  }, [navigate]);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = async () => {
    if (id2) {
      const cardResponse = await axios.put("http://192.168.29.255:3000/about.php", {
        id: 2,
        title: text,
        short_description: text3,
        long_description: text4,
        position: "top",
      });
      console.log(cardResponse.data);
    } else {
      const cardResponse = await axios.put("http://192.168.29.255:3000/about.php", {
        id: 1,
        title: text,
        short_description: text1,
        long_description: text2,
        position: "top",
      });
      console.log(cardResponse.data);
    }
    setEdit(false);
  };

  useEffect(() => {
    fetchHeaderTopData();
  }, []);

  const fetchHeaderTopData = () => {
    let typeToFetch = "top";
    axios
      .get("http://192.168.29.255:3000/about.php", {
        params: {
          position: typeToFetch,
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data);
          setText(responseData.data?.cards[0]?.title);
          setText1(responseData.data?.cards[0]?.short_description);
          setText2(responseData.data?.cards[0]?.long_description);
          setText3(responseData.data?.cards[1]?.short_description);
          setText4(responseData.data?.cards[1]?.long_description);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  return (
    <div className="about-page-1">
      <img className="vector-icon52" alt="" src="/Aboutpage-1.png" />
      <mg className="icon24" alt="" src="/2-1@2x.png" />
      <div
        className="statesecondary17"
        onClick={onStateSecondaryContainerClick}
      >
        <div className="button29">Read more</div>
      </div>
      <div
        className="statesecondary18"
        onClick={onStateSecondaryContainer1Click}
      >
        <div className="button29">Explore our vision, mission</div>
      </div>
      <div className="statesecondary19">
        <div className="button29">Discover our services</div>
      </div>

      <div className="rent-a-skill21">Rent- a- Skill</div>
      <div className="glossary21">Glossary</div>
      <div className="about16">About</div>
      <div className="home16" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services21" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact16" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="about-page-1-child" />
      <div className="who-we-are-group">
        <div className="who-we-are1">Who We Are.</div>

       
        {edit ? (
          <Box
            style={{ width: "90%", display: "flex", flexDirection: "column" }}
          >
            <input
              style={{ width: "100%", height: "30px", marginBottom: "20px" }}
              placeholder="Enter text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              style={{ width: "100%", height: "30px", marginBottom: "20px" }}
              placeholder="Enter text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
            />
            <input
              style={{ width: "100%", height: "30px", marginBottom: "20px" }}
              placeholder="Enter text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            />
            <input
              style={{ width: "100%", height: "30px", marginBottom: "20px" }}
              placeholder="Enter text"
              value={text3}
              onChange={(e) => {
                setText3(e.target.value), setId2(true);
              }}
            />
            <input
              style={{ width: "100%", height: "30px", marginBottom: "20px" }}
              placeholder="Enter text"
              value={text4}
              onChange={(e) => {
                setText4(e.target.value), setId2(true);
              }}
            />
            <button onClick={handleSave}>Save</button>
          </Box>
        ) : (
          <>
            <div className="the-only-constant1">{text}</div>
            <div className="at-the-lighthouse-container">
              <p className="bringing-the-path">{text1}</p>
              <p className="bringing-the-path">&nbsp;</p>
              <p className="bringing-the-path">{text2}</p>
              <p className="bringing-the-path">&nbsp;</p>
              <p className="bringing-the-path">{text3}</p>
              <p className="bringing-the-path">&nbsp;</p>
              <p className="bringing-the-path">{text4}</p>
            </div>
            {isAuthenticated && <button onClick={handleEdit}>EDIT</button>}
            <div className="read-more" onClick={onReadMoreTextClick}>
          Read more.
        </div>
          </>
          
        )}
        <div className="lets-light-up6">Let’s light up our lives!</div>
        <div className="statesecondary20">
          <div className="button29">Read less</div>
        </div>
        <div className="statesecondary21">
          <div className="button29">Explore our vision, mission</div>
        </div>
        <div className="statesecondary22">
          <div className="button29">Discover our services</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage1;
// <img className="vector-icon52" alt="" src="/vector23.svg" />
// <img className="vector-icon53" alt="" src="/vector24.svg" />
//  <img className="vector-icon54" alt="" src="/vector25.svg" />
// <img className="icon24" alt="" src="/2-1@2x.png" />
