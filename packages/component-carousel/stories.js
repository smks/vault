import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Carousel from ".";

const stories = storiesOf("02 - Molecule/Carousel", module);

addDecorator(withKnobs);

stories.add("Default", () => {
  return <Carousel />;
});
