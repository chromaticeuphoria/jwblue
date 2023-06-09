import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import Image from 'next/image'; // Import the Image component

const Contact = () => {
  return (
    <Layout pageName={"Contact"}>
      <PageBanner pageName={"Contact"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            {/* ... */}
            <div className="desc_holder">
              {/* ... */}
            </div>
            <div className="info_list">
              <ul>
                <li>
                  <p className="label">Address</p>
                  <h3 className="value">69 Queen St, Melbourne Australia</h3>
                </li>
                <li>
                  <p className="label">Phone</p>
                  <h3 className="value">
                    <a href="tel:+7068980751">(+706) 898-0751</a>
                  </h3>
                </li>
                <li>
                  <a href="mailto:example@domain.com" className="email">
                    example@domain.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
