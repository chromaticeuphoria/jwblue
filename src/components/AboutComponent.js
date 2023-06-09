import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/hero/bluelabel1000.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Johnnie Walker Blue Label: A Coveted Treasure</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Launched in 1992, Johnnie Walker Blue Label salutes the company's inaugural commercial whisky - Old Highland, first unveiled in 1867. Old Highland's creation was marked by the scarcity of available casks, making each selection a matter of significant importance.              </p>
              <p>
              In our current era, only a scant one in 10,000 casks are deemed worthy to contribute to the Blue Label blend, a harmonious fusion of Scotland's most extraordinary and rare whiskies. Thus, when you present a bottle of this enchanting blue and gold-labelled Johnnie Walker whisky, you're offering more than a gift - you're extending an invitation to a truly exceptional experience.              </p>
            </div>
            <div className="buttons">
              <Link href="https://www.johnniewalker.com/en-in/the-world-of-johnnie-walker/the-johnnie-walker-story/#:~:text=In%201867%2C%20he%20launched%20Johnnie,was%20available%20around%20the%20globe.">
                <a className="neoh_fn_button only_text">
                  <span className="text">Learn our heritage</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/hero/productjw.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Savour the Symphony of Flavours</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <h2>Nose</h2>
              <p>
              Take in the wonderfully mellow, rounded nose – replete with dry smokiness artfully mixed with the sweetness of raisins.
              </p>
              <h2>Palate</h2>
              <p>
              Serving a velvety combination of vanilla, honey and rose petals – before broadening out to include a zesty orange flavour with notes of hazelnut, sherry and dark chocolate.
              </p>
              <h2>Finish</h2>
              <p>
              Signing off with a rich and luxuriously long finish, which showcases Johnnie Walker's trademark smokiness in the most sophisticated way.
              </p>
            </div>
            <div className="buttons">
              <Link href="https://www.diageorareandexceptional.com/sg/rare-spirits/blended-scotch-whisky?utm_source=googleads&utm_medium=cpc&utm_campaign=40007872_DRE%20FY23_SIATE_SIGNAB_LOC_SGP_SOUEA_ASPA_SGD_AWA_AO_09-01-2022_06-30-2023_NU_brand_JW&utm_term=RSA&utm_content=brand-jw-phrase&utm_ID=40007872&gclid=CjwKCAjw-IWkBhBTEiwA2exyO45JJIF-BAFNy8NsTw_fzmcZXSXg7bxs4apS4IcKoZ4h6pyAPwKooxoCB9MQAvD_BwE">
                <a className="neoh_fn_button only_text">
                  <span className="text">Purchase Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
                {/* About Item #3 */}
                <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/hero/sustain2.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Johnnie Walker: Pioneering a Sustainable Future 'From Grain to Glass</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Johnnie Walker strides forward with an ambitious sustainability action plan, shaping a future where whisky production is eco-friendly from grain to glass. This plan is our commitment to significantly reduce environmental impact, rejuvenate natural landscapes, and reimagine how our whisky graces glasses worldwide.               </p>
            </div>
            <div className="buttons">
              <Link href="https://www.diageo.com/en/news-and-media/stories/2021/johnnie-walker-keeps-walking-as-it-launches-its-biggest-ever-sustainability-push">
                <a className="neoh_fn_button only_text">
                  <span className="text">Learn More</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #3 */}
      </div>



      
    </section>
  );
};
export default AboutComponent;
