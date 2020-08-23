import React, { useRef, useState, useEffect } from "react";

import "./Skills.css";

const Progress = ({ nume, procent }) => {
  const [style, setStyle] = useState({});

  const myRef = useRef(null);

  // setTimeout(() => {
  //   const newStyle = {
  //     opacity: "1",
  //     width: `${procent}%`,
  //   };

  //   setStyle(newStyle);
  // }, 2000);

  useEffect(() => {
    seteazaStyle();
  }, []);

  const afisazaScroll = () => {
    const winHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollPosition = winHeight + scrollY;
    const d = myRef.current.offsetTop;
    // console.log(scrollPosition, d);

    if (scrollPosition > d) {
      dddd();
    } else {
      setStyle(style);
    }
  };

  const dddd = () => {
    const newStyle = {
      opacity: "1",
      width: `${procent}%`,
    };

    setStyle(newStyle);
  };

  const seteazaStyle = () => {
    window.addEventListener("scroll", afisazaScroll);
  };

  return (
    <div className="bars" ref={myRef}>
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
