import React from "react";
import LoginPage from "./LoginPage";

// This default export determines where your story goes in the story list
export default {
  title: "LoginPage",
  component: LoginPage,
};

const Template = (args: any) => (
  <LoginPage {...args} />
);

export const FirstStory = Template.bind({});