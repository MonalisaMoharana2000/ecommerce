import React from "react";
// import Navbar  from "./Navbar";
import "./About.css";

import "./App.css";
import logo from "./munu/munu.jpg";
import mona from "./munu/mona.jpg";
import raja from "./munu/raja.jpg";
import background from "./munu/bg.WEBP";

function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <div className="main">
          <div className="abttitle">
            <h2>About Our Dhanes Cart</h2>
          </div>

          <div className="desc">
            <p>
              Dhanes Kart was founded by Dhaneswar Setha on 5th Dec,2020,it
              started simply as a Community page on Instagram with a sole motive
              to represent its city and give a platform to easily shoping
              beautiful outfit. With overwhelming support of the people Dhanes
              Kart started achieving new heights every day, and expanding the
              team became the need of the hour and that’s the point when 3 very
              talented members joined in - Dhaneswar Setha as Co-admin and
              Content Creator, Raja Sahoo as Administration &amp; Business
              Administration HEAD , Monalisa Moharana as Content writer &amp;
              Content Research Head, Dhaneswar as Fb Admin &amp; Marketing
              Manager &amp; Web Developer &amp; Creative Head.
            </p>
            <p>
              With all this bunch of talented members within a year Dhanes Kart
              grew to 10K+ Followers on Instagram and became the #1 Community of
              Jajpur, the #Dhanes Kart became the third most popular hashtag in
              Odisha. In mid 2021 we launched our first brand DMR United which
              is a Merchandise brand and it received a good support from the
              audience. By end of 2021 Dhanes Kart now had a 100+ members team
              spread across Odisha. In January 2022 we launched Dhanes Kart
              wholesealing Complex to deliver the best outfit equipment &amp;
              all cermonial outfit experience across the city.in this span of
              1,.5 years we had an opportunity to work with some big brands in
              the market like Tommy Hilfiger, Peter England, Allen Solly, Arrow,
              Raymond, ADIDAS, Levi's etc. Recently in the month of Dec we
              launched Dhanes Kart Marketing Solutions which is a 360 Digital
              &amp; Online Marketing Solutions Company, the company has a team
              of 15 professionals &amp; best from each field to deliver the best
              experience to their client at a very affordable cost and the sole
              motive of the brand is to help Local brands Trends.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="team">
            <h2>Our Team Member</h2>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "300px",
                minHeight: "400px",
              }}
            >
              <div className="box">
                <div className="img">
                  <img src={logo} title="Dhanes" />
                </div>
                <h2>
                  Dhaneswar Seth
                  <br />
                  <span>ReactJS Developer</span>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <span>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/dhanes.munu.96">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/setha_dhaneswar">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/dhaneswar-setha-737279224/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dhanesmunu/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "300px",
                minHeight: "400px",
              }}
            >
              <div className="box">
                <div className="img">
                  <img src={mona} title="Mona" />
                </div>
                <h2>
                  Monalisa Moharana
                  <br />
                  <span>ReactJS Developer</span>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "300px",
                minHeight: "400px",
              }}
            >
              <div className="box">
                <div className="img">
                  <img src={raja} itle="Raja" />
                </div>
                <h2>
                  Raja Sahoo
                  <br />
                  <span>ReactJs Developer</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
