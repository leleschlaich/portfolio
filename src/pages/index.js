import * as React from "react"
import '../styles/index.scss';

import Container from '../components/container';


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="container coral">
        <h1>Lele<br/>here :)</h1>
      </div>

      <Container>
        {{
          title: (
            <h1>Augmented<br />Reality</h1>
          ),
          body: (
            <h1>lol</h1>
          )
        }}
      </Container> 

      <Container coral>
        {{
          title: (
            <h1>Augmented<br />Reality</h1>
          ),
          body: (
            <h1>lol</h1>
          )
        }}
      </Container> 

      <Container>
        {{
          title: (
            <h1>Speculative<br />Design</h1>
          ),
          body: (
            <h1>lol</h1>
          )
        }}
      </Container> 

      <Container coral>
        {{
          title: (
            <h1>Climate<br />Justice</h1>
          ),
          body: (
            <h1>lol</h1>
          )
        }}
      </Container> 

      <Container>
        {{
          title: (
            <h1>More Fun<br />Stuff</h1>
          ),
          body: (
            <h1>lol</h1>
          )
        }}
      </Container> 


    </main>
  )
}

export default IndexPage
