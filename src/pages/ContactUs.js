import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
import "./LandingPage.css";
import "./ContactUsCall.css";
import "./ContactUsOnline.css";
import "./ContactUsOffline.css";
import { Box } from "@material-ui/core";
import axios from "axios";

const ContactUs = () => {
  const navigate = useNavigate();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const handleSave = async () => {
    if (!text1 || !text2 || !text3) {
      alert("Please fill in all the required fields.");
      return; // Do not proceed with the request
    }
      const cardResponse = await axios.post("https://thelighthouseweb.co/contact.php", {
        name: text1,
        email: text2,
        phone: text3,
        type: "contactus",
      });
      alert("Your message has been sent successfully. We will get back to you soon!");
      console.log(cardResponse.data);
      setText1("");
      setText2("");
      setText3("");
  };
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);
  const onServicesTextClick = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);


  const onAboutTextClick = useCallback(() => {
    navigate("/about-page11");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);




  return (
    <div className="contact-us4">
      <img className="icon23" alt="" src="/2-1@2x.png" />
      <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="auto-layout-horizontal97">
          <div className="auto-layout-vertical108">
            <div className="company4">Company</div>
            <div className="auto-layout-vertical109">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">About Us</div>
              </div>
            </div>
            <div className="auto-layout-horizontal98">
              <div className="about-us4">Glossary</div>
            </div>
            <div className="auto-layout-vertical109">
              <div />
            </div>
            <div className="auto-layout-vertical111" />
            <div className="auto-layout-vertical111" />
            <div className="auto-layout-vertical109">
              <div />
            </div>
          </div>
          <div className="auto-layout-vertical114">
            <div className="services18">Services</div>
            <div className="auto-layout-vertical115">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">Rent- a- Skill</div>
              </div>
            </div>
            <div className="auto-layout-vertical111" />
          </div>
          <div className="auto-layout-vertical117">
            <div className="company4">Resources</div>
            <div className="auto-layout-vertical109">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">Blog</div>
              </div>
            </div>
            <div className="auto-layout-vertical109">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">Case Study</div>
              </div>
            </div>
            <div className="auto-layout-vertical109">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">Testimonials</div>
              </div>
            </div>
            <div className="auto-layout-vertical109">
              <div />
            </div>
          </div>
          <div className="auto-layout-vertical117">
            <div className="company4">Follow us</div>
            <div className="auto-layout-vertical109">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">Twitter</div>
              </div>
            </div>
            <div className="auto-layout-vertical109">
              <div className="auto-layout-horizontal98">
                <div className="about-us4">linked-in</div>
              </div>
            </div>
            <div className="about-us4">Instagram</div>
            <div className="about-us4">Facebook</div>
          </div>
        </div>
      </Box>
      <div className="faqs4">FAQs?</div>
      <div className="developed-by-coherent4">
        Developed by Coherent Business Solutions
      </div>

      <div className="auto-layout-vertical125">
        <div className="auto-layout-vertical126">
          <div className="auto-layout-vertical127">
            <div className="lets-light-up5">Let’s light up our lives!</div>
            {/* <div className="auto-layout-horizontal106">
              <div className="select-preferred-mode4">{`Select preferred mode of communication `}</div>
            </div> */}
          </div>
          {/* <div className="auto-layout-horizontal-parent2">
            <div className="auto-layout-horizontal107">
              <div className="about-us4">Offline</div>
            </div>
            <div className="auto-layout-horizontal108">
              <div className="about-us4">Online</div>
            </div>
            <div className="auto-layout-horizontal109">
              <div className="about-us4">Call</div>
            </div>
            <div className="group-child16" onClick={onRectangleClick} />
            <div className="group-child17" onClick={onRectangle1Click} />
            <div className="group-child18" onClick={onRectangle2Click} />
          </div> */}
          {/* {offline && ( */}
            <Box style={{width:"350px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div className="auto-layout-horizontal110">
                <div className="auto-layout-vertical128">
                  <div className="auto-layout-vertical129">
                    <div className="auto-layout-horizontal111">
                      <div className="auto-layout-horizontal112">
                        <input
                          type="text"
                          id="myInput"
                          required
                          placeholder="Your  Name"
                          className="your-name4"
                          value={text1}
                          onChange={(e) => setText1(e.target.value)}
                        />  
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="auto-layout-horizontal110">
                <div className="auto-layout-vertical128">
                  <div className="auto-layout-vertical129">
                    <div className="auto-layout-horizontal111">
                      <div className="auto-layout-horizontal112">
                        <input
                          type="text"
                          id="myInput"
                          required
                          placeholder="Your mail"
                          className="your-name4"
                          value={text2}
                          onChange={(e) => setText2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
              <div className="auto-layout-horizontal110">
                  <div className="auto-layout-vertical128">
                  <div className="auto-layout-vertical129">

                    <div className="auto-layout-horizontal111">
                      <div className="auto-layout-horizontal112">
                        <input
                          type="text"
                          id="myInput"
                          required
                          placeholder="Your Whatsapp no"
                          className="your-name4"
                          value={text3}
                          onChange={(e) => setText3(e.target.value)}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div onClick={handleSave} className="stateprimary11">
                  <div className="button18">Submit</div>
                </div>
                </div>

                
            </Box>
          {/* )} */}
         
        </div>
      </div>
      <div className="contact-us5">{`Contact us `}</div>
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
      <div className="contact-us-child" />
      <div className="contact-icons">

      <img className="vector-icon49" alt="" src="/vector14.svg" />
      <img className="contact-us-item" alt="" src="/group-3.svg" />
      <img className="vector-icon50" alt="" src="/vector15.svg" />
      <img className="vector-icon51" alt="" src="/vector16.svg" />
      </div>
    </div>
  );
};

export default ContactUs;
// <img className="vector-icon46" alt="" src="/vector22.svg" />
// <img className="vector-icon47" alt="" src="/vector20.svg" />
// <img className="vector-icon48" alt="" src="/vector21.svg" />
