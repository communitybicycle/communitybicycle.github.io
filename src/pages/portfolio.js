import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const sourceCodeStyle = {
  marginLeft: 16,
  textDecoration: "none",
}

const AboutPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Ongoing Projects</h1>
    <hr />

    {/*Project Incubator*/}
    <h2>Project Incubator</h2>
    <p>
      Project Incubator is a social platform that fosters meaning projects
      through collaboration. Users are able to create projects that others can
      request to join. Within a project, the members can share ideas through the
      forum, post project updates, set goals and complete task items.
    </p>
    <p>
      This project is still in its early stages and is being developed by a
      small team of developers. The frontend is in React, with core libraries
      being react-router-dom, material-ui and prop-types. The backend is in
      Golang with a PostgreSQL, but my involvement has been mostly frontend for
      this project.
    </p>
    <p>
      The project link will take you to the development branch hosted on Heroku.
      Currently, to test the bulk of the features of the application, you will
      need to create a basic account, which is secured through auth0.0
    </p>
    <a href="https://projectincubator-frontend.herokuapp.com">
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/projectIncubator/pi-frontend"
    >
      Source Code
    </a>

    <hr />

    {/*RL Team Maker*/}
    <h2>RL Team Maker</h2>
    <p>
      Rocket League is a videogame that uses an internal MMR system for
      matchmaking. RL Team Maker is a full stack app that scrapes a player's MMR
      from an external site and neatly organizes their data for easy
      presentation and team assignment.
    </p>
    <p>
      The user can also host a live session, which generates a public URL so
      that a tournament participant can view the changes the host is making in
      real-time. The session data is then stored on a database (MongoDB).
    </p>
    <p>
      <strong>Front End: </strong>React (hooks), redux, react-beautiful-dnd,
      material-ui, socket.io, react-router-dom
    </p>
    <p>
      <strong>Back End: </strong>Node.js, express, cheerio, socket.io, mongoose
    </p>
    <a href="https://rl-team-maker.herokuapp.com/">
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/rl-team-maker"
    >
      Source Code
    </a>

    <h1 style={{ marginTop: 16 }}>Past Projects</h1>
    <hr />

    {/*Administration Automations*/}
    <h2>Administration Automations</h2>
    <p>
      When I was an employee at a small finance firm, I learned Python to help
      automate the mundane, office tasks.
    </p>
    <strong>Notable Features:</strong>
    <ul>
      <li>
        Aggregating data across multiple sources to create a client data viewer
        CLI, allowing user to search for a specific client.
      </li>
      <li>
        Using said CLI to further automate office tasks, such as creating PDF
        forms pre-filled with client's data.
      </li>
      <li>Using a webscraper (Selenium) and to automate repetitive web-based tasks.</li>
      <li>
        Using client data and certain templates to auto-generate word documents
        and emails.
      </li>
      <li>
        Other minor automations, such as renaming and relocating files, opening
        files and folders pertaining a certain client.
      </li>
    </ul>
    <p>
      The codebase for this project is quite large and as it contains somewhat
      sensitive information, I do not feel comfortable disclosing this publicly.
      If you are interested in this work, please contact me and I can share you
      a sample of the code.
    </p>

    <hr />

    {/*D3 Projects*/}
    <h2>D3 Projects</h2>
    <p>
      D3.js is a data visualization library. Using data captured by an API call,
      I used D3.js to generate various types of charts.
    </p>
    <p>
      <strong>Charts: </strong> bar chart, scatterplot graph, heat map,
      choropleth map, treemap
    </p>
    <p>
      This app was created using <strong>D3.js</strong>, <strong>React</strong>,{" "}
      <strong>react-router-dom</strong>, <strong>material-ui</strong>, and{" "}
      <strong>Node.js</strong>.
    </p>
    <a href="https://communitybicycle.github.io/d3-projects/">
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/d3-projects"
    >
      Source Code
    </a>

    <hr />

    {/*Pomodoro Clock*/}
    <h2>Pomodoro Clock</h2>
    <p>
      A pomodoro clock is intended to facilitate the{" "}
      <a
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        target="_blank"
        rel="noopener noreferrer"
      >
        pomodoro technique
      </a>{" "}
      by presetting a timer to 25 minutes, which by default leads to a 5 minute
      break period.
    </p>
    <p>
      This app was created using <strong>HTML</strong>, <strong>CSS</strong>,
      and <strong>plain JavaScript</strong>.
    </p>
    <a
      href="https://communitybicycle.github.io/pomodoro-clock/"
      rel="noopener noreferrer"
    >
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/pomodoro-clock"
      rel="noopener noreferrer"
    >
      Source Code
    </a>

    <hr />

    {/*JavaScript Calculator*/}
    <h2>JavaScript Calculator</h2>
    <p>
      This calculator was built on React. The calculator handles basic
      functions, is capable of carrying over the last reason into the new
      equation. Unfortunately, it does not support proper order of operations.
    </p>
    <a
      href="https://communitybicycle.github.io/javascript-calculator"
      rel="noopener noreferrer"
    >
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/javascript-calculator"
      rel="noopener noreferrer"
    >
      Source Code
    </a>

    <hr />

    {/*Markdown Previewer*/}
    <h2>Markdown Previewer</h2>
    <p>
      This React (Redux) application converts markdown into HTML through
      Marked.js.
    </p>
    <a href="https://communitybicycle.github.io/markdown-previewer">
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/markdown-previewer"
    >
      Source Code
    </a>

    <hr />

    {/*Drum Machine*/}
    <h2>Drum Machine</h2>
    <p>
      This Drum Machine features drum pads that can be triggered via click or
      keypress. It also has volume control and dark mode. Made with React.
    </p>
    <a href="https://communitybicycle.github.io/drum-machine">
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/drum-machine"
    >
      Source Code
    </a>

    <hr />

    {/*Random Quote Machine*/}
    <h2>Random Quote Machine</h2>
    <p>
      This app makes an API call to fetch a random quote. The user can click a
      button to fetch a new quote. There is also an integration with Twitter to
      directly tweet the fetched quote.
    </p>
    <a href="https://communitybicycle.github.io/random-quote-machine">
      <button>Go to Project</button>
    </a>
    <a
      style={sourceCodeStyle}
      href="https://github.com/communitybicycle/random-quote-machine"
    >
      Source Code
    </a>
  </Layout>
)

export default AboutPage
