import React from "react";
import Form from "./form";

// This default export determines where your story goes in the story list
export default {
  title: "LoginPage",
  component: Form,
};

const Template = (args: any) => (
  <Form {...args} />
);

export const FirstStory = Template.bind({});