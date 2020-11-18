import React from "react";
import CategoryList from "./CategoryList";

// This default export determines where your story goes in the story list
export default {
  title: "Category",
  component: CategoryList,
};

const Template = (args: any) => <CategoryList {...args} />;

export const FirstStory = Template.bind({});
