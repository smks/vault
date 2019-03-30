import React from "react";
import { func, oneOf } from "prop-types";
import classnames from "classnames";

import IconMenu from "./icons/IconMenu";
import IconSettings from "./icons/IconSettings";

export const iconColors = {
  DEFAULT: "default",
  LIGHT: "light",
  INVERSE: "inverse"
};
export const iconSizes = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl"
};

export const icons = {
  MENU: IconMenu,
  SETTINGS: IconSettings
};

const Icon = ({ color, component, size, className, ...otherProps }) => {
  const classes = classnames("v-icon", className, {
    [`v-icon--size-${size}`]: size,
    [`v-icon--color-${color}`]: color
  });

  return component({
    viewBox: "0 0 24 24",
    focusable: "false", //IE 11 Bug - Focus SVG
    className: classes,
    xmlns: "http://www.w3.org/2000/svg",
    ...otherProps
  });
};

Icon.propTypes = {
  color: oneOf(Object.values(iconColors)),
  component: func.isRequired,
  size: oneOf(Object.values(iconSizes))
};

Icon.defaultProps = {
  color: iconColors.DEFAULT,
  component: null,
  size: iconSizes.MD
};

export default Icon;
