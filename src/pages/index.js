import * as React from "react";
import "../styles/index.scss";

import Container from "../components/container";

import climate2 from "../images/climate2.png";

import speculative1 from "../images/speculative1.png";

import tohil1 from "../images/tohil1.png";
import tohil2 from "../images/tohil2.png";
import tohil3 from "../images/tohil3.png";

import tippingpoints1 from "../images/tippingpoints1.jpg";

const IndexPage = () => {
  return (
    <>
      <script src="https://player.vimeo.com/api/player.js"></script>
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
                    <a
                      href="https://www.facebook.com/sparkarhub/portfolios/ig/leleschl/"
                      target="_blank"
                    >
                      AR-Filter-Portfolio
                    </a>
                  </p>
                </div>
                <div className="vertical-video-wrapper">
                  <div className="spark-video-wrapper">
                    <div
                      style={{ padding: "177.78% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/551549680?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="spark3"
                      ></iframe>
                    </div>
                    <p>
                      Sustainability Challenge with Nina Zeisler. Video about
                      the project{" "}
                      <a href="https://vimeo.com/435892256" target="_blank">
                        here
                      </a>
                    </p>
                  </div>

                  <div className="spark-video-wrapper">
                    <div
                      style={{ padding: "177.78% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/551549444?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="spark1"
                      ></iframe>
                    </div>
                    <p>
                      Face-Embroidery for music video to TACHY´s “Signify” with
                      Mariana Reinhardt
                    </p>
                  </div>

                  <div className="spark-video-wrapper">
                    <div
                      style={{ padding: "177.78% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/551553475?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="spark4.webm"
                      ></iframe>
                    </div>
                    <p>
                      Random generator “What Riso-Colour are you” for
                      @drucken3000
                    </p>
                  </div>

                  <div className="spark-video-wrapper">
                    <div
                      style={{ padding: "177.78% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/553921813?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="nipple.mov"
                      ></iframe>
                    </div>
                    <p>
                      Breaking Instagram-Boundaries: Nipple “Sticker”.
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
                  Scrollytelling platform to raise awareness on meat
                  consumption.
                  <br />
                  Teamwork with Aline Sawalsky.
                </p>

                <div style={{ padding: "55.07% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/553925379?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="climate3.webm"
                  ></iframe>
                </div>
                <p>
                  See the full website here:
                  <a
                    href="https://interface.fh-potsdam.de/klimagrafik/meat-eq-heat/"
                    target="_blank"
                  >
                    &nbsp;Meat=Heat?
                  </a>
                </p>
                <img className="images mt-2" src={climate2}></img>
              </>
            ),
          }}
        </Container>

        <Container coral>
          {{
            title: <h1>Speculative Design: The future in a bag</h1>,
            body: (
              <>
                <p>
                  What are everyday objects of crisis-ridden futures? <br />
                  The Future in a Bag navigates the scenario space between
                  climate crisis, ageing and cyber attacks and designs
                  resilience artefacts between smartness, dumbness, convenience
                  and inconvenience.
                  <br />
                  Group project with Fidel Thomet, Thomas Haas, Felix Harle
                  <br />
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube.com/embed/WK2JKF_QzZU?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>
                  See the full website here:
                  <a
                    href="https://future-in-a-bag.vercel.app/#/"
                    target="_blank"
                  >
                    &nbsp;Scenario-Website
                  </a>
                </p>
                <img className="images" src={speculative1}></img>
              </>
            ),
          }}
        </Container>

        {/* <Container>
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
                <div className="vertical-video-wrapper">
                  <div className="spark-video-wrapper">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/R9Sik5KrBYg"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="spark-video-wrapper">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/bd3tEKWhFOw"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="spark-video-wrapper">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/hFGuCoCL9fg"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </>
            ),
          }}
        </Container> */}

        {/* <Container coral>
          {{
            title: (
              <h1>
                Processing
                <br />
              </h1>
            ),
            body: (
              <>
                <p>Exploring Generative Design and Code in Processing.</p>
                <div className="vertical-video-wrapper">
                  <div
                    style={{ padding: "94.41% 0 0 0", position: "relative" }}
                    className="spark-video-wrapper"
                  >
                    <iframe
                      src="https://player.vimeo.com/video/303723796?muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
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
                  <div className="spark-video-wrapper">
                    <div
                      style={{ padding: "85.85% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/303713067?muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
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
                  </div>
                  <div className="spark-video-wrapper">
                    <div
                      style={{ padding: "75.21% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/303715448?muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
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
                  </div>
                </div>
              </>
            ),
          }}
        </Container> */}

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
                  Visual experiments on disruptive climate system changes due to
                  global warming. We only have only 8 more years to reach the
                  tipping points of our earth. The amazon rainforest is just one
                  of them. <br /> Group project with Memo Yapici, Kenny Löffler,
                  Mariana Reinhardt
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/363540500?autoplay=1&amp;color=ffffff&amp;portrait=0#t=9m17s"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
                <img className="images mt-1" src={tippingpoints1}></img>
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
                <p>
                  Infographic of the holy Tohil-Fireplace of the Maya. <br />{" "}
                  1000 words with no words needed
                </p>
                <img className="images mt-1" src={tohil1}></img>
                <img className="images mt-1" src={tohil2}></img>
                <img className="images mt-1" src={tohil3}></img>
                <p>Photos by Renee Klaßen</p>
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
              <>
                <p>
                  Exploring 3D and Animation in Maya. Muted due to copyright:
                  Original with Zoom Zoom by Polo and Pan.
                </p>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/554046210?&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="ZoomZoom_by Lele Schlaich"
                  ></iframe>
                </div>
              </>
            ),
          }}
        </Container>
      </main>
    </>
  );
};

export default IndexPage;
