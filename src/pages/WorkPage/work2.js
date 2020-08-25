import React from "react";
import "./Work.css";

const CardComponent = ({ item }) => {
  const [imageUrl] = item;
  return (
    <div className="work">
      <div style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </div>
  );
};

export default CardComponent;
