import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img src="img/hero/jwgold2.png" alt="" />
                </div>
                <h3 className="fn_title">Indulge in Elegance: Exclusive Deals from Johnnie Walker</h3>
                <p className="fn_desc">
                Seize your chance to revel in unparalleled whisky experiences and offers. Join now and claim your VIP access to premium luxury                </p>
              </div>
              <div className="subscribe_form">
                <div className="subscribe_in">
                  <input type="text" placeholder="Email..." />
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">Subscribe</span>
                  </a>
                </div>
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                  data-message="You have subscribed to our updates. Thank you"
                  data-invalid-email="Please enter valid email!"
                />
                <div className="empty_notice">
                  <span>Please enter your Email</span>
                </div>
              </div>
              <div className="neoh_fn_social_list">
                <ul>
                  <li>
                    <a href="https://twitter.com/johnniewalker_">
                      <i className="fn-icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/JohnnieWalkerSingapore/?brand_redir=92634114453">
                      <i className="fn-icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/johnniewalker/">
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                  Copyright {new Date().getFullYear()} - Designed &amp;
                  Developed by{" "}
                  <a
                    
                    target="_blank"
                    rel="noreferrer"
                  >
                    MNXD
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <ul>
                  <li>
                    <a href="https://footer.diageohorizon.com/dfs/assets/policies.diageohorizon.com/PrivacyPolicy_en.html">Cookies</a>
                  </li>
                  <li>
                    <a href="https://www.diageoprivacycentre.com/en-sg?pp=https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-sg">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
