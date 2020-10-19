import React from "react";
import Dashboard from "../Dashboard/Dashboard";

// This default export determines where your story goes in the story list
export default {
  title: "dashboard",
  component: Dashboard,
};

const Template = (args: any) => (
  <Dashboard {...args} />
);

export const FirstStory = Template.bind({});