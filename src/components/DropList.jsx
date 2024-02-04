import React from "react";
import { useState } from "react";
import arrowIcon from "../assets/img/arrow.svg";

const DropList = ({ title, children }) => {
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked(!clicked);
  };
  return (
    <div className="dropListContainer">
      <div className="dropListHead" onClick={handleToggle}>
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="flèche drop list"
          className={`arrow ${clicked ? "turn" : ""}`}
        />
      </div>
      <div className={`content ${clicked ? "visible" : ""}`}>{children}</div>
    </div>
  );
};

export default DropList;
