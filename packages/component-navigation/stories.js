import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Navigation from ".";

const stories = storiesOf("02 - Molecule/Navigation", module);

addDecorator(withKnobs);

stories.add("Default", () => {
  return <Navigation />;
});
