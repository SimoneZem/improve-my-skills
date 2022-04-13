import React from "react";
import "./buttonStyle.css";

export const Button = ({ btnText, onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      {" "}
      {btnText}
    </div>
  );
};
