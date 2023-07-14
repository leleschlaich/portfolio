import React, { useMemo, useState } from "react";
import "../styles/index.scss";

import { Link, graphql } from "gatsby";

import Container from "../components/container";
import ContainerContext from "../components/containerContext";

import climate2 from "../images/climate2.png";

import speculative1 from "../images/speculative1.png";

import acai1 from "../images/acai1.png";
import acai2 from "../images/acai2.png";

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

        <Container>
          {{
            title: (
              <h1>
                Decolonising 
                <br />
                Design
              </h1>
            ),
            body: (
              <>
                <p>
                Website-Link:
                  <a
                    href="https://leleschlaich.github.io/decolonizingdataviz/"
                    target="_blank"
                  >
                    &nbsp;Açaí, the superfood?
                  </a>
                  <br />
                  Supervision: Prof. Dr. Marian Dörk and Lamin Manneh
                  <br />
                  Teamwork: Mariana Reinhardt
                  <br />
                  
                  
                  <br />
                We were intrigued by the story of the açaí and how it is entangled by the marketing of superfoods. From an indigenous food to a trendy superfood bowl: how did this process happen? How does the process of exotification of products originally from the Global South happens? What is the impact of such products? On communities, environmentally and more.
                <br />
                  
                  <br />We looked at the small stories and data but also the important numbers, historical facts, papers and information to see bigger picture on how the açaí is depicted, in a small but also on a larger scale. For example, we were fascinated by the indigenous myth but then also seeing the numbers of exportation nowadays.
                  <br />
                  <br />In a lot of sources the opinion and perspectives shown don´t capture the other side of the story. For instance when researching about superfoods, they are mostly highly advertised and if we look deeper there’s a lot more we could find in a critical direction.
                 
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/755631196?h=3d2e8cffff?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
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
                <img className="images mt-1" src={acai1}></img>
                <img className="images mt-1" src={acai2}></img>
               </>
               
            ),
          }}
        </Container>

<Container>
          {{
            title: (
              <h1>
                UX 
                <br />
                UI
              </h1>
            ),
            body: (
              <>
                <p>
                Website-Link:
                  <a
                    href="https://neeeu.io/"
                    target="_blank"
                  >
                    &nbsp;NEEEU
                  </a>
                  <br />
                  Redesign Website
                  <br />
                  <br />
                 worked on the Apps Jo´s Memory and Magic Roads to Aliso. 

Jo´s Memory: Das Mobile Game vermittelt auf spielerische Art Wissen über archäologische Objekte. Drei  Museen im Bereich Archäologie und eine Digitalagentur haben sich mit Bürger:innen zusammengeschlossen und arbeiten gemeinsam an der Entwicklung neuer digitaler Vermittlungsformate. Ziel dieses Verbunds ist es, mit Hilfe von interaktiven Medien (wie Virtual und Augmented Reality) archäologische Arbeitsweisen (Ausgraben, Archivieren, Restaurieren, Interpretieren etc.) für alle erlebbar zu machen.
              <br />
                  <br />

https://www.lwl-landesmuseum-herne.de/de/unsere-digitalen-angebote/jos-memory-das-game/
 
Appstore: https://apps.apple.com/us/app/jos-memory/id1577374989

https://www.blackbox.game/josmemory

https://www.blackbox.game/magic-roads


                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/844899020?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
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
                <img className="images mt-1" src={acai1}></img>
                <img className="images mt-1" src={acai2}></img>
               </>
               
            ),
          }}
        </Container>

