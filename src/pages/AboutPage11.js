import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage11.css";
import "./LandingPage.css";
import axios from "axios";

const AboutPage11 = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const [edit, setEdit] = useState(false);
  const [edit1, setEdit1] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");
  const [text11, setText11] = useState("");
  const [text12, setText12] = useState("");
  const [text13, setText13] = useState("");
  const [text14, setText14] = useState("");
  const [text15, setText15] = useState("");

  const [text16, setText16] = useState("");
  const [text17, setText17] = useState("");
  const [text18, setText18] = useState("");
  const [text19, setText19] = useState("");
  const [text20, setText20] = useState("");

  const onStateSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onStateSecondaryContainer2Click = useCallback(() => {
    navigate("/our-services-main-page");
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

  const onReadLessTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onStateSecondaryContainer3Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleEdit1 = () => {
    setEdit1(true);
  };
  const handleEdit2 = () => {
    setEdit2(true);
  };
  const [id3, setId3] = useState(false);
  const [id4, setId4] = useState(false);
  const [id5, setId5] = useState(false);
  const [bid1, setBid1] = useState(false);
  const [bid2, setBid2] = useState(false);
  const [bid3, setBid3] = useState(false);
  const [bid4, setBid4] = useState(false);
  const [bid5, setBid5] = useState(false);

  const handleSave = async () => {
    if (id3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 4,
        title: text,
        short_description: text3,
        long_description: text4,
        position: "middle",
      });
      console.log(cardResponse.data);
    } else if (id4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 5,
        title: text,
        short_description: text5,
        long_description: text6,
        position: "middle",
      });
      console.log(cardResponse.data);
    } else {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 3,
        title: text,
        short_description: text1,
        long_description: text2,
        position: "middle",
      });
      console.log(cardResponse.data);
    }
    setEdit(false);
    // setEdit(false);
  };

  const handleSave1 = async () => {
    if (id5) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 6,
        title: text7,
        short_description: "-",
        long_description: text8,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    } else {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 7,
        title: text9,
        short_description: "-",
        long_description: text10,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    }
    setEdit1(false);
  };

  const handleSave2 = async () => {
    if (bid1) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 8,
        title: text11,
        short_description: "-",
        long_description: text16,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    } else if(bid2) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 9,
        title: text12,
        short_description: "-",
        long_description: text17,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    }
    else if(bid3) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 10,
        title: text13,
        short_description: "-",
        long_description: text18,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    }
    else if(bid4) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 11,
        title: text14,
        short_description: "-",
        long_description: text19,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    }
    else if(bid5) {
      const cardResponse = await axios.put("https://thelighthouseweb.co/about.php", {
        id: 12,
        title: text15,
        short_description: "-",
        long_description: text20,
        position: "middlecard",
      });
      console.log(cardResponse.data);
    }
    setEdit2(false);
  };

  useEffect(() => {
    fetchHeaderTopData();
    fetchVisionData();
    fetchValueData();
  }, []);

  const fetchHeaderTopData = () => {
    let typeToFetch = "middle";
    axios
      .get("https://thelighthouseweb.co/about.php", {
        params: {
          position: typeToFetch,
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data.cards);
          setText(responseData.data?.cards[0]?.title);
          setText1(responseData.data?.cards[0]?.short_description);
          setText2(responseData.data?.cards[0]?.long_description);
          setText3(responseData.data?.cards[1]?.short_description);
          setText4(responseData.data?.cards[1]?.long_description);
          setText5(responseData.data?.cards[2]?.short_description);
          setText6(responseData.data?.cards[2]?.long_description);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const fetchVisionData = () => {
    let typeToFetch = "middlecard";
    axios
      .get("https://thelighthouseweb.co/about.php", {
        params: {
          position: typeToFetch,
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data.cards);
          setText7(responseData.data?.cards[0]?.title);
          setText8(responseData.data?.cards[0]?.long_description);
          // setText2(responseData.data?.cards[0]?.long_description);
          setText9(responseData.data?.cards[1]?.title);
          setText10(responseData.data?.cards[1]?.long_description);
          // setText5(responseData.data?.cards[2]?.short_description);
          // setText6(responseData.data?.cards[2]?.long_description);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  const fetchValueData = () => {
    let typeToFetch = "bottomcard";
    axios
      .get("https://thelighthouseweb.co/about.php", {
        params: {
          position: typeToFetch,
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.message === "Data fetched successfully") {
          // setCardData(responseData.data.cards);
          console.log("home API response", responseData.data.cards);
          setText11(responseData.data?.cards[0]?.title);
          setText12(responseData.data?.cards[1]?.title);
          setText13(responseData.data?.cards[2]?.title);
          setText14(responseData.data?.cards[3]?.title);
          setText15(responseData.data?.cards[4]?.title);

          setText16(responseData.data?.cards[0]?.long_description);
          setText17(responseData.data?.cards[1]?.long_description);
          setText18(responseData.data?.cards[2]?.long_description);
          setText19(responseData.data?.cards[3]?.long_description);
          setText20(responseData.data?.cards[4]?.long_description);


          // setText8(responseData.data?.cards[0]?.long_description);
          // // setText2(responseData.data?.cards[0]?.long_description);
          // setText9(responseData.data?.cards[1]?.title);
          // setText10(responseData.data?.cards[1]?.long_description);
          // // setText5(responseData.data?.cards[2]?.short_description);
          // // setText6(responseData.data?.cards[2]?.long_description);
        } else {
          console.error("Error fetching card data:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  };

  return (
    <div className="about-page-11">
    <img className="icon12" alt="" src="/2-1@2x.png" />
      <div
        className="statesecondary11"
        onClick={onStateSecondaryContainerClick}
      >
        <div className="button12">REad more</div>
      </div>
      <div className="statesecondary12">
        <div className="button12">EXplore our vision, mission</div>
      </div>
      <div
        className="statesecondary13"
        onClick={onStateSecondaryContainer2Click}
      >
        <div className="button12">Discover our services</div>
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
      <div className="about-page-11-child" />
      <div className="who-we-are-parent">
        <p className="the-only-constant">{text}</p>
        {edit && (
          <input
            className="the-only-constant-textfield"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <div className="who-we-are">Who We Are.</div>
        <div className="and-the-bottom-container">
          <p className="and-the-bottom">{text1}</p>
          {edit && (
            <input
              className="the-only-constant-textfield3"
              placeholder="Enter text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
            />
          )}
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">{text2}</p>
          {edit && (
            <input
              className="the-only-constant-textfield2"
              placeholder="Enter text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            />
          )}
          <p className="and-the-bottom">
            {`Rent-A-Skill is a unique service allowing you to access a wealth of expertise on a project basis. `}
            {`Whether you require specialised skills in AI, (industrial) IT, R & D, technology, creativity, or organisational empowerment, `}
          </p>
          {edit && (
            <input
              className="the-only-constant-textfield3"
              placeholder="Enter text"
              value={text3}
              onChange={(e) => {
                setText3(e.target.value), setId3(true);
              }}
            />
          )}
          <p className="and-the-bottom">{text4}</p>
          {edit && (
            <input
              className="the-only-constant-textfield3"
              placeholder="Enter text"
              value={text4}
              onChange={(e) => {
                setText4(e.target.value), setId3(true);
              }}
            />
          )}
          <p className="and-the-bottom">{text5}</p>
          {edit && (
            <input
              className="the-only-constant-textfield3"
              placeholder="Enter text"
              value={text5}
              onChange={(e) => {
                setText5(e.target.value), setId4(true);
              }}
            />
          )}
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
            {text6}
            <p className="and-the-bottom">{`We guide individuals and organisations to empower themselves to evolve and thrive in all dimensions, aligning their actions and decisions with their values, purpose, and the greater good. `}</p>
            {edit && (
              <input
                className="the-only-constant-textfield3"
                placeholder="Enter text"
                value={text6}
                onChange={(e) => {
                  setText6(e.target.value), setId4(true);
                }}
              />
            )}
          </p>
          <p className="and-the-bottom">Let’s light up our lives!</p>
        </div>
        {isAuthenticated &&
        <>
        {!edit && <button onClick={handleEdit}>EDIT</button>}
        </>
        }
        <div className="read-less" onClick={onReadLessTextClick}>
          Read less.
        </div>
      </div>
      <></>

      <div className="about-page-11-item" />
      <div className="about-page-11-inner" />
      {isAuthenticated &&
      <>
      {!edit1 && <button onClick={handleEdit1}>EDIT middle card</button>}
      </>
      }
      <div className="our-vision-mission">Our Vision, Mission, and Values</div>
      <div className="to-be-a">
        {text8}

        {edit1 && (
          <input
            className="the-only-constant-textfield3"
            placeholder="Enter text"
            value={text8}
            onChange={(e) => {setText8(e.target.value),setId5(true)}}
          />
        )}
      </div>
      <div className="embark-on-your-container">
        <p className="and-the-bottom">{`Embark on your transformative journey with The Lighthouse. `}</p>
        <p className="and-the-bottom">{`Whether you seek our services, wish to collaborate, or desire to explore our mission and vision deeper, we are here `}</p>
      </div>
      <div
        className="statesecondary14"
        onClick={onStateSecondaryContainer3Click}
      >
        <div className="button12">Connect</div>
      </div>
      <div className="statesecondary15">
        <div className="button12">converse</div>
      </div>
      <div className="statesecondary16">
        <div className="button12">co- creativise</div>
      </div>

      <div className="vision">
        {text7}
        {edit1 && (
          <input
            className="the-only-constant-textfieldvision"
            placeholder="Enter text"
            value={text7}
            onChange={(e) => {
              setText7(e.target.value), setId5(true);
            }}
          />
        )}
      </div>

      <div className="mission">
        {text9}
        {edit1 && (
          <input
            className="the-only-constant-textfield7"
            placeholder="Enter text"
            value={text9}
            onChange={(e) => setText9(e.target.value)}
          />
        )}
      </div>
      <div className="to-champion-transformative">
        {text10}
        sdfvsv
        {edit1 && (
          <input
            className="the-only-constant-textfield"
            placeholder="Enter text"
            value={text10}
            onChange={(e) => setText10(e.target.value)}
          />
        )}
      </div>
      {isAuthenticated &&
      <>
      {!edit2 && <button onClick={handleEdit2}>EDIT Values card</button>}
      </>
      }
      <div className="values">Values</div>
      <div className="our-values-are">
        Our values are more than words; they are our commitment to acting and
        living in alignment with our vision and mission. They define who we are
        and guide our actions.
      </div>
      <div className="rectangle-parent5">
        <div className="group-item" />
        <div className="innovative-empowerment-we-container">
          <p className="innovative-empowerment">
            {text11}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text11}
                onChange={(e) => setText11(e.target.value)}
              />
            )}
          </p>
          <p className="innovative-empowerment">&nbsp;</p>
          <p className="we-foster-an">
            {text16}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text16}
                onChange={(e) => setText16(e.target.value)}
              />
            )}
          </p>
        </div>
      </div>
      <div className="rectangle-parent6">
        <div className="group-item" />
        <div className="inclusive-understanding-we-container">
          <p className="innovative-empowerment">
            {text12}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text12}
                onChange={(e) => setText12(e.target.value)}
              />
            )}
          </p>
          <p className="innovative-empowerment">&nbsp;</p>
          <p className="we-foster-an">
           {text17}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text17}
                onChange={(e) => setText17(e.target.value)}
              />
            )}
          </p>
        </div>
      </div>
      <div className="rectangle-parent7">
        <div className="group-item" />
        <div className="transparent-integrity-we-container">
          <p className="transparent-integrity">
            {text13}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text13}
                onChange={(e) => setText13(e.target.value)}
              />
            )}
          </p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
          {text18}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text18}
                onChange={(e) => setText18(e.target.value)}
              />
            )}
          </p>
        </div>
      </div>
      <div className="rectangle-parent8">
        <div className="group-item" />
        <div className="reflective-responsibility-we-container">
          <p className="transparent-integrity">
            {text14}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text14}
                onChange={(e) => setText14(e.target.value)}
              />
            )}
          </p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
           {text19}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text19}
                onChange={(e) => setText19(e.target.value)}
              />
            )}
          </p>
        </div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-item" />
        <div className="active-listening-we-container">
          <p className="transparent-integrity">
            {text15}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text15}
                onChange={(e) => setText15(e.target.value)}
              />
            )}
          </p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
           {text20}
            {edit2 && (
              <input
                className="the-only-constant-textfield11"
                placeholder="Enter text"
                value={text20}
                onChange={(e) => setText20(e.target.value)}
              />
            )}{" "}
          </p>
        </div>
      </div>
      {edit ? (
        <>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
      {edit1 ? (
        <>
          <button onClick={handleSave1}>Save middle</button>
        </>
      ) : (
        <></>
      )}
      {edit2 ? (
        <>
          <button onClick={handleSave2}>Save value card</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AboutPage11;

// <img className="vector-icon19" alt="" src="/vector8.svg" />
//       <img className="vector-icon20" alt="" src="/vector9.svg" />
// <img className="vector-icon21" alt="" src="/vector10.svg" />
// <img className="icon12" alt="" src="/2-1@2x.png" />
// import { useCallback,useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AboutPage11.css";

// const AboutPage11 = () => {
//   const navigate = useNavigate();
//   const [edit,setEdit]=useState(false);
//   const [text, setText] = useState("The only constant is change! And the only certainty is uncertainty.");
//   const [text1, setText1] = useState(" And the bottom line is The Triple Bottom Line: People, Planet, and Profit.");
//   const [text2, setText2] = useState("At The Lighthouse, we provide various services to facilitate that journey.");
//   const [text3, setText3] = useState("Through our platform Rent-A-Skill, you can access expertise on demand - tailored talent for your transformational needs.");

//   const onStateSecondaryContainerClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const onStateSecondaryContainer2Click = useCallback(() => {
//     navigate("/our-services-main-page");
//   }, [navigate]);

//   const onHomeTextClick = useCallback(() => {
//     navigate("/landing-page");
//   }, [navigate]);

//   const onServicesTextClick = useCallback(() => {
//     navigate("/our-services-main-page");
//   }, [navigate]);

//   const onContactTextClick = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const onReadLessTextClick = useCallback(() => {
//     navigate("/about-page1");
//   }, [navigate]);

//   const onStateSecondaryContainer3Click = useCallback(() => {
//     navigate("/contact-us");
//   }, [navigate]);

//   const handleEdit = ()=>{
//     setEdit(true);
//   }

// const handleSave = ()=>{
//     setEdit(false);
//     setText(text);
//     setText1(text1);
//     setText2(text2);
//     setText3(text3);
// }
//   return (
//     <div className="about-page-11">

//       <div
//         className="statesecondary11"
//         onClick={onStateSecondaryContainerClick}
//       >
//         <div className="button12">REad more</div>
//       </div>
//       <div className="statesecondary12">
//         <div className="button12">EXplore our vision, mission</div>
//       </div>
//       <div
//         className="statesecondary13"
//         onClick={onStateSecondaryContainer2Click}
//       >
//         <div className="button12">Discover our services</div>
//       </div>

//       <div className="rent-a-skill9">Rent- a- Skill</div>
//       <div className="glossary9">Glossary</div>
//       <div className="about9">About</div>
//       <div className="home9" onClick={onHomeTextClick}>
//         Home
//       </div>
//       <div className="services9" onClick={onServicesTextClick}>
//         Services
//       </div>
//       <div className="contact9" onClick={onContactTextClick}>
//         Contact
//       </div>
//       <div className="about-page-11-child" />
//       <div className="who-we-are-parent">
//         <div className="who-we-are">Who We Are.</div>
//         <div className="and-the-bottom-container">
//           <p className="and-the-bottom">{` And the bottom line is The Triple Bottom Line: People, Planet, and Profit. `}</p>
//           <p className="and-the-bottom">&nbsp;</p>
// <p className="and-the-bottom">{`At The Lighthouse, we provide various services to facilitate that journey . `}</p>
// <p className="and-the-bottom">{`Through our platform Rent-A-Skill, you can access expertise on demand - tailored talent for your transformational needs. `}</p>
//           <p className="and-the-bottom">{`Rent-A-Skill is a unique service allowing you to access a wealth of expertise on a project basis. `}</p>
//           <p className="and-the-bottom">{`Whether you require specialised skills in AI, (industrial) IT, R & D, technology, creativity, or organisational empowerment, `}</p>
//           <p className="and-the-bottom">{`Rent-A-Skill connects you with the right talent, ensuring your transformational journey is supported every step of the way. `}</p>
//           <p className="and-the-bottom">
//             It’s not just about hiring talent; it’s about finding the right
//             expertise that aligns with your vision and goals, contributing to
//             the holistic growth of your organisation. We can facilitate each
//             step in the process of sustainable growth, on every level.
//           </p>
//           <p className="and-the-bottom">&nbsp;</p>
//           <p className="and-the-bottom">
//             In our pursuit to guide you towards sustainable success, we focus on
//             achieving goals in a manner that is environmentally viable, socially
//             equitable, and economically feasible, ensuring lasting positive
//             impacts and fostering resilience and well-being for individuals,
//             communities, and the planet.
//           </p>
//           <p className="and-the-bottom">&nbsp;</p>
//           <p className="and-the-bottom">
//             We believe in holistic development, an approach that considers the
//             whole person and organisation, addressing their physical, mental,
//             emotional, social, and introspective dimensions. It’s about
//             promoting balance, harmony, and well-being in every area of life.
//           </p>
//           <p className="and-the-bottom">{`We guide individuals and organisations to empower themselves to evolve and thrive in all dimensions, aligning their actions and decisions with their values, purpose, and the greater good. `}</p>
//           <p className="and-the-bottom">&nbsp;</p>
//           <p className="and-the-bottom">Let’s light up our lives!</p>
//         </div>
//         {edit ? (
//           <>
//           <input placeholder="Enter text"
//           value={text}
//           onChange={(e) => setText(e.target.value)} />

//           <input placeholder="Enter text"
//           value={text1}
//           onChange={(e) => setText1(e.target.value)} />

//           <input placeholder="Enter text"
//           value={text2}
//           onChange={(e) => setText2(e.target.value)} />

//           <input placeholder="Enter text"
//           value={text3}
//           onChange={(e) => setText3(e.target.value)} />
//           <button onClick={handleSave}>Save</button>
//           </>
//           ) : (

//         <div className="the-only-constant">
//           {text}

//         </div>
//         )}
//         <button onClick={handleEdit}>EDIT</button>
//         <div className="read-less" onClick={onReadLessTextClick}>
//           Read less.
//         </div>
//       </div>

//       <div className="about-page-11-item" />
//       <div className="about-page-11-inner" />
//       <div className="our-vision-mission">Our Vision, Mission, and Values</div>
//       <div className="to-be-a">
//         To be a beacon of transformation, inspiring holistic growth and
//         sustainable success in an ever-evolving world. We aim to cultivate a
//         collaborative ecosystem where individuals and organisations can thrive
//         together, embracing change, transcending competition, and fostering
//         mutual empowerment and synergistic relationships for the abundance of
//         all.
//       </div>
//       <div className="embark-on-your-container">
//         <p className="and-the-bottom">{`Embark on your transformative journey with The Lighthouse. `}</p>
//         <p className="and-the-bottom">{`Whether you seek our services, wish to collaborate, or desire to explore our mission and vision deeper, we are here `}</p>
//       </div>
//       <div
//         className="statesecondary14"
//         onClick={onStateSecondaryContainer3Click}
//       >
//         <div className="button12">Connect</div>
//       </div>
//       <div className="statesecondary15">
//         <div className="button12">converse</div>
//       </div>
//       <div className="statesecondary16">
//         <div className="button12">co- creativise</div>
//       </div>
//       <div className="vision">Vision</div>
//       <div className="mission">Mission</div>
//       <div className="to-champion-transformative">
//         To champion transformative journeys by delivering innovative solutions,
//         insightful guidance, and tailored services. Our mission is to cultivate
//         awareness and introspective growth, unravelling the complexities of
//         transformation to create clear and understandable paths. Whether you are
//         embarking on a comprehensive transformative journey or seeking specific
//         services to address immediate needs, we offer the flexibility and
//         expertise to meet you where you are. By intertwining personal purposes
//         with organisational goals, we strive to create a harmonious alignment,
//         ensuring individual aspirations and organisational objectives are in
//         sync, fostering a collaborative environment conducive to mutual growth
//         and sustainable success.
//       </div>
//       <div className="values">Values</div>
//       <div className="our-values-are">
//         Our values are more than words; they are our commitment to acting and
//         living in alignment with our vision and mission. They define who we are
//         and guide our actions.
//       </div>
//       <div className="rectangle-parent5">
//         <div className="group-item" />
//         <div className="innovative-empowerment-we-container">
//           <p className="innovative-empowerment">Innovative Empowerment</p>
//           <p className="innovative-empowerment">&nbsp;</p>
//           <p className="we-foster-an">
//             We foster an environment that values innovative thinking and
//             creativity, empowering everyone to exceed their potential.
//           </p>
//         </div>
//       </div>
//       <div className="rectangle-parent6">
//         <div className="group-item" />
//         <div className="inclusive-understanding-we-container">
//           <p className="innovative-empowerment">Inclusive Understanding</p>
//           <p className="innovative-empowerment">&nbsp;</p>
//           <p className="we-foster-an">
//             We embrace diverse thoughts and perspectives, recognising that
//             accepting multiple truths is the foundation for meaningful change
//             and true problem-solving.
//           </p>
//         </div>
//       </div>
//       <div className="rectangle-parent7">
//         <div className="group-item" />
//         <div className="transparent-integrity-we-container">
//           <p className="transparent-integrity">Transparent Integrity</p>
//           <p className="and-the-bottom">&nbsp;</p>
//           <p className="and-the-bottom">
//             We maintain honesty and transparency in every interaction,
//             establishing a foundation of trust and mutual respect.
//           </p>
//         </div>
//       </div>
//       <div className="rectangle-parent8">
//         <div className="group-item" />
//         <div className="reflective-responsibility-we-container">
//           <p className="transparent-integrity">Reflective Responsibility</p>
//           <p className="and-the-bottom">&nbsp;</p>
//           <p className="and-the-bottom">
//             We encourage embracing responsibility for one’s actions and
//             reflections, promoting learning and growth from every experience. We
//             illuminate the path, but the choice to walk it and the
//             responsibility to act are yours.
//           </p>
//         </div>
//       </div>
//       <div className="rectangle-parent9">
//         <div className="group-item" />
//         <div className="active-listening-we-container">
//           <p className="transparent-integrity">Active Listening</p>
//           <p className="and-the-bottom">&nbsp;</p>
//           <p className="and-the-bottom">
//             We prioritise empathetic and attentive listening, creating an
//             environment where every voice is heard and valued. The harmony of
//             ‘Listen’ and ‘Silent’ reminds us of the importance of being present
//             and reflective in every conversation.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage11;
