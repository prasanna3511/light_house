import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsCall1.css";

const ContactUsCall1 = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);
  const onServicesText1Click = useCallback(() => {
    navigate("/our-services-main-page");
  }, [navigate]);

  return (
    <div className="contact-us-call1">
      <img className="icon17" alt="" src="/2-1@2x.png" />
      <div className="faqs1">FAQs?</div>
      <img className="vector-icon28" alt="" src="/vector17.svg" />
      <img className="vector-icon29" alt="" src="/vector18.svg" />
      <img className="vector-icon30" alt="" src="/vector19.svg" />
      <div className="auto-layout-vertical36">
        <div className="auto-layout-vertical37">
          <div className="auto-layout-vertical38">
            <div className="lets-light-up2">Let’s light up our lives!</div>
            <div className="auto-layout-horizontal40">
              <div className="select-preferred-mode1">{`Select preferred mode of communication `}</div>
            </div>
          </div>
          <div className="offline-selected1">
            <div className="auto-layout-horizontal-group">
              <div className="auto-layout-horizontal41">
                <div className="offline1">Offline</div>
              </div>
              <div className="auto-layout-horizontal42">
                <div className="offline1">Online</div>
              </div>
              <div className="auto-layout-horizontal43">
                <div className="offline1">Call</div>
              </div>
              <div className="group-child7" />
              <div className="group-child8" />
              <div className="group-child9" />
            </div>
            <img className="icon18" alt="" src="/icon3.svg" />
          </div>
          
          <div className="auto-layout-horizontal44">
            <div className="auto-layout-vertical39">
              <div className="auto-layout-vertical40">
                <div className="auto-layout-horizontal45">
                  <div className="auto-layout-horizontal46">
                  <input type="text" id = "myInput" placeholder ="Your  Name" className="your-name1"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary5">
              <div className="button22">Submit</div>
            </div>
          </div>
          <div className="auto-layout-horizontal44">
            <div className="auto-layout-vertical39">
              <div className="auto-layout-vertical40">
                <div className="auto-layout-horizontal45">
                  <div className="auto-layout-horizontal46">
                  <input type="text" id = "myInput" placeholder ="Your  mobile No" className="your-name3"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary5">
              <div className="button22">Submit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us1">{`Contact us `}</div>
      <div className="rent-a-skill12">Rent- a- Skill</div>
      <div className="glossary12">Glossary</div>
      <div className="about11" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home11" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="services12" onClick={onServicesText1Click}>Services</div>
      <div className="contact11">Contact</div>
      <div className="contact-us-call-inner" />
      <img className="vector-icon31" alt="" src="/vector14.svg" />
      <img className="group-icon" alt="" src="/group-3.svg" />
      <img className="vector-icon32" alt="" src="/vector15.svg" />
      <img className="vector-icon33" alt="" src="/vector16.svg" />
      <div className="auto-layout-horizontal50">
        <div className="auto-layout-vertical43">
          <div className="company1">Company</div>
          <div className="auto-layout-vertical44">
            <div className="auto-layout-horizontal51">
              <div className="offline1">About Us</div>
            </div>
          </div>
          <div className="auto-layout-horizontal51">
            <div className="offline1">Glossary</div>
          </div>
          <div className="auto-layout-vertical44">
            <div />
          </div>
          <div className="auto-layout-vertical46" />
          <div className="auto-layout-vertical46" />
          <div className="auto-layout-vertical44">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical49">
          <div className="button22">Services</div>
          <div className="auto-layout-vertical50">
            <div className="auto-layout-horizontal51">
              <div className="offline1">Rent- a- Skill</div>
            </div>
          </div>
          <div className="auto-layout-vertical46" />
        </div>
        <div className="auto-layout-vertical52">
          <div className="company1">Resources</div>
          <div className="auto-layout-vertical44">
            <div className="auto-layout-horizontal51">
              <div className="offline1">Blog</div>
            </div>
          </div>
          <div className="auto-layout-vertical44">
            <div className="auto-layout-horizontal51">
              <div className="offline1">Case Study</div>
            </div>
          </div>
          <div className="auto-layout-vertical44">
            <div className="auto-layout-horizontal51">
              <div className="offline1">Testimonials</div>
            </div>
          </div>
          <div className="auto-layout-vertical44">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical52">
          <div className="company1">Follow us</div>
          <div className="auto-layout-vertical44">
            <div className="auto-layout-horizontal51">
              <div className="offline1">Twitter</div>
            </div>
          </div>
          <div className="auto-layout-vertical44">
            <div className="auto-layout-horizontal51">
              <div className="offline1">linked-in</div>
            </div>
          </div>
          <div className="offline1">Instagram</div>
          <div className="offline1">Facebook</div>
        </div>
      </div>
      <div className="developed-by-coherent1">
        Developed by Coherent Business Solutions
      </div>
    </div>
  );
};

export default ContactUsCall1;
