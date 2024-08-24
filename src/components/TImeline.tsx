import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { CubeIcon } from "@heroicons/react/16/solid";
import { CodeBracketIcon } from "@heroicons/react/16/solid";

const TImeline = () => {
  const repeat = <>&#10003;&nbsp;&nbsp;&nbsp;</>;

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        iconStyle={{ background: "black", color: "#fff" }}
        icon={<AcademicCapIcon />}
      >
        <h3 className="vertical-timeline-element-title">Start of University</h3>
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
        <h4 className="vertical-timeline-element-subtitle">2022</h4>
        <p>
          Courses i have taken: <br />
          <ul style={{ marginLeft: "0.5rem", listStyle: "none" }}>
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
        iconStyle={{ background: "black", color: "#fff" }}
        icon={<PuzzlePieceIcon />}
      >
        <h3 className="vertical-timeline-element-title">2nd Semester</h3>
        <h4 className="vertical-timeline-element-subtitle">2023</h4>
        <p>
          Courses i have taken:
          <ul style={{ listStyle: "none" }}>
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
        iconStyle={{ background: "black", color: "#fff" }}
        icon={<CubeIcon />}
      >
        <h3 className="vertical-timeline-element-title">3rd Semester</h3>
        <h4 className="vertical-timeline-element-subtitle">2023</h4>
        <p>
          Courses i have taken:
          <ul style={{ listStyle: "none" }}>
            <li>{repeat}Applied math analysis</li>
            <li>{repeat}Principles of Programming Languages and OOP</li>
            <li>{repeat}Introduction to Artificial Intelligence</li>
            <li>{repeat}Operating Systems (POSIX)</li>
            <li>{repeat}Applied Information Systems</li>
            <li>{repeat}Design of Digital Systems</li>
          </ul>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "black", color: "#fff" }}
        icon={<CodeBracketIcon />}
      >
        <h3 className="vertical-timeline-element-title">4th Semester</h3>
        <h4 className="vertical-timeline-element-subtitle">2024 (Present)</h4>
        <p>
          Courses i have taken:
          <ul style={{ listStyle: "none" }}>
            <li>{repeat}Design and Implementation of Parallel Systems</li>
            <li>{repeat}Basics of web development and markup languages</li>
            <li>{repeat}Information security and cryptography </li>
            <li>{repeat}Java</li>
            <li>{repeat}Design and analysis of statistical experiments</li>
            <li>{repeat}Introduction to Informatics </li>
            <li>{repeat}Project managment and project</li>
          </ul>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TImeline;
