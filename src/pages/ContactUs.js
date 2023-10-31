import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
import "./LandingPage.css";
import "./ContactUsCall.css";
import "./ContactUsOnline.css";
import "./ContactUsOffline.css";
import { Box } from "@material-ui/core";


const ContactUs = () => {
  const navigate = useNavigate();
  const [offline,setOffline] = useState(false);
  const [online,setOnline] = useState(false);
  const [call,setCall] = useState(false);
  // const onRectangleClick = useCallback(() => {
  //   navigate("/contact-us-offline");
  // }, [navigate]);

  // const onRectangle1Click = useCallback(() => {
  //   navigate("/contact-us-online");
  // }, [navigate]);

  // const onRectangle2Click = useCallback(() => {
  //   navigate("/contact-us-call");
  // }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page11");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  const onRectangleClick =()=>{
    setOffline(true);
    setOnline(false);
    setCall(false);
  }
  const onRectangle1Click = ()=>{
    setOffline(false);
    setOnline(true);
    setCall(false);
  }
  const onRectangle2Click =()=>{
    setOffline(false);
    setOnline(false);
    setCall(true);
  }

  return (
    <div className="contact-us4">
      <img className="icon23" alt="" src="/2-1@2x.png" />
      <Box style={{width:"100%",display:"flex",justifyContent:"center"}}>
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
      <img className="vector-icon46" alt="" src="/vector22.svg" />
      <img className="vector-icon47" alt="" src="/vector20.svg" />
      <img className="vector-icon48" alt="" src="/vector21.svg" />
      <div className="auto-layout-vertical125">
        <div className="auto-layout-vertical126">
          <div className="auto-layout-vertical127">
            <div className="lets-light-up5">Let’s light up our lives!</div>
            <div className="auto-layout-horizontal106">
              <div className="select-preferred-mode4">{`Select preferred mode of communication `}</div>
            </div>
          </div>
          <div className="auto-layout-horizontal-parent2">
            <div  className="auto-layout-horizontal107">
              <div className="about-us4">Offline</div>
            </div>
            <div  className="auto-layout-horizontal108">
              <div className="about-us4">Online</div>
            </div>
            <div   className="auto-layout-horizontal109">
              <div className="about-us4">Call</div>
            </div>
            <div className="group-child16" onClick={onRectangleClick} />
            <div className="group-child17" onClick={onRectangle1Click} />
            <div className="group-child18" onClick={onRectangle2Click} />
          </div>
          {offline &&
          <div className="auto-layout-horizontal110">
            <div className="auto-layout-vertical128">
              <div className="auto-layout-vertical129">
                <div className="auto-layout-horizontal111">
                  <div className="auto-layout-horizontal112">
                  <input type="text" id = "myInput" placeholder ="Your  Name" className="your-name4"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary11">
              <div className="services18">Submit</div>
            </div>
          </div>
          }
          {online &&
             <div className="auto-layout-horizontal110">
             <div className="auto-layout-vertical128">
               <div className="auto-layout-vertical129">
                 <div className="auto-layout-horizontal111">
                   <div className="auto-layout-horizontal112">
                     
                   <input type="text" id = "myInput" placeholder ="Your Name" className="your-name4"/>
                   </div>
                 </div>
               </div>
             </div>
             <div className="stateprimary11">
               <div className="services18">Submit</div>
             </div>
           </div>
          }
          {call &&
          <>
          <div className="auto-layout-horizontal110">
          <div className="auto-layout-vertical128">
            <div className="auto-layout-vertical129">
              <div className="auto-layout-horizontal111">
                <div className="auto-layout-horizontal112">
                  <div className="your-name4">Your e-mail</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="stateprimary11">
            <div className="services18">Submit</div>
          </div> */}
        </div>
        <div className="auto-layout-horizontal110">
          <div className="auto-layout-vertical128">
            <div className="auto-layout-vertical129">
              <div className="auto-layout-horizontal111">
                <div className="auto-layout-horizontal112">
                  <div className="your-name4">Your what’s app number</div>
                </div>
              </div>
            </div>
          </div>
          <div className="stateprimary11">
            <div className="services18">Submit</div>
          </div>
        </div>
          </>
          }
        </div>
      </div>
      <div className="contact-us5">{`Contact us `}</div>
      <div className="rent-a-skill21">Rent- a- Skill</div>
      <div className="glossary21">Glossary</div>
      <div className="about16" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home16" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services21" onClick={onServicesText1Click}>
        Services
      </div>
      <div className="contact16">Contact</div>
      <div className="contact-us-child" />
      <img className="vector-icon49" alt="" src="/vector14.svg" />
      <img className="contact-us-item" alt="" src="/group-3.svg" />
      <img className="vector-icon50" alt="" src="/vector15.svg" />
      <img className="vector-icon51" alt="" src="/vector16.svg" />
    </div>
  );
};

export default ContactUs;
