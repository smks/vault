import { addDecorator, configure } from "@storybook/react";
import { themes } from "@storybook/components";
import { withOptions } from "@storybook/addon-options";

import "../packages/styles/index.scss";

addDecorator(
  withOptions({
    theme: themes.dark
  })
);

function loadStories() {
  // Atoms
  require("../packages/component-logo/stories");
  require("../packages/component-icon/stories");
  // Molecules
  require("../packages/component-carousel/stories");
  require("../packages/component-navigation/stories");

  // Pages
  require("../atomic-design/pages/example");
}

configure(loadStories, module);
