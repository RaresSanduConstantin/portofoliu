import React from "react";
import "./Skills.css";

const Progress = ({ nume, procent }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: "1",
      width: `${procent}%`,
    };

    setStyle(newStyle);
  }, 2000);

  return (
    <div className="bars">
      <div className="bar-contain">
        <span className="bar-expand" style={style}>
          <div className="bar-label">
            {nume} {procent}%
          </div>
        </span>
      </div>
    </div>
  );
};

export default Progress;
