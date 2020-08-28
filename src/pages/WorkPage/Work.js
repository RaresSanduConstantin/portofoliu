import React from "react";
import "./Work.css";
import { INITIAL } from "../../const/directory";
import CardComponent from "./work2";
import Tilt from "react-tilt";

const Work = () => {
  return (
    <div className="work">
      {INITIAL.map(({ id, ...otherProps }) => {
        return (
          <div key={id} className="card-component">
            <Tilt
              className="Tilt"
              options={{ max: 35, scale: 1 }}
              // style={{ height: 250, width: 250 }}
            >
              <div className="Tilt-inner">
                <img
                  className="imagini-card"
                  src={otherProps.imageUrl}
                  alt={otherProps.title}
                />
              </div>
            </Tilt>
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
