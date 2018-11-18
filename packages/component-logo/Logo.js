import React from "react";
import moneysafeLogo from "./logos/moneysafe.svg";
import "./Logo.scss";

export const logoSizes = {
  SM: "sm",
  MD: "md",
  LG: "lg"
};

export const Logo = ({ size }) => (
  <div className="msb-logo-container">
    <img
      className={`msb-logo msb-logo--${size}`}
      alt="Logo"
      src={moneysafeLogo}
    />
  </div>
);
