import React, { Fragment } from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Carousel from "../../packages/component-carousel";
import Navigation from "../../packages/component-navigation";

const stories = storiesOf("05 - Page/Example", module);

addDecorator(withKnobs);

stories.add("Default", () => (
  <Fragment>
    <Navigation />
    <Carousel />
  </Fragment>
));
