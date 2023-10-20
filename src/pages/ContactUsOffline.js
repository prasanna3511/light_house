import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsOffline.css";

const ContactUsOffline = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className="contact-us-offline">
      <img className="icon21" alt="" src="/2-1@2x.png" />
      <div className="faqs3">FAQs?</div>
      <img className="vector-icon40" alt="" src="/vector22.svg" />
      <img className="vector-icon41" alt="" src="/vector20.svg" />
      <img className="vector-icon42" alt="" src="/vector21.svg" />
      <div className="auto-layout-vertical84">
        <div className="auto-layout-vertical85">
          <div className="auto-layout-vertical86">
            <div className="lets-light-up4">Let’s light up our lives!</div>
            <div className="auto-layout-horizontal78">
              <div className="select-preferred-mode3">{`Select preferred mode of communication `}</div>
            </div>
          </div>
          <div className="offline-selected3">
            <div className="auto-layout-horizontal-parent1">
              <div className="auto-layout-horizontal79">
                <div className="offline3">Offline</div>
              </div>
              <div className="auto-layout-horizontal80">
                <div className="offline3">Online</div>
              </div>
              <div className="auto-layout-horizontal81">
                <div className="offline3">Call</div>
              </div>
              <div className="group-child13" />
              <div className="group-child14" />
              <div className="group-child15" />
            </div>
            <img className="icon22" alt="" src="/icon4.svg" />
          </div>
          <div className="auto-layout-horizontal82">
            <div className="auto-layout-vertical87">
              <div className="auto-layout-vertical88">
                <div className="auto-layout-horizontal83">
                  <div className="auto-layout-horizontal84">
                    <div className="your-name3">Your name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary9">
              <div className="button26">Submit</div>
            </div>
          </div>
          <div className="auto-layout-horizontal82">
            <div className="auto-layout-vertical87">
              <div className="auto-layout-vertical88">
                <div className="auto-layout-horizontal83">
                  <div className="auto-layout-horizontal84">
                    <div className="your-name3">Your e-mail</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stateprimary9">
              <div className="button26">Submit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us3">{`Contact us `}</div>
      <div className="glossary16">Glossary</div>
      <div className="about13" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home13" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="rent-a-skill16">Rent- a- Skill</div>
      <div className="services16">Services</div>
      <div className="contact13">Contact</div>
      <div className="contact-us-offline-child" />
      <img className="vector-icon43" alt="" src="/vector14.svg" />
      <img className="contact-us-offline-item" alt="" src="/group-3.svg" />
      <img className="vector-icon44" alt="" src="/vector15.svg" />
      <img className="vector-icon45" alt="" src="/vector16.svg" />
      <div className="auto-layout-horizontal88">
        <div className="auto-layout-vertical91">
          <div className="company3">Company</div>
          <div className="auto-layout-vertical92">
            <div className="auto-layout-horizontal89">
              <div className="offline3">About Us</div>
            </div>
          </div>
          <div className="auto-layout-horizontal89">
            <div className="offline3">Glossary</div>
          </div>
          <div className="auto-layout-vertical92">
            <div />
          </div>
          <div className="auto-layout-vertical94" />
          <div className="auto-layout-vertical94" />
          <div className="auto-layout-vertical92">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical97">
          <div className="button26">Services</div>
          <div className="auto-layout-vertical98">
            <div className="auto-layout-horizontal91">
              <div className="offline3">Rent- a- Skill</div>
            </div>
          </div>
          <div className="auto-layout-vertical94" />
        </div>
        <div className="auto-layout-vertical100">
          <div className="company3">Resources</div>
          <div className="auto-layout-vertical92">
            <div className="auto-layout-horizontal89">
              <div className="offline3">Blog</div>
            </div>
          </div>
          <div className="auto-layout-vertical92">
            <div className="auto-layout-horizontal89">
              <div className="offline3">Case Study</div>
            </div>
          </div>
          <div className="auto-layout-vertical92">
            <div className="auto-layout-horizontal89">
              <div className="offline3">Testimonials</div>
            </div>
          </div>
          <div className="auto-layout-vertical92">
            <div />
          </div>
        </div>
        <div className="auto-layout-vertical100">
          <div className="company3">Follow us</div>
          <div className="auto-layout-vertical92">
            <div className="auto-layout-horizontal89">
              <div className="offline3">Twitter</div>
            </div>
          </div>
          <div className="auto-layout-vertical92">
            <div className="auto-layout-horizontal89">
              <div className="offline3">linked-in</div>
            </div>
          </div>
          <div className="offline3">Instagram</div>
          <div className="offline3">Facebook</div>
        </div>
      </div>
      <div className="developed-by-coherent3">
        Developed by Coherent Business Solutions
      </div>
    </div>
  );
};

export default ContactUsOffline;
