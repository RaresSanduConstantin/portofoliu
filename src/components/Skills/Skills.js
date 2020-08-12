import React, { Component } from "react";
import "./Skills.css";
import SkillBar from "react-skills-bars";

const skills = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "JavaScript", level: 90 },
  { type: "BootStrap", level: 87 },
  { type: "NodeJs", level: 75 },
  { type: "React.js", level: 80 },
];

const colors = {
  bar: "#137E6D",
  title: {
    text: "#000",
    background: "#D0FEFE",
  },
};

export class Skills extends Component {
  render() {
    return (
      <div className="container">
        <p>What do I know and try to Improve:</p>
        <SkillBar animationDelay={1000} skills={skills} colors={colors} />
      </div>
    );
  }
}

export default Skills;
