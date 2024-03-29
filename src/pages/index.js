import React, { useMemo, useState } from "react";
import "../styles/index.scss";

import { Link, graphql } from "gatsby";

import Container from "../components/container";
import ContainerContext from "../components/containerContext";

import climate2 from "../images/climate2.png";

import speculative1 from "../images/speculative1.png";

import acai1 from "../images/acai1.png";
import acai2 from "../images/acai2.png";



import trackthebat1 from "../images/trackthebat1.png";
import trackthebat2 from "../images/trackthebat2.png";
import trackthebat3 from "../images/trackthebat3.png";
import trackthebat4 from "../images/trackthebat4.png";
import trackthebat5 from "../images/trackthebat5.png";
import trackthebat6 from "../images/trackthebat6.png";
import trackthebat7 from "../images/trackthebat7.png";
import trackthebat8 from "../images/trackthebat8.png";

import trackthebat10 from "../images/trackthebat10.jpeg";
import trackthebat11 from "../images/trackthebat11.jpeg";
import trackthebat12 from "../images/trackthebat12.jpeg";
import trackthebat13 from "../images/trackthebat13.jpeg";

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
                  Projects with Augmented Reality created in SparkAR. 
                  <br />
                  
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
                  Supervision: Prof. Dr. Marian Dörk and Lamin Manneh, FH Potsdam
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
                  Projects with design-studio NEEEU, Internship <br />
                Redesign of
                  <a
                    href="https://neeeu.io/"
                    target="_blank"
                  >
                    &nbsp;NEEEU website
                  </a>
                  
                 , Teamwork 
                 <br />
                  App Jo´s Memory:
                  <a
                    href="https://neeeu.io/projects/jos-memory-a-game-that-opens-up-access-to-archeology"
                    target="_blank"
                  >
                    &nbsp;Information </a>
                  and 
                  <a
                    href="https://apps.apple.com/us/app/jos-memory/id1577374989"
                    target="_blank"
                  >
                    &nbsp;Appstore</a>, Teamwork
                  <br />
                  App Magic Roads to Aliso: 
                  <a
                    href="https://neeeu.io/projects/magic-roads-to-aliso-dancing-skeletons-a-mysterious-germanic-seer-and-chickens-that-predict-the-future"
                    target="_blank"
                  >
                    &nbsp;Information </a>
                  and 
                  <a
                    href="https://apps.apple.com/us/app/magic-roads/id6443717891"
                    target="_blank"
                  >
                    &nbsp;Appstore 
                  </a>
                  , Teamwork
                  <br /><br />
                 For both Apps I worked on the UI/UX and Augmented reality inputs.

                 Both convey knowledge about archaeological objects in a playful way. Three museums in the field of archaeology and a digital agency have joined forces with citizens and are working together to develop new digital communication formats. The aim of this alliance is to use interactive media (such as virtual and augmented reality) to make archaeological working methods (excavation, archiving, restoration, interpretation, etc.) tangible for everyone.
              <br />
                  <br />
                  
    


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
                
               </>
               
            ),
          }}
        </Container>

<Container>
          {{
            title: (
              <h1>
                Citizen 
                <br />
                Science
              </h1>
            ),
            body: (
              <>
                <p>
 Track the bat: A tool for documenting bat sightings with Citizen Science
<br />
Supervision: Prof. Boris Müller, Frank Rausch, FH Potsdam, Bachelor-Project
<br /><br />
Bats do not play a big role in our everyday life, although they are all around us and especially in cities, due to shelter, niches and food sources. 
<br />
<br />

The aim of this work is to show how we, as inhabitants of cities, as citizen scientists, can contribute to the welfare of bats and at the same time support science, connect and inform ourselves. For this reason, a website is created as a tool and network. 
<br />
<br />


The inspiration for „Track the Bat“ started from the student project: „Catch me if you can“ led by Dr. Tanja Straka at the TU Berlin. Data collection was started by students and supported by Citizen Science.<br /> „Track the Bat“ makes this data visible in the form of an interactive map, as part of a website. The data includes the 19 selected sites and associates per month the number of bats, bat species, food occurrence (insect numbers and species), ground conditions (degree of sealing) and the presence of water bodies on site. 
<br />
<br />

For bats, the increasingly mild winters due to climate change are a major problem, as they disrupt hibernation, which is essential for bats. My motivation is to show the bat as an example species, which has to adapt to humans and therefore to climate change. But it stands for many other animal species. The website „Track the Bat“ aims to make this visible through interactivity and to show how close the animals are to us.
                </p>
                <br />Welcome-Screen
                <img className="images mt-1" src={trackthebat1}></img>
                <br /><br />Overview and legend
                <img className="images mt-1" src={trackthebat2}></img>
                <br /><br />Add your own sightings
                <img className="images mt-1" src={trackthebat3}></img>
                <br /><br />Registration successful
                <img className="images mt-1" src={trackthebat4}></img>
                <br /><br />New Level
                <img className="images mt-1" src={trackthebat5}></img>
                <br /><br />Mobile View
                <img className="images mt-1" src={trackthebat6}></img>
                <br /><br />How to
                <img className="images mt-1" src={trackthebat7}></img>
                <br /><br />Bat species in Berlin
                <img className="images mt-1" src={trackthebat8}></img>
                <br /><br />The project-book:
               
                <img className="images mt-1" src={trackthebat10}></img>
                <br />
                <img className="images mt-1" src={trackthebat11}></img>
                <br />
                <img className="images mt-1" src={trackthebat12}></img>
                <br />
                <img className="images mt-1" src={trackthebat13}></img>
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
                  Zoom Zoom: 3D Animation in Maya
                  <br />
                  
                  Supervision: José Teixera, ESAD Porto
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
                O Cuteleiro: Documentary (sound and video recording, production, editing)
                <br />
                Supervision: Carlos Amaral, Rui Caldas, ESAD Porto
                <br />
                Teamwork: Helena Sá, Tatiana Pereira
                </p>
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
                  Boreal Forests and Amazon Rainforest: Video installation and visual experiments on tipping points
                  <br /> 
                  Supervision: Prof. Alexandra Martini, Myriel Milicevic
                  <br />
                  Teamwork: Memo Yapici, Kenny Löffler, Mariana Reinhardt
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
