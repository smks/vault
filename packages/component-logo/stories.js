import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { Logo, logoSizes } from "./Logo";

const stories = storiesOf("Storybook Knobs", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => {
  const size = select("size", logoSizes, logoSizes.SM);

  return <Logo size={size} />;
});
