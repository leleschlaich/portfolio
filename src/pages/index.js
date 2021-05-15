import * as React from "react";
import "../styles/index.scss";

import Container from "../components/container";

import spark1 from "../videos/spark1.webm";
import spark2 from "../videos/spark2.webm";
import spark3 from "../videos/spark3.webm";
import spark4 from "../videos/spark4.webm";
import spark5 from "../videos/spark5.webm";
import spark6 from "../videos/spark6.webm";

import climate1 from "../images/climate1.png";
import climate2 from "../images/climate2.png";
import climate3 from "../videos/climate3.webm";

import speculative1 from "../images/speculative1.png";



import tohil1 from "../images/tohil1.png";
import tohil2 from "../images/tohil2.png";
import tohil3 from "../images/tohil3.png";

import tippingpoints1 from "../images/tippingpoints1.jpg";
import tippingpoints2 from "../images/tippingpoints2.jpg";
import tippingpoints3 from "../images/tippingpoints3.jpg";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="container coral">
        <h1 className="title">
          Lele
          <br />
          here :)
        </h1>
        <p>
          digital arts
          <br />
          multimedia
          <br />
          interface design
        </p>
      </div>

      <Container>
        {{
          title: (
            <h1>
              Augmented
              <br />
              Reality
            </h1>
          ),
          body: (
            <>
              <div>
                <p>
                  Augmented Reality with SparkAR.
                  <br /> See more in my{" "}
                  <a href="https://www.facebook.com/sparkarhub/portfolios/ig/leleschl/">
                    AR-Filter-Portfolio
                  </a>
                </p>
              </div>
              <div className="vertical-video-wrapper">
                <div className="spark-video-wrapper">
                  <video
                    className="spark-video"
                    autoPlay
                    loop
                    muted
                    src={spark4}
                  ></video>
                  <p>
                    Random generator “What Riso-Colour are you” for @drucken3000
                  </p>
                </div>
                <div className="spark-video-wrapper">
                  <video
                    className="spark-video"
                    autoPlay
                    loop
                    muted
                    src={spark5}
                    src={spark6}
                  ></video>
                  <p>
                    Breaking Instagram-Boundaries: Nipple “Sticker”
                    https://vimeo.com/502976185
                  </p>
                </div>
                <div className="spark-video-wrapper">
                  <video
                    className="spark-video"
                    autoPlay
                    loop
                    muted
                    src={spark1}
                  ></video>
                  <p>
                    Face-Embroidery for music video to TACHY´s “Signify” with
                    Mariana Reinhardt
                  </p>
                </div>
                <div className="spark-video-wrapper">
                  <video
                    className="spark-video"
                    autoPlay
                    loop
                    muted
                    src={spark3}
                  ></video>
                  <p>
                    Sustainability Challenge with Nina Zeisler. Video about the
                    project <a href="https://vimeo.com/435892256">here</a>
                  </p>
                </div>
              </div>
            </>
          ),
        }}
      </Container>

      <Container coral>
        {{
          title: (
            <h1>
              Climate
              <br />
              Justice
            </h1>
          ),
          body: (
            <>
              <p>
                scrollytelling platform to raise awareness on meat consumption.
                Teamwork with Aline Sawalsky. See the full website here:
                <a href="https://interface.fh-potsdam.de/klimagrafik/meat-eq-heat/">
                  Meat=Heat?
                </a>
              </p>

              <img className="images" src={climate1}></img>
              <img className="images" src={climate2}></img>
              <video
                className="spark-video"
                autoPlay
                loop
                muted
                src={climate3}
              ></video>
            </>
          ),
        }}
      </Container>

      <Container coral>
        {{
          title: (
            <h1>
              Speculative Design:
              <br />
              The future in a bag
            </h1>
          ),
          body: (
            <>
              <p>
                What are everyday objects of crisis-ridden futures? The Future
                in a Bag navigates the scenario space between climate crisis,
                ageing and cyber attacks and designs resilience artefacts
                between smartness, dumbness, convenience and inconvenience.
                Group project with Fidel Thomet, Thomas Haas, Felix Harle
                <a href="https://future-in-a-bag.vercel.app/#/">
                  Scenario-Website
                </a>
              </p>
              <img className="images" src={speculative1}></img>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WK2JKF_QzZU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </>
          ),
        }}
      </Container>

      <Container>
        {{
          title: (
            <h1>
              Exposing
              <br />
              Sanssouci
            </h1>
          ),
          body: (
            <>
              <p>
                Immersive 360° Videos to create time travel in the Garden of
                Sanssouci. Group Project with Mariana Reinhardt and Renee
                Klaßen.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/R9Sik5KrBYg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bd3tEKWhFOw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hFGuCoCL9fg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </>
          ),
        }}
      </Container>

      <Container coral>
        {{
          title: (
            <h1>
              Processing
              <br />
            </h1>
          ),
          body: (
            <>
              <p>
                Experimenting with Code in Processing to generate Generative
                Design.
              </p>
              <div style={{ padding: "94.41% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/303723796?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="T&amp;uuml;rchen 9"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <div style={{ padding: "85.85% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/303713067?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="T&amp;uuml;rchen 1"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <div style={{ padding: "79.3% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/303731038?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="T&amp;uuml;rchen 18"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <div style={{ padding: "79.3% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/303729237?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="T&amp;uuml;rchen 14"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <div style={{ padding: "75.21% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/303715448?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="T&amp;uuml;rchen 3"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </>
          ),
        }}
      </Container>

      <Container>
        {{
          title: (
            <h1>
              Tipping
              <br />
              Points
            </h1>
          ),
          body: (
            <>
              <p>
                We have only 8 more years to reach the tipping points of our
                earth. The amazon rainforest is just one of them. Group project
                with Memo Yapici, Kenny Löffler, Mariana Reinhardt
              </p>
              <iframe
                src="https://player.vimeo.com/video/363540500"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/363540500">
                  Tipping Points: Visual experiments on disruptive climate
                  system changes due to global warming
                </a>{" "}
                from{" "}
                <a href="https://vimeo.com/fhpotsdam">Fachhochschule Potsdam</a>{" "}
                on <a href="https://vimeo.com">Vimeo</a>.
              </p>
            </>
          ),
        }}
      </Container>

      <Container>
        {{
          title: (
            <h1>
              Tohil
              <br />
            </h1>
          ),
          body: (
            <>
              <p>1000 Words challenge with no words needed. Infographic</p>
              <img className="images" src={tohil1}></img>
            </>
          ),
        }}
      </Container>

      <Container>
        {{
          title: (
            <h1>
              3D
              <br />
              Animation
            </h1>
          ),
          body: (
            <p>
              Experimenting in Maya with 3D and Animation. First Outcome: Zoom
              Zoom.
            </p>
          ),
        }}
      </Container>
    </main>
  );
};

export default IndexPage;
