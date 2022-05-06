import React from "react";

import "./Header.scss";
export default Header;

function Header() {
  return (
    <>
      <section className="wrap">
        <main>
          <section className="Nav_Bar">
            <section className="Nav_Bar_child_1">
              <a href="#">
                <div className="Shortly">Shortly</div>
              </a>
              <a href="#">
                <div className="Features">Features</div>
              </a>
              <a href="#">
                <div className="Pricing">Pricing</div>
              </a>
              <a href="#">
                <div className="Recources">Recources</div>
              </a>
            </section>

            <section className="Nav_Bar_child_2">
              <a href="#">
                <div className="Login">Login</div>
              </a>
              <a href="#">
                <div className="Sign_Up">Sign Up</div>
              </a>
            </section>
          </section>
          <section className="Hero_Section">
            {/* fbmnsdnfgjhxbfdsab */}
            <section className="down">
              <section className="text_img">
                <section className="Text">
                  <div className="First_Text">More than just shorter links</div>
                  <div className="Second_Text">
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                  </div>
                </section>

                <section className="Img">
                  <img
                    alt=""
                    src="https://elastic-ptolemy-3436fc.netlify.app/img/illustration-working-mobile.ed3d1277.svg"
                    className="First_img"
                  />
                </section>
              </section>

              {/* dhgsahghdffffshghsdghj */}
              <section className="btn">
                <button className="button">Get Started</button>
              </section>
            </section>
          </section>
        </main>
        <section className="body">
          <section className="input_section">
            <div className="input_div">
              <input
                className="input_field"
                placeholder="Shorten a link here..."
              />
              <button className="second_btn">Shorten It</button>
            </div>
          </section>

          <section className="description">
            <div className="stats">Advanced Statistics</div>

            <section className="second_stats">
              <div className="second_stats_div">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </div>
            </section>
          </section>
        </section>

        <hr className="line" />
        <section className="cards">
          <section className="first_card">
            <div className="card_img_div">
              <img
                alt=""
                src="https://elastic-ptolemy-3436fc.netlify.app/img/icon-brand-recognition.1922b68a.svg"
              />
            </div>

            <div className="first_card_detail">
              <spam className="heading">Brand Recognition</spam>
              <br />
              <div className="second_heading">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </div>
            </div>
          </section>
          <section className="second_card">
            <div className="card_img_div">
              <img
                alt=""
                src="https://elastic-ptolemy-3436fc.netlify.app/img/icon-detailed-records.e3d9caa9.svg"
              />
            </div>

            <div className="first_card_detail">
              <spam className="heading">Detailed Records</spam>
              <br />
              <div className="second_heading">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </div>
            </div>
          </section>

          <section className="third_card">
            <div className="card_img_div">
              <img
                alt=""
                src="https://elastic-ptolemy-3436fc.netlify.app/img/icon-fully-customizable.cc099cea.svg"
              />
            </div>

            <div className="first_card_detail">
              <spam className="heading">Fully Customizable</spam>
              <br />
              <div className="second_heading">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </div>
            </div>
          </section>
        </section>
      </section>
      {/* hjdgashg */}
      <section class="footer_div">
        <div class="footer_text">Boost your links today</div>
        <button class="footer_btn">Get Started</button>
      </section>

      <section className="footer_description">
        <section className="first_row">
          <div className="footer_shortly">Shortly</div>
        </section>

        <section className="section_style_same">
          <div className="same_style">Features</div>
          <div>Link Shortening</div>
          <div>Branded Linkss</div>
          <div>Analytics</div>
        </section>

        <section className="section_style_same">
          <div className="same_style">Recources</div>
          <div>Blog</div>
          <div>Developers</div>
          <div>Support</div>
        </section>

        <section className="section_style_same">
          <div className="same_style">company</div>
          <div>About</div>
          <div>Our Team</div>
          <div>Careers</div>
          <div>Contact</div>
        </section>
        {/* <section className="fifth_row">
          <div>=</div>
          <div>=</div>
          <div>=</div>
          <div>=</div>
        </section> */}
      </section>
    </>
  );
}
