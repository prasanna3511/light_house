import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage11.css";

const AboutPage11 = () => {
  const navigate = useNavigate();
  const [edit,setEdit]=useState(false);
  const [text, setText] = useState("The only constant is change! And the only certainty is uncertainty.");
  const [text1, setText1] = useState(" And the bottom line is The Triple Bottom Line: People, Planet, and Profit.");
  const [text2, setText2] = useState("At The Lighthouse, we provide various services to facilitate that journey.");
  const [text3, setText3] = useState("Through our platform Rent-A-Skill, you can access expertise on demand - tailored talent for your transformational needs.");

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

  const handleEdit = ()=>{
    setEdit(true);
  }

const handleSave = ()=>{
    setEdit(false);
    setText(text);
    setText1(text1);
    setText2(text2);
    setText3(text3);
}
  return (
    <div className="about-page-11">

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

      <div className="rent-a-skill9">Rent- a- Skill</div>
      <div className="glossary9">Glossary</div>
      <div className="about9">About</div>
      <div className="home9" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services9" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact9" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="about-page-11-child" />
      <div className="who-we-are-parent">
        <div className="who-we-are">Who We Are.</div>
        <div className="and-the-bottom-container">
          <p className="and-the-bottom">{` And the bottom line is The Triple Bottom Line: People, Planet, and Profit. `}</p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">{`At The Lighthouse, we provide various services to facilitate that journey . `}</p>
          <p className="and-the-bottom">{`Through our platform Rent-A-Skill, you can access expertise on demand - tailored talent for your transformational needs. `}</p>
          <p className="and-the-bottom">{`Rent-A-Skill is a unique service allowing you to access a wealth of expertise on a project basis. `}</p>
          <p className="and-the-bottom">{`Whether you require specialised skills in AI, (industrial) IT, R & D, technology, creativity, or organisational empowerment, `}</p>
          <p className="and-the-bottom">{`Rent-A-Skill connects you with the right talent, ensuring your transformational journey is supported every step of the way. `}</p>
          <p className="and-the-bottom">
            It’s not just about hiring talent; it’s about finding the right
            expertise that aligns with your vision and goals, contributing to
            the holistic growth of your organisation. We can facilitate each
            step in the process of sustainable growth, on every level.
          </p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
            In our pursuit to guide you towards sustainable success, we focus on
            achieving goals in a manner that is environmentally viable, socially
            equitable, and economically feasible, ensuring lasting positive
            impacts and fostering resilience and well-being for individuals,
            communities, and the planet.
          </p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
            We believe in holistic development, an approach that considers the
            whole person and organisation, addressing their physical, mental,
            emotional, social, and introspective dimensions. It’s about
            promoting balance, harmony, and well-being in every area of life.
          </p>
          <p className="and-the-bottom">{`We guide individuals and organisations to empower themselves to evolve and thrive in all dimensions, aligning their actions and decisions with their values, purpose, and the greater good. `}</p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">Let’s light up our lives!</p>
        </div>
        {edit ? (
          <>
          <input placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)} />

          <input placeholder="Enter text"
          value={text1}
          onChange={(e) => setText1(e.target.value)} />

          <input placeholder="Enter text"
          value={text2}
          onChange={(e) => setText2(e.target.value)} />

          <input placeholder="Enter text"
          value={text3}
          onChange={(e) => setText3(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          </>
          ) : (

        <div className="the-only-constant">
          {text}

        </div>
        )}
        <button onClick={handleEdit}>EDIT</button>
        <div className="read-less" onClick={onReadLessTextClick}>
          Read less.
        </div>
      </div>

      <div className="about-page-11-item" />
      <div className="about-page-11-inner" />
      <div className="our-vision-mission">Our Vision, Mission, and Values</div>
      <div className="to-be-a">
        To be a beacon of transformation, inspiring holistic growth and
        sustainable success in an ever-evolving world. We aim to cultivate a
        collaborative ecosystem where individuals and organisations can thrive
        together, embracing change, transcending competition, and fostering
        mutual empowerment and synergistic relationships for the abundance of
        all.
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
      <div className="vision">Vision</div>
      <div className="mission">Mission</div>
      <div className="to-champion-transformative">
        To champion transformative journeys by delivering innovative solutions,
        insightful guidance, and tailored services. Our mission is to cultivate
        awareness and introspective growth, unravelling the complexities of
        transformation to create clear and understandable paths. Whether you are
        embarking on a comprehensive transformative journey or seeking specific
        services to address immediate needs, we offer the flexibility and
        expertise to meet you where you are. By intertwining personal purposes
        with organisational goals, we strive to create a harmonious alignment,
        ensuring individual aspirations and organisational objectives are in
        sync, fostering a collaborative environment conducive to mutual growth
        and sustainable success.
      </div>
      <div className="values">Values</div>
      <div className="our-values-are">
        Our values are more than words; they are our commitment to acting and
        living in alignment with our vision and mission. They define who we are
        and guide our actions.
      </div>
      <div className="rectangle-parent5">
        <div className="group-item" />
        <div className="innovative-empowerment-we-container">
          <p className="innovative-empowerment">Innovative Empowerment</p>
          <p className="innovative-empowerment">&nbsp;</p>
          <p className="we-foster-an">
            We foster an environment that values innovative thinking and
            creativity, empowering everyone to exceed their potential.
          </p>
        </div>
      </div>
      <div className="rectangle-parent6">
        <div className="group-item" />
        <div className="inclusive-understanding-we-container">
          <p className="innovative-empowerment">Inclusive Understanding</p>
          <p className="innovative-empowerment">&nbsp;</p>
          <p className="we-foster-an">
            We embrace diverse thoughts and perspectives, recognising that
            accepting multiple truths is the foundation for meaningful change
            and true problem-solving.
          </p>
        </div>
      </div>
      <div className="rectangle-parent7">
        <div className="group-item" />
        <div className="transparent-integrity-we-container">
          <p className="transparent-integrity">Transparent Integrity</p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
            We maintain honesty and transparency in every interaction,
            establishing a foundation of trust and mutual respect.
          </p>
        </div>
      </div>
      <div className="rectangle-parent8">
        <div className="group-item" />
        <div className="reflective-responsibility-we-container">
          <p className="transparent-integrity">Reflective Responsibility</p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
            We encourage embracing responsibility for one’s actions and
            reflections, promoting learning and growth from every experience. We
            illuminate the path, but the choice to walk it and the
            responsibility to act are yours.
          </p>
        </div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-item" />
        <div className="active-listening-we-container">
          <p className="transparent-integrity">Active Listening</p>
          <p className="and-the-bottom">&nbsp;</p>
          <p className="and-the-bottom">
            We prioritise empathetic and attentive listening, creating an
            environment where every voice is heard and valued. The harmony of
            ‘Listen’ and ‘Silent’ reminds us of the importance of being present
            and reflective in every conversation.
          </p>
        </div>
      </div>
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
//           <p className="and-the-bottom">{`At The Lighthouse, we provide various services to facilitate that journey . `}</p>
//           <p className="and-the-bottom">{`Through our platform Rent-A-Skill, you can access expertise on demand - tailored talent for your transformational needs. `}</p>
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