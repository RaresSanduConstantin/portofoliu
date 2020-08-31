import React from "react";
import "./Work.css";
import { INITIAL } from "../../const/directory";

import Tilt from "react-tilt";

const Work = () => {
  return (
    <div className="work">
      {INITIAL.map(({ id, ...otherProps }) => {
        return (
          <div key={id} className="card-component">
            <Tilt
              className="Tilt"
              options={{ max: 15, scale: 1 }}
              // style={{ height: 250, width: 250 }}
            >
              <div className="Tilt-inner">
                <a
                  href={otherProps.liveAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="imagini-card"
                    src={otherProps.imageUrl}
                    alt={otherProps.title}
                  />
                </a>
              </div>
            </Tilt>
            <div className="text-card">
              <p className="title">{otherProps.title}</p>
              <div className="btn-link1">
                <a
                  className="example_d"
                  href={otherProps.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code Base
                </a>

                <a
                  className="example_d"
                  href={otherProps.liveAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App Live
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
