import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Icon, { iconSizes, icons } from ".";

const stories = storiesOf("01 - Atom/Icon", module);

addDecorator(withKnobs);

stories.add("Small", () => {
  return <Icon size={iconSizes.SM} component={icons.MENU} />;
});
