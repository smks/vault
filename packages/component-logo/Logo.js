import React from "react";
import "./Logo.scss";
import moneysafeLogo from "./assets/moneysafe.svg";

export const logoSizes = {
  SM: "sm",
  MD: "md",
  LG: "lg"
};

export const assets = {
  MONEYSAFE: moneysafeLogo
};

const COMPONENT_CLASS = "v-logo";

export const Logo = ({ size, asset, ...otherProps }) => (
  <img
    className={`${COMPONENT_CLASS} ${COMPONENT_CLASS}--${size}`}
    alt="Logo"
    src={asset}
    {...otherProps}
  />
);

export default Logo;
