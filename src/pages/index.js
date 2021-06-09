import React, { useMemo, useState } from "react";
import "../styles/index.scss";

import { Link, graphql } from "gatsby";

import Container from "../components/container";
import ContainerContext from "../components/containerContext";

import climate2 from "../images/climate2.png";

import speculative1 from "../images/speculative1.png";

import tohil1 from "../images/tohil1.png";
import tohil2 from "../images/tohil2.png";
import tohil3 from "../images/tohil3.png";

import tippingpoints1 from "../images/tippingpoints1.jpg";

const IndexPage = (props) => {
  const [eventKey, setEventKey] = useState(null);

  const context = useMemo(
    () => ({
      activeEventKey: eventKey,
      onToggle: (newEventKey) => setEventKey(newEventKey),
    }),
    [eventKey, setEventKey]
  );

  return (
    <ContainerContext.Provider value={context}>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <main>
        <title>Lele</title>

        <Container>
          {{
            title: (
              <>
                <h1>
                  Lele
                  <br />
                  here :)
                </h1>
                <p>
                  interface design
                  <br />
                  digital arts
                  <br />
                  multimedia
                </p>
              </>
            ),
            body: (
              <>
                <img className="profile-picture" src={props.data.contentfulAboutMe.profilePicture.file.url}></img>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      props.data.contentfulAboutMe.description.description,
                  }}
                ></div>
              </>
            ),
          }}
        </Container>

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
                  {props.data.allContentfulIgFilter.edges.map(
                    ({ node: igFilter }) => (
                      <div className="spark-video-wrapper" key={igFilter.id}>
                        <div
                          style={{
                            padding: "177.78% 0 0 0",
                            position: "relative",
                          }}
                        >
                          <video
                            src={igFilter.video.file.url}
                            className="video"
                            autoPlay
                            loop
                            muted
                            playsInline
                          ></video>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              igFilter.description &&
                              igFilter.description.description,
                          }}
                        ></p>
                      </div>
                    )
                  )}
                </div>
              </>
            ),
          }}
        </Container>

        <Container coral>
          {{
            title: (
              <h1>
                Scrolly
                <br />
                telling
              </h1>
            ),
            body: (
              <>
                <p>
                  Meat = Heat? Website to raise awareness on climate change in
                  connection to meat consumption, written in Html and Css.
                  <br />
                  Teamwork with Aline Sawalsky.
                </p>

                <div style={{ padding: "55.07% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/553925379?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
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
            title: (
              <h1>
                Specula
                <wbr />
                tive
                <br /> Design
              </h1>
            ),
            body: (
              <>
                <p>
                  The future in a bag: What are everyday objects of
                  crisis-ridden futures? <br />
                  A scenario space navigating between climate crisis, ageing and
                  cyber attacks, which designs resilient artefacts between
                  smartness, dumbness, convenience and inconvenience.
                  <br />
                  Group project with Fidel Thomet, Thomas Haas, Felix Harle
                  <br />
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/WK2JKF_QzZU?controls=0"
                    title="YouTube video player"
                    frameBorder="0"
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

        <Container>
          {{
            title: (
              <h1>
                Scenario
                <br />
                Instal
                <wbr />
                lation
              </h1>
            ),
            body: (
              <>
                <p>
                  Visual experiments on disruptive climate system changes due to
                  global warming. We only have only 8 more years to reach the
                  tipping points of our earth. The dieback of the amazon
                  rainforest is just one of them. <br /> Group project with Memo
                  Yapici, Kenny Löffler, Mariana Reinhardt
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/363540500?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0#t=9m19s&amp;dnt=1"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
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
                data
                <br />
                graphic
              </h1>
            ),
            body: (
              <>
                <p>
                  The holy Tohil. The Fireplace of the Maya in data. <br /> 1000
                  words with no words needed
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
                    src="https://player.vimeo.com/video/557309123?&amp;muted=0&amp;autoplay=0&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
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
                    title="ZoomZoom_by Lele Schlaich"
                  ></iframe>
                </div>
              </>
            ),
          }}
        </Container>

        <div className="container footer">
          <h1>
            <a href="mailto:lele@czyk.de">Mail me!</a>
          </h1>
          <div>
            <Link to="impressum">Impressum</Link>
            <Link className="ml-1" to="datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </main>
    </ContainerContext.Provider>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query portfolio {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulIgFilter(sort: { fields: title }) {
      edges {
        node {
          id
          description {
            description
          }
          video {
            file {
              url
            }
          }
        }
      }
    }
    contentfulAboutMe(contentful_id: { eq: "2zdg2IXjGyOZJhd3rGqqGn" }) {
      description {
        description
      }
      profilePicture {
        file {
          url
        }
      }
    }
  }
`;
