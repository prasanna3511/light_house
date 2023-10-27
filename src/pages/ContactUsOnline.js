import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsOnline.css";

const ContactUsOnline = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className="contact-us-online">
      <img className="icon19" alt="" src="/2-1@2x.png" />
      <div className="faqs2">FAQs?</div>
      <img className="vector-icon34" alt="" src="/vector17.svg" />
      <img className="vector-icon35" alt="" src="/vector20.svg" />
      <img className="vector-icon36" alt="" src="/vector21.svg" />
      <div className="auto-layout-vertical60">
        <div className="auto-layout-vertical61">
          <div className="auto-layout-vertical62">
            <div className="lets-light-up3">Let’s light up our lives!</div>
            <div className="auto-layout-horizontal59">
              <div className="select-preferred-mode2">{`Select preferred mode of communication `}</div>
            </div>
          </div>
          <div className="offline-selected2">
            <div className="auto-layout-horizontal-container">
              <div className="auto-layout-horizontal60">
                <div className="offline2">Offline</div>
              </div>
              <div className="auto-layout-horizontal61">
                <div className="offline2">Online</div>
              </div>
              <div className="auto-layout-horizontal62">
                <div className="offline2">Call</div>
              </div>
              <div className="group-child10" />
              <div className="group-child11" />
              <div className="group-child12" />
            </div>
            <img className="icon20" alt="" src="/icon3.svg" />
          </div>
          <div className="auto-layout-horizontal63">
            <div className="auto-layout-vertical63">
              <div className="auto-layout-vertical64">
                <div className="auto-layout-horizontal64">
                  <div className="auto-layout-horizontal65">
                    
                  <input type="text" id = "myInput" placeholder ="Your Name" className="your-name2"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary7">
              <div className="button24">Submit</div>
            </div>
          </div>
          <div className="auto-layout-horizontal63">
            <div className="auto-layout-vertical63">
              <div className="auto-layout-vertical64">
                <div className="auto-layout-horizontal64">
                  <div className="auto-layout-horizontal65">
                  <input type="text" id = "myInput" placeholder ="Enter Your Whatsapp No" className="your-name2"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary7">
              <div className="button24">Submit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us2">{`Contact us `}</div>
      <div className="rent-a-skill14">Rent- a- Skill</div>
      <div className="glossary14">Glossary</div>
      <div className="about12" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home12" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services14">Services</div>
      <div className="contact12">Contact</div>
      <div className="contact-us-online-child" />
      <img className="vector-icon37" alt="" src="/vector14.svg" />
      <img className="contact-us-online-item" alt="" src="/group-3.svg" />
      <img className="vector-icon38" alt="" src="/vector15.svg" />
      <img className="vector-icon39" alt="" src="/vector16.svg" />
      <div className="auto-layout-horizontal69">
        <div className="auto-layout-vertical67">
          <div className="company2">Company</div>
          <div className="auto-layout-vertical68">
            <div className="auto-layout-horizontal70">
              <div className="offline2">About Us</div>
            </div>
          </div>
          <div className="auto-layout-horizontal70">
            <div className="offline2">Glossary</div>
          </div>
          <div className="auto-layout-vertical68">
            <div />
          </div>
          <div className="auto-layout-vertical70" />
          <div className="auto-layout-vertical70" />
          <div className="auto-layout-vertical68">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical73">
          <div className="button24">Services</div>
          <div className="auto-layout-vertical74">
            <div className="auto-layout-horizontal70">
              <div className="offline2">Rent- a- Skill</div>
            </div>
          </div>
          <div className="auto-layout-vertical70" />
        </div>
        <div className="auto-layout-vertical76">
          <div className="company2">Resources</div>
          <div className="auto-layout-vertical68">
            <div className="auto-layout-horizontal70">
              <div className="offline2">Blog</div>
            </div>
          </div>
          <div className="auto-layout-vertical68">
            <div className="auto-layout-horizontal70">
              <div className="offline2">Case Study</div>
            </div>
          </div>
          <div className="auto-layout-vertical68">
            <div className="auto-layout-horizontal70">
              <div className="offline2">Testimonials</div>
            </div>
          </div>
          <div className="auto-layout-vertical68">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical76">
          <div className="company2">Follow us</div>
          <div className="auto-layout-vertical68">
            <div className="auto-layout-horizontal70">
              <div className="offline2">Twitter</div>
            </div>
          </div>
          <div className="auto-layout-vertical68">
            <div className="auto-layout-horizontal70">
              <div className="offline2">linked-in</div>
            </div>
          </div>
          <div className="offline2">Instagram</div>
          <div className="offline2">Facebook</div>
        </div>
      </div>
      <div className="developed-by-coherent2">
        Developed by Coherent Business Solutions
      </div>
    </div>
  );
};

export default ContactUsOnline;
