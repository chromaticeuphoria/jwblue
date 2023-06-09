import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import Image from 'next/image'; // Import the Image component

const About = () => {
  return (
    <Layout pageName={"About"}>
      <PageBanner pageName={"About"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <Image
                  src="/img/about/1.jpg" // Replace with the actual image path
                  alt="About 1" // Add meaningful alt text
                  width={500} // Set the width of the image
                  height={300} // Set the height of the image
                />
              </div>
              {/* ... */}
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <Image
                      src="/svg/search-engine.svg" // Replace with the actual image path
                      alt="Search Engine" // Add meaningful alt text
                      width={100} // Set the width of the image
                      height={100} // Set the height of the image
                    />
                    {/* ... */}
                  </div>
                </li>
                {/* ... */}
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <Image
                  src="/img/about/2.jpg" // Replace with the actual image path
                  alt="About 2" // Add meaningful alt text
                  width={500} // Set the width of the image
                  height={300} // Set the height of the image
                />
              </div>
              {/* ... */}
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
        {/* Video Section */}
        <section id="video">
          {/* ... */}
        </section>
        {/* !Video Section */}
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* ... */}
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image
                          src="/img/author/1.jpg" // Replace with the actual image path
                          alt="Tom McCarthy" // Add meaningful alt text
                          width={100} // Set the width of the image
                          height={100} // Set the height of the image
                        />
                      </div>
                      {/* ... */}
                    </div>
                    {/* ... */}
                  </div>
                </li>
                {/* ... */}
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};

export default About;
