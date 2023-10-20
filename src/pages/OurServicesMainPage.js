import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServicesMainPage.css";

const OurServicesMainPage = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onService8ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onService7ContainerClick = useCallback(() => {
    navigate("/our-services7");
  }, [navigate]);

  const onService6ContainerClick = useCallback(() => {
    navigate("/our-services6");
  }, [navigate]);

  const onService5ContainerClick = useCallback(() => {
    navigate("/our-services5");
  }, [navigate]);

  const onService4ContainerClick = useCallback(() => {
    navigate("/our-services4");
  }, [navigate]);

  const onService3ContainerClick = useCallback(() => {
    navigate("/our-services3");
  }, [navigate]);

  const onService2ContainerClick = useCallback(() => {
    navigate("/our-services2");
  }, [navigate]);

  const onService1ContainerClick = useCallback(() => {
    navigate("/our-services1");
  }, [navigate]);

  const onStateSecondaryContainer1Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="our-services-main-page">
    


      <img className="icon10" alt="" src="/2-1@2x.png" />
      <div className="statesecondary9">
        <div className="button9">Contact us</div>
      </div>
      <div className="explore-our-diverse">{`Explore our diverse range of services and discover how The Lighthouse can empower your journey to transformation and growth. Whether you are interested in a specific service or wish to learn more about our holistic approach, we are here to connect with you. `}</div>
      <div className="glossary8">Glossary</div>
      <div className="about8" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home8" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="rent-a-skill8">Rent- a- skill</div>
      <div className="services8">Services</div>
      <div className="contact8" onClick={onContactTextClick}>
        Contact
      </div>
      <div className="our-services-main-page-child" />
      <div className="event-and-entertainment">
        Event and entertainment services
      </div>
      <div className="service-8" onClick={onService8ContainerClick}>
        <div className="service-8-child" />
        <div className="comprehensive-organisational-t1">
          Comprehensive Organisational Transformation and HR Solutions
        </div>
        <img
          className="org-transform-icon2"
          alt=""
          src="/org-transform-icon2.svg"
        />
      </div>
      <div className="service-7" onClick={onService7ContainerClick}>
        <div className="service-8-child" />
        <div className="writing-and-editorial1">
          Writing and Editorial Services
        </div>
        <img className="editor-icon2" alt="" src="/editor-icon2.svg" />
      </div>
      <div className="service-6" onClick={onService6ContainerClick}>
        <div className="service-8-child" />
        <div className="language-and-cultural1">
          Language and Cultural Services
        </div>
        <div className="cultural-icon2">
          <img className="icon11" alt="" src="/icon1.svg" />
          <div className="a2">A</div>
          <div className="div2">は</div>
        </div>
      </div>
      <div className="service-5" onClick={onService5ContainerClick}>
        <div className="service-8-child" />
        <div className="language-and-cultural1">
          Branding and Strategic Communication
        </div>
        <img className="branding-icon2" alt="" src="/branding-icon2.svg" />
      </div>
      <div className="service-4" onClick={onService4ContainerClick}>
        <div className="service-8-child" />
        <div className="language-and-cultural1">
          Experiential and Outdoor Services
        </div>
        <img
          className="outdoor-services-icon2"
          alt=""
          src="/outdoor-services.svg"
        />
      </div>
      <div className="service-3" onClick={onService3ContainerClick}>
        <div className="service-8-child" />
        <div className="language-and-cultural1">
          Training and Learning Solutions
        </div>
        <img className="training-icon2" alt="" src="/training-icon2.svg" />
      </div>
      <div className="service-2" onClick={onService2ContainerClick}>
        <div className="service-8-child" />
        <div className="language-and-cultural1">
          Creative and Expressive Services
        </div>
        <img
          className="creative-services-icon2"
          alt=""
          src="/creative-services.svg"
        />
      </div>
      <div className="service-1" onClick={onService1ContainerClick}>
        <div className="service-8-child" />
        <div className="language-and-cultural1">
          Personal Development and Holistic Growth
        </div>
        <img
          className="personality-dev-icon2"
          alt=""
          src="/personality-dev-icon2.svg"
        />
      </div>
      <div className="event-hosting-and">
        Event Hosting and Presentation: Elevate your event with our hosting
        services, ensuring a smooth and engaging experience for all attendees.
      </div>
      <div className="mcing-services-our">
        MCing Services: Our experienced, multilingual MCs bring charisma and
        professionalism to guide your event seamlessly, whether it’s a local
        gathering or an international corporate event.
      </div>
      <div className="music-and-bands">
        Music and Bands: From solo artists to big bands, we provide a diverse
        range of musical experiences tailored to your event’s theme and
        atmosphere, available for both private and corporate events worldwide.
      </div>
      <div className="customised-entertainment-solut">
        Customised Entertainment Solutions: We offer bespoke entertainment
        solutions to create memorable experiences, from conceptualisation to
        execution, aligning with your vision and goals.
      </div>
      <img
        className="event-hosting-icon1"
        alt=""
        src="/event-hosting-icon1.svg"
      />
      <img
        className="music-and-band-icon1"
        alt=""
        src="/music-and-band-icon1.svg"
      />
      <img className="mcing-icon1" alt="" src="/mcing-icon1.svg" />
      <div className="our-services-main-page-item" />
      <div className="group-div">
        <div className="group-child" />
        <div className="benefits16">
          <p className="benefits17">Benefits</p>
        </div>
        <img className="benefit-icon8" alt="" src="/benefit-icon.svg" />
        <div className="create-unforgettable-moments">
          Create unforgettable moments and elevate your events with our
          versatile and professional entertainment services, ensuring a
          harmonious and vibrant atmosphere that resonates with your audience.
        </div>
      </div>
      <div className="discover-the-rhythm">
        Discover the rhythm and vibrancy we can bring to your events. Whether
        you are organising a private gathering or a grand corporate event, we
        are here to infuse it with energy and elegance.
      </div>
      <div
        className="statesecondary10"
        onClick={onStateSecondaryContainer1Click}
      >
        <div className="button9">Contact us</div>
      </div>
      <img
        className="customised-solutions-icon1"
        alt=""
        src="/customised-solutions-icon1.svg"
      />
      <div className="auto-layout-vertical6">
        <div className="auto-layout-vertical7">
          <div className="empowering-your-journey">
            Empowering your journey with our services
          </div>
          <div className="auto-layout-horizontal14">
            <div className="at-the-lighthouse">
              At The Lighthouse, we offer a diverse range of services designed
              to support individuals and organisations in their transformative
              journeys. Discover our array of services designed to meet your
              unique needs and aspirations, and let’s co-create paths to
              sustainable success and holistic development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesMainPage;
  // <img className="vector-icon16" alt="" src="/vector5.svg" />
      // <img className="vector-icon17" alt="" src="/vector6.svg" />
      // <img className="vector-icon18" alt="" src="/vector7.svg" />