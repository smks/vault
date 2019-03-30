import React from "react";
import "./Navigation.scss";

import Icon, { icons, iconColors, iconSizes } from "../component-icon";
import Logo, { logoSizes, assets } from "../component-logo";

const COMPONENT_CLASS = "v-navigation";

export const Navigation = ({ size, asset, ...otherProps }) => (
  <nav
    className={`${COMPONENT_CLASS}`}
    alt="Navigation"
    src={asset}
    {...otherProps}
  >
    <div className={`${COMPONENT_CLASS}__left-item`}>
      <Logo size={logoSizes.LG} asset={assets.MONEYSAFE} />
    </div>
    <div className={`${COMPONENT_CLASS}__right-item`}>
      <Icon component={icons.MENU} />
    </div>
  </nav>
);

export default Navigation;
