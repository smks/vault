import React from "react";
import "./Carousel.scss";

import Icon, { icons } from "../component-icon";

const COMPONENT_CLASS = "v-carousel";

export const Carousel = ({ size, asset, ...otherProps }) => (
  <nav
    className={`${COMPONENT_CLASS}`}
    alt="Carousel"
    src={asset}
    {...otherProps}
  >
    <section className={`${COMPONENT_CLASS}__item`}>
      <div className={`${COMPONENT_CLASS}__item__vendor`} />
      <Icon component={icons.SETTINGS} />
    </section>
  </nav>
);

export default Carousel;
