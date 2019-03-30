import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import Logo, { logoSizes, assets } from ".";

const stories = storiesOf("01 - Atom/Logo", module);

addDecorator(withKnobs);

stories
  .add("Small", () => {
    const size = select("size", logoSizes, logoSizes.SM);

    return <Logo size={size} asset={assets.MONEYSAFE} />;
  })
  .add("Medium", () => {
    const size = select("size", logoSizes, logoSizes.MD);

    return <Logo size={size} asset={assets.MONEYSAFE} />;
  })
  .add("Large", () => {
    const size = select("size", logoSizes, logoSizes.LG);

    return <Logo size={size} asset={assets.MONEYSAFE} />;
  });
