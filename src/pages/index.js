import React, { useMemo, useState } from "react";
import "../styles/index.scss";

import { Link, graphql } from "gatsby";

import Container from "../components/container";
import ContainerContext from "../components/containerContext";

import climate2 from "../images/climate2.png";

import speculative1 from "../images/speculative1.png";

import acai1 from "../images/acai1.png";
import acai2 from "../images/acai2.png";

import timeportals1 from "../images/timeportals1.png";
import timeportals2 from "../images/timeportals2.png";

import scARf1 from "../images/scARf1.jpeg";
import scARf2 from "../images/scARf2.png";
import scARf3 from "../images/scARf3.jpg";

import knit1 from "../images/knit1.png";
import knit2 from "../images/knit2.jpg";
import knit3 from "../images/knit3.jpg";

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

        {/* <Container>
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
        </Container> */}

<Container>
          {{
            title: (
              <h1>
                Flow 
                <br />
                scARf
              </h1>
            ),
            body: (
              <>
                <p>
                
                   <span className="pfeil">↘</span> Hybrid textile design with AR
                  <br />
                   <span className="pfeil">↘</span> Freelancing project with Feia Nehl and Moniteurs Design, 2023
                  <br />
                  
                  <br />
                  The Flow scARf project was created as part of the Architecture Biennale in Venice, where we combined textile with augmented reality. Visitors were able to discover our animated scarf design via smartphone - a visual and experimental interpretation of the theme of people flow through movement, material and technology.

                <br />
                  
                  <br />The scarf picks up on the effects of the flooding in Venice - specifically on St. Mark's Square. One side of the scarf shows the natural, organic flow of movement of passers-by on an ordinary day. The other side visualizes the rigid, forced paths on the walkways that arise during high water. Flow scARf combines analog textile with digital storytelling and makes social dynamics visually and emotionally tangible. An immersive experience to flip over.

                  <br />
                  <br />AR fascinates me because I feel like it is still in its infancy - full of untapped possibilities and open to innovation. I find it particularly exciting that we as designers and developers can actively shape the future of this medium. Exploring new applications and combining the digital with the physical is both a challenge and a creative opportunity.
                <br /><br /></p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/1091154500?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
                    
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

                <img className="images mt-1" src={scARf1}></img>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }} >
                <img className="images mt-1" src={scARf2}></img>
                <img className="images mt-1" src={scARf3}></img>
                </div>
               </>
               
            ),
          }}
        </Container>

        <Container>
          {{
            title: (
              <h1>
                time 
                <br />
                portals
              </h1>
            ),
            body: (
              <>
                <p>
                  <span className="pfeil">↘</span>  Experience history anew with AR
                  <br />
                 
                  
                   <span className="pfeil">↘</span> Project at FRAMEFIELD, 2024/25
                  <br />
                  <span className="pfeil">↘</span> Website-Link & Video:
                
                  <a
                    href="https://www.framefield.com/projects/time-portals#slide_0"
                    target="_blank"
                  >
                    &nbsp;TimePortals
                  </a>
                  
                  <br /><br />
                  TimePortals is an AR experience on the former AEG site in Berlin and is available in the App Store. The app makes it possible to experience historical places spatially and atmospherically. I was involved in the content and design realization - from the creation of the audio guide texts to the selection of archive material and the design of 3D objects. These include a model of the site through the ages, the reconstructed course of historical streets and illustrations of workers and old streetcars in digital space.


                <br />
                  
                  <br />A particular focus was on the precise localization of the content at the original locations and the development of a coherent timeline that logically and narratively connects the historical stations. I adapted all visual elements to the audio layer in Unity to create a consistent and immersive experience. I designed the app icon and oversaw the entire user testing process to optimize the usability and impact of the application.


                  <br />
                  <br />The AEG tour is based on archives of the German Museum of Technology and guides users through central chapters of Berlin's industrial history. Thanks to an intuitive app interface and a narrator's voice, history is not only told - it is made tangible.
                </p>

                <div>
                <img className="images mt-1" src={timeportals1}></img>
                <img className="images mt-1" src={timeportals2}></img>
           
                </div>
               </>
               
            ),
          }}
        </Container>

