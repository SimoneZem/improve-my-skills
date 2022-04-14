import React from "react";
import "./hideButtonStyle.css";

export const HideAndSeek = ({ btnText, onClick }) => {
  return (
    <div className="hide-button" onClick={{ onClick }}>
      {" "}
      {btnText}
    </div>
  );
};
