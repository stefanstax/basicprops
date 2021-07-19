import './App.css';
import Entry from './Entry';
import Intro from './Intro';
import { useState } from "react"
import ScreenWarning from './screenWarning';
import Guide from './Guide';
import Footer from './Footer';


function App() {
  const [startTask, setStartTask] = useState("none");
  const runTask = () => {
    setStartTask("flex");
  }

  return (
    <div className="App">
      {window.innerWidth < 1024 ? <ScreenWarning />
        :
        <>
          <header className="App-header">
          <Intro intro="Task: Turn large component into smaller ones using props" display={startTask === "none" ? "none" : "flex"}  />
            <Entry triggerTest={runTask} display={startTask !== "none" ? "none" : null} />
            <Guide display={startTask === "none" ? "none" : "flex"} />
            <div style={{ display: `${startTask}`, flexDirection: "column" }}>
              <div className="introduction">
                <h3>Hey I'm a title for this component</h3>
                <p>Well if you're the title I'm a paragraph</p>
                <img style={{ width: "30%", borderRadius: "10px", boxShadow: "0px 0px 40px black" }} src="https://res.cloudinary.com/dnqicdh71/image/upload/v1622378586/stax_image_l49neq.jpg" alt="" />
              </div>
              <div className="location">
                <address>Belgrade, Serbia</address>
                <details>
                  <summary>A bit about me</summary>
                  <p>Yes, I'm a bit buried in here!</p>
                </details>
              </div>
              <div className="bio">
                <h6>I have a dog named Alex.</h6>
                <h5>I'm a Front-End Developer</h5>
                <h4>I'm a people person</h4>
                <h3>If you came this far, great job!</h3>
                <h2>You're are incredible</h2>
                <h1>Thank you!</h1>
              </div>
            </div>
          </header>
        </>
      }
      <Footer />
    </div>
  );
}

export default App;
