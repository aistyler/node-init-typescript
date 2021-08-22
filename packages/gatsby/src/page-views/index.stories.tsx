/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Index from "./index";
import { ApolloError } from "@apollo/client";

export default {
  title: "Page-views/Index",
  component: Index,
} as ComponentMeta<typeof Index>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Index> = (args: any) => <Index {...args} />;

export const IndexDefault = Template.bind({});
IndexDefault.args = {
  location: window.location,
  data: {
    title: "Page Title",
    description: "Page Description",
  },
  //@ts-ignore
  t: (key: string) => (key),
  tReady: true,
};

export const IndexLoading = Template.bind({});
IndexLoading.args = {
  //@ts-ignore
  location: window.location,
  loading: true,
  //@ts-ignore
  t: (key: string) => key,
};

export const IndexError = Template.bind({});
IndexError.args = {
  //@ts-ignore
  location: window.location as Location,
  error: { message: "Error while loading data!!!" } as ApolloError,
  //@ts-ignore
  t: (key: string) => key,
};
