import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import "./styles/main.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";

function App() {

  const repeat = <>&#10003;&nbsp;&nbsp;&nbsp;</>;

  return (
    <div className="app">
      <Navbar />
      <Main />
      <div className="hr">
        <hr />
      </div>

      <section className="about-section">
        <About />
      </section>

      <Languages />

      <div className="hr">
        <hr />
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Start of University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2022 - present</h4>
          <p>
            I began my studies in Programming and Application Development at
            Masaryk University
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<RocketLaunchIcon />}
        >
          <h3 className="vertical-timeline-element-title">1st Semester</h3>
          <h4 className="vertical-timeline-element-subtitle">
            2022
          </h4>
          <p>
            Courses i have taken: <br />
            <ul style={{marginLeft: "0.5rem", listStyle:"none"}}>
              <li>{repeat}Mathematical Foundations of Computer Science</li>
              <li>{repeat}Foundations of Programming (Python)</li>
              <li>{repeat}Non-Imperative Programming (Haskell)</li>
              <li>{repeat}Database Systems (SQL) </li>
              <li>{repeat}Computer Systems (Assembler)</li>
            </ul> 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "black", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">2nd Semester</h3>
          <h4 className="vertical-timeline-element-subtitle">
            2023
          </h4>
          <p>Courses i have taken:
            <ul style={{listStyle: "none"}}>
              <li>{repeat}Linear algebra and discrete mathematics</li>
              <li>{repeat}Algorithms and data structures I </li>
              <li>{repeat}Principles of low-level programming (C)</li>
              <li>{repeat}Operating Systems </li>
              <li>{repeat}Computer Networks </li>
              <li>{repeat}UNIX</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
      <Contact />
    </div>
  );
}

export default App;
