import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsCall.css";

const ContactUsCall = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className="contact-us-call">
      <img className="icon13" alt="" src="/2-1@2x.png" />
      <img className="vector-icon22" alt="" src="/vector11.svg" />
      <img className="vector-icon23" alt="" src="/vector12.svg" />
      <img className="vector-icon24" alt="" src="/vector13.svg" />
      <div className="auto-layout-vertical8">
        <div className="auto-layout-vertical9">
          <div className="auto-layout-vertical10">
            <div className="lets-light-up1">Let’s light up our lives!</div>
            <div className="auto-layout-horizontal15">
              <div className="select-preferred-mode">{`Select preferred mode of communication `}</div>
            </div>
          </div>
          <div className="offline-selected">
            <div className="auto-layout-horizontal-parent">
              <div className="auto-layout-horizontal16">
                <div className="offline">Offline</div>
              </div>
              <div className="auto-layout-horizontal17">
                <div className="offline">Online</div>
              </div>
              <div className="auto-layout-horizontal18">
                <div className="offline">Call</div>
              </div>
              <div className="group-child4" />
              <div className="group-child5" />
              <div className="group-child6" />
            </div>
            <img className="icon14" alt="" src="/icon2.svg" />
            <img className="icon15" alt="" src="/icon2.svg" />
            <img className="icon16" alt="" src="/icon2.svg" />
          </div>
          <div className="auto-layout-horizontal19">
            <div className="auto-layout-vertical11">
              <div className="auto-layout-vertical12">
                <div className="auto-layout-horizontal20">
                  <div className="auto-layout-horizontal21">
                    <div className="your-name">Your name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary1">
              <div className="button18">Submit</div>
            </div>
          </div>
          <div className="auto-layout-horizontal19">
            <div className="auto-layout-vertical11">
              <div className="auto-layout-vertical12">
                <div className="auto-layout-horizontal20">
                  <div className="auto-layout-horizontal21">
                    <div className="your-name">Your e-mail</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary1">
              <div className="button18">Submit</div>
            </div>
          </div>
          <div className="auto-layout-horizontal19">
            <div className="auto-layout-vertical11">
              <div className="auto-layout-vertical12">
                <div className="auto-layout-horizontal20">
                  <div className="auto-layout-horizontal21">
                    <div className="your-name">Your what’s app number</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary1">
              <div className="button18">Submit</div>
            </div>
          </div>
          <div className="auto-layout-horizontal19">
            <div className="auto-layout-vertical11">
              <div className="auto-layout-vertical12">
                <div className="auto-layout-horizontal20">
                  <div className="auto-layout-horizontal21">
                    <div className="your-name">Your contact number</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary1">
              <div className="button18">Submit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rent-a-skill10">Rent- a- Skill</div>
      <div className="glossary10">Glossary</div>
      <div className="about10" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home10" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services10">Services</div>
      <div className="contact10">Contact</div>
      <div className="contact-us-call-child" />
      <div className="faqs">FAQs?</div>
      <div className="contact-us">{`Contact us `}</div>
      <img className="vector-icon25" alt="" src="/vector14.svg" />
      <img className="contact-us-call-item" alt="" src="/group-3.svg" />
      <img className="vector-icon26" alt="" src="/vector15.svg" />
      <img className="vector-icon27" alt="" src="/vector16.svg" />
      <div className="auto-layout-horizontal31">
        <div className="auto-layout-vertical19">
          <div className="company">Company</div>
          <div className="auto-layout-vertical20">
            <div className="auto-layout-horizontal32">
              <div className="offline">About Us</div>
            </div>
          </div>
          <div className="auto-layout-horizontal32">
            <div className="offline">Glossary</div>
          </div>
          <div className="auto-layout-vertical20">
            <div />
          </div>
          <div className="auto-layout-vertical22" />
          <div className="auto-layout-vertical22" />
          <div className="auto-layout-vertical20">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical25">
          <div className="button18">Services</div>
          <div className="auto-layout-vertical26">
            <div className="auto-layout-horizontal32">
              <div className="offline">Rent- a- Skill</div>
            </div>
          </div>
          <div className="auto-layout-vertical22" />
        </div>
        <div className="auto-layout-vertical28">
          <div className="company">Resources</div>
          <div className="auto-layout-vertical20">
            <div className="auto-layout-horizontal32">
              <div className="offline">Blog</div>
            </div>
          </div>
          <div className="auto-layout-vertical20">
            <div className="auto-layout-horizontal32">
              <div className="offline">Case Study</div>
            </div>
          </div>
          <div className="auto-layout-vertical20">
            <div className="auto-layout-horizontal32">
              <div className="offline">Testimonials</div>
            </div>
          </div>
          <div className="auto-layout-vertical20">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical28">
          <div className="company">Follow us</div>
          <div className="auto-layout-vertical20">
            <div className="auto-layout-horizontal32">
              <div className="offline">Twitter</div>
            </div>
          </div>
          <div className="auto-layout-vertical20">
            <div className="auto-layout-horizontal32">
              <div className="offline">linked-in</div>
            </div>
          </div>
          <div className="offline">Instagram</div>
          <div className="offline">Facebook</div>
        </div>
      </div>
      <div className="developed-by-coherent">
        Developed by Coherent Business Solutions
      </div>
    </div>
  );
};

export default ContactUsCall;
