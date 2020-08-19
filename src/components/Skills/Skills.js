import React from "react";

import "./Skills.css";
import Progress from "./Part2";

const Skills = () => {
  setTimeout(() => {}, 500);

  return (
    <div className="container">
      <p>What do I know and try to improve!!!!!</p>
      <Progress nume="HTML5" procent="90" />
      <Progress nume="CSS3" procent="80" />
      <Progress nume="JavaScript" procent="80" />
      <Progress nume="ReactJS" procent="75" />
      <Progress nume="NodeJs" procent="70" />
      <Progress nume="Firebase" procent="75" />
    </div>
  );
};

export default Skills;
