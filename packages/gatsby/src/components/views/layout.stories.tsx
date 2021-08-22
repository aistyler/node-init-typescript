import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";

//import { siteMetadata } from "../site-config";

export default {
  title: "Component-views/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Layout> = (args: any) => <Layout {...args} />;

export const LayoutDefault = Template.bind({});
LayoutDefault.args = {
  siteMetadata: {
    title: "My Components",
  },
  pageTitle: "Page Title",
  location: window.location,
};
