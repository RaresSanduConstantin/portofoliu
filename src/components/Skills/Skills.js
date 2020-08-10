import React, { Component } from "react";
import "./Skills.css";
import SkillBar from "react-skills-bars";

const skills = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "JavaScript", level: 87 },
  { type: "jQuery", level: 92 },
  { type: "BootStrap", level: 90 },
  { type: "NodeJs", level: 75 },
  { type: "React.js", level: 80 },
];

export class Skills extends Component {
  render() {
    return (
      <div className="container">
        <p>What do I know and try to improve:</p>
        <SkillBar
          skills={skills}
          colors={{
            bar: "#7BC8F6",
            title: {
              text: "#000",
              background: "#D0FEFE",
            },
          }}
        />
      </div>
    );
  }
}

export default Skills;
