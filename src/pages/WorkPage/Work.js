import React from "react";
import "./Work.css";
import { INITIAL } from "../../const/directory";
import CardComponent from "./work2";

const Work = () => {
  return (
    <div className="work">
      {INITIAL.map(({ id, ...otherProps }) => {
        return (
          <div key={id} className="card-component">
            <div className="imagini-card">
              <img
                src={otherProps.imageUrl}
                alt={otherProps.title}
                style={{ width: "300px" }}
              />
            </div>
            <div className="text-card">
              <p>{otherProps.title}</p>
              <a href={otherProps.githubLink}>View CodeBase</a>
              <a href={otherProps.liveAppLink}>View LiveApp!</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
