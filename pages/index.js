import AboutComponent from "../src/components/AboutComponent";
import ServicesComponent from "../src/components/ServicesComponent";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout pageName={"Home Static"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bgjww_ologo.png" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
            <img className="hero_bottle_img" src="/img/bottle/blueLabel.png" alt="Johnnie Walker Blue Label"/>

              {/* <h2 className="fn_title" title="Neoh">
                Johnni Walker
              </h2> */}
              <p className="fn_desc fn_animated_text">
              Step into a World of Luxury with Johnnie Walker Blue Label
              </p>
            </div>
          </div>
          <a
            href="#about"
            className="neoh_fn_down magic-hover magic-hover__square"
          >
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      
      {/* About Section */}
      <AboutComponent />
      {/* !About Section */}
      {/* Services Section */}
      <ServicesComponent />
      {/* !Services Section */}
      {/* Investor Section */}

    </Layout>
  );
};
export default Index;