<Container>
          {{
            title: (
              <h1>
                Track 
                <br />
                the bat
              </h1>
            ),
            body: (
              <>
                <p>
 A tool for documenting bat sightings with Citizen Science.
<br />
<br />
                Bats do not play a big role in our everyday life, although they are all around us and especially in cities, due to shelter, niches and food sources.
The aim of this work is to show how we, as inhabitants of cities, can contribute to the welfare of bats and at the same time support science, connect and inform ourselves. For this reason, a website will be created as a network and tool. Most important is to attract attention.
Furthermore, by sharing data, education is created; informing about bats, insects and their connection, encouraging simple action, showing how to get involved and help, and how to act in emergencies. In doing so, users should be able to get information easily and participate without a hurdle.
The theories of Citizen Science, as well as Nudging, will be explored and how they can be used. It also explains the connection of the theories to this work, the „Track the Bat“ project.
The inspiration for „Track the Bat“ comes from the student project: „Catch me if you can“ led by Dr. Tanja Straka at the TU Berlin. Data collection was started by students and supported by Citizen Science. This data will be made visible in the form of an interactive map, as part of a website. The data includes the 19 selected sites and associated per month the number of bats, bat species, food occurrence (insect numbers and species), ground conditions (degree of sealing) and the presence of water bodies on site. In this study, the data were recorded in winter and not in summer, as in most scientific studies on animals or even bats. For bats, the increasingly mild winters due to climate change are a major problem, as they disrupt hibernation, which is essential for bats.
So far, data is only available for the winter of 2021. The goal is to collect this data over the next few years to create a more meaningful picture.
My motivation is to show the bat as an example species, which has to adapt to humans and therefore to climate change. But it stands for many other animal species. The website „Track the Bat“ aims to make this visible through interactivity and to show how close the animals are to us.

                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/755631196?h=3d2e8cffff?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
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
                <img className="images mt-1" src={acai1}></img>
                <img className="images mt-1" src={acai2}></img>
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
                Website-Link:
                  <a
                    href="https://interface.fh-potsdam.de/klimagrafik/meat-eq-heat/"
                    target="_blank"
                  >
                    &nbsp;Meat=Heat?
                  </a>
                  <br />
                  Supervision: Prof. Boris Müller
                  <br />
                  Teamwork: Aline Sawalsky
                  <br />
                  <br />
                  Website to raise awareness on climate change in
                  connection to meat consumption, written in Html and Css. 
                  <br />
                  <br />
                  The main pillars in our concept are to not missionize the topic, but to communicate on a personal level, use simple communication, and to tell stories.
                  
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
                <br />
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
                Website-Link:
                  <a
                    href="https://future-in-a-bag.vercel.app/#/"
                    target="_blank"
                  >
                    &nbsp;The future in a bag
                  </a>
                <br />
               
                  Supervision: Prof. Dr. Frank Heidmann and M.A. Jordi Tost
                  <br />
                  Teamwork: Fidel Thomet, Thomas Haas, Felix Harle
                  <br />
                  <br />
                The Future in a Bag: What are everyday objects of crisis-ridden futures? A scenario space navigating between climate crisis, ageing and cyber attacks, which designs resilient artefacts between smartness, dumbness, convenience and inconvenience. How can the concept of resilience be organised in a decentralised, spontaneous, flexible and accessible way?
                <br /><br />
Our project is looking for possible scenarios. To do this, we created many small crisis visions of the future in which the population uses simple LoFi artefacts to protect themselves against two acute risks. For each scenario, we show a smart, i.e. high-tech prototype and a dumb, i.e. natural and intuitive prototype.
<br /><br />
In our work, we show alternative strategies of crisis management that focus on the autonomy and decision-making power of individual citizens. With the help of these speculative futures, we illustrate that a city can also be organised bottom-up in many respects.
<br /><br />
                 
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
                <br />
                <img className="images" src={speculative1}></img>
              </>
            ),
          }}
        </Container>

        
       {/*  <Container>
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
        </Container> */}

        <Container>
          {{
            title: (
              <h1>
                Animation &
                <br />
                Film
              </h1>
            ),
            body: (
              <>
                <p>
                Semester: 6
                  <br />
                  <br />
                  My Erasmus-Semester was a great time for me to explore 
                  other and mainly new directions of digital arts and multimedia: 
                  3-Dimensionality and Animation, 2D-Animation, Film and Sound Production and Programming. Following I will show two example projects of my time there.
                  <br />
                  <br />
                  In the class Multimedia Studio Practices II by José Teixeira we created in just a few weeks short 3-Dimensional Clips in Maya with topics of our choice.
                  I was lucky to have another 3-D animation course in parallel because there had to be learned a lot in just a short amount of time. And the language barrier did not make it easier. But in the end I was impressed how much is possible if you really lean into it. I am definitely still at a very early stage but I´m really interested to do more in that direction in the future.
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
                <p>
                In the class Contemporary Art Theory and Lab Practices II with Carlos Amaral and Rui Caldas we learned everything about sound and video recording, production and editing.
                My group and me decided to create a documentary. I liked that we were not working at home or uni for this project but at the place we were documenting. Talking to the people and their lives was a approach for me where I learned a lot.
                Also being at a professional sound studio imitating sounds and editing them in a very precise way was a new experience for me.</p>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/772871719?h=b70b09f1ca&amp;muted=0&amp;autoplay=0&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
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
                {/* <img className="images mt-1" src={tippingpoints1}></img>
              </> */}
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