<Container coral>
          {{
            title: (
              <h1>
                Knitting with
                <br /> the kniterate
              </h1>
            ),
            body: (
              <>
              
                <p>
                  <span className="pfeil">↘</span> Freelance Projects, 2024/25
                  <br />
              <br />
                  
                The Kniterate is a digitally controlled knitting machine that makes it possible to translate ideas directly from the design software into textile structures. Thanks to its flexibility, color gradients, thread thicknesses and stitch sizes can be precisely controlled - ideal for experimental knitting beyond classic hand techniques.


                <br /><br />
                In my projects, I used the device for micro scarves, which I designed in the software as reversible jacquard fabrics. Color combinations play a central role here: I deliberately try out strong contrasts and subtle tone-on-tone games, adjust thread thicknesses and stitch patterns and let myself be surprised by the unpredictable effects of the knitting machine.

                <br /><br />
                Together with my sister, I immersed myself in the world of Kniterate, learning by doing. We started by learning the basics of the software and then gradually moved on to more complex patterns and techniques.

                <br /><br />
                One highlight was our own collective exhibition, in which my scarf designs were shown. The spectrum there ranged from illustrative motifs and typographic statements to purely experimental image fields.
                <br /><br />
                We are currently developing new knitting ideas such as balaclavas and pollunders. In this way, concept, illustration and fashion craftsmanship merge into wearable statements that fully exploit the potential of digital knitting technology.
                <br />
                </p>
                

                <img className="images mt-1" src={knit1}></img>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }} >
                <img className="images mt-1" src={knit2}></img>
                <img className="images mt-1" src={knit3}></img>
                </div>
              
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
                  <span className="pfeil">↘</span> Projects in internship at NEEEU, 2021/22 <br />
                
                  <span className="pfeil">↘</span><a
                    href="https://neeeu.io/"
                    target="_blank"
                  >
                   &nbsp;NEEEU website
                  </a>
                  
                 <br />
                  <span className="pfeil">↘</span> App Jo´s Memory:
                  <a
                    href="https://neeeu.io/projects/jos-memory-a-game-that-opens-up-access-to-archeology"
                    target="_blank"
                  >
                    &nbsp;Info </a>
                  and 
                  <a
                    href="https://apps.apple.com/us/app/jos-memory/id1577374989"
                    target="_blank"
                  >
                    &nbsp;Appstore</a>
                  <br />
                  <span className="pfeil">↘</span> App Magic Roads to Aliso: 
                  <a
                    href="https://neeeu.io/projects/magic-roads-to-aliso-dancing-skeletons-a-mysterious-germanic-seer-and-chickens-that-predict-the-future"
                    target="_blank"
                  >
                    &nbsp;Info </a>
                  and 
                  <a
                    href="https://apps.apple.com/us/app/magic-roads/id6443717891"
                    target="_blank"
                  >
                    &nbsp;Appstore 
                  </a>
               
                  <br /><br />
                  During my time at NEEEU Spaces GmbH, I was involved in several projects - including the conception and design of the new studio website.
                  <br /><br />
                  Together with the team, I developed a web design that makes NEEEU's identity visible: a studio for interactive future formats that combines design, technology and social issues. The aim was to convey this interdisciplinary and experimental approach in terms of design - with a clear, modular structure, playful details and flexible content.
                  <br /><br />
                  I was also involved in two app projects, where I was responsible for the UI/UX design and the design of the augmented reality interactions. Both applications convey knowledge about archaeological objects in a playful way. Three archaeological museums worked together with a digital agency and members of the public on new forms of digital communication. The aim of the project was to use interactive media such as AR and VR to make archaeological working methods - such as excavation, archiving and interpretation - accessible to a wide audience.
                  <br />
                  <br />
                  
    


                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/844899020?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
                    
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
                track  
                <br />
                the bat
              </h1>
            ),
            body: (
              <>
                <p>
             <span className="pfeil">↘</span> A tool for documenting bat sightings with Citizen Science
            <br />
            <span className="pfeil">↘</span> Bachelor thesis with Prof. Boris Müller and Frank Rausch (FH Potsdam), 2023
            <br /><br />
            Bats live among us - especially in cities - but often go unnoticed. The “Track the Bat” project aims to change this: An interactive, low-threshold website shows how urban spaces affect bats - and how city dwellers can actively contribute to their protection and research through citizen science.
            <br />
            <br />

            The application originated from the student project “Catch me if you can” at TU Berlin, in which ecological data was collected with the help of citizen science. This data - for example on bat species, insect occurrence, soil sealing and water areas - is visualized on an interactive map at 19 locations.

            <br />
            <br />


            It is particularly clear how bats have to adapt to urban conditions and climate change - for example, through disturbed hibernation in milder temperatures.

            <br />
            <br />

            With its clear, playful design, mobile optimization and intuitive navigation, the website invites people of all ages to rediscover urban nature - and to get actively involved.
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
                The future
                <br /> in a bag
              </h1>
            ),
            body: (
              <>
              
                <p>
                  <span className="pfeil">↘</span> Speculative Design-Exploration
                  <br />
              
                  <span className="pfeil">↘</span> Project during studies with Prof. Dr. Frank  Heidmann & M.A. Jordi Tost (FH Potsdam) with Fidel Thomet, Thomas Haas, Felix Harle, 2020
                  <br /><span className="pfeil">↘</span> Website-Link:
                  <a
                    href="https://future-in-a-bag.vercel.app/#/"
                    target="_blank"
                  >
                    &nbsp;The future in a bag
                  </a><br /><br />
                  
                What might everyday objects look like in a future characterized by crises?

                <br /><br />
                The Future in a Bag is a speculative design project about possible life realities in future scenarios characterized by climate crisis, demographic change or cyber attacks. The focus is on the question of how resilience can be designed in a decentralized, spontaneous and accessible way.

                <br /><br />
                We developed a scenario generator, carried out worldbuilding and designed prototypes for various future scenarios - each in a “smart” (high-tech) and a “dumb” (low-tech) version. The artifacts were 3D-scanned and narratively embedded in their contexts.
                <br /><br />
                The result is an interactive website with micro-facets, each addressing two parallel crises. The designed objects function as speculative tools for self-help and strengthening individual agency.

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
        
        <Container>
          {{
            title: (
              <h1>
                Açaí – 
                <br />
                The Superfood?
              </h1>
            ),
            body: (
              <>
                <p>
                   <span className="pfeil">↘</span> An interactive platform for critical reflection
                 <br />
                
                  <span className="pfeil">↘</span> Project during studies with Prof. Dr. Marian Dörk & Lamin Manneh, Decolonizing Design (FH Potsdam) with Mariana Reinhardt, 2022
                 
                  <br />
                  <span className="pfeil">↘</span> Website-Link:
                  <a
                    href="https://leleschlaich.github.io/decolonizingdataviz/"
                    target="_blank"
                  >
                    &nbsp;Açaí, the superfood?
                  </a>
                  
                  
                  <br />
                  <br />
                In this project, we examine the journey of the açaí berry - from its importance as a traditional, indigenous food in the Amazon region to its status as a global superfood trend. How did this change come about? What role does marketing play in the exoticization of foods from the Global South - and what does this say about persisting colonial structures?

                <br />
                  
                  <br />We have brought together personal stories, indigenous myths, export data and scientific studies to paint a multi-layered picture of the global development of the açaí berry - from individual perspectives to systemic contexts. Many sources lack a critical analysis: superfoods are usually glorified without reflection and without shedding light on their complex backgrounds.

                  <br />
                  <br />Our interactive website invites users to choose their own paths through the topic and critically examine cultural appropriation, globalization and environmental impacts - for example, the question of how a berry deeply rooted in indigenous traditions has become a decontextualized wellness symbol in the Global North.
                 
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/755631196?h=3d2e8cffff?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
                    
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
                Meat=
                <br />
                Heat?
              </h1>
            ),
            body: (
              <>
                <p>
                  <span className="pfeil">↘</span> Scrollytelling website on climate change and meat consumption
                  <br />
                
                  
                  <span className="pfeil">↘</span> Project during studies with Prof. Boris Müller (FH Potsdam) with Aline Sawalsky, 2020
                   <br />
                   <span className="pfeil">↘</span> Website-Link:
                  <a
                    href="https://interface.fh-potsdam.de/klimagrafik/meat-eq-heat/"
                    target="_blank"
                  >
                    &nbsp;Meat=Heat?
                  </a>
                  <br />
                  <br />
                  Meat = Heat? is a scrollytelling website that draws attention to the links between meat consumption and climate change. Our aim was not to proselytize, but to make the topic accessible on a personal level, with clear language and narrative elements.
                  <br /><br />
                  The website starts with an animated graphic showing the increase in consumption of animal proteins from 1961 to the forecast for 2050 - in comparison between the global average and individual countries. 
                  <br /><br />
                  This is supplemented by a Sankey diagram that visualizes the CO2-equivalent emissions of four animal species in six categories: Agriculture, land use, animal feed, transportation, packaging and retail. This makes it easy to understand where emissions are generated and how our decisions affect the climate.
                  <br /><br />
                  The site also provides practical tips and facts for more conscious consumption. 


                  
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

        

    
        {/* <Container>
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
                  <span className="pfeil">↘</span> Zoom Zoom: 3D Animation in Maya
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
              {/* </>
            ),
          }}
        // </Container> */} 

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
