import React from "react";
import ProductList from "./ProductList";

// This default export determines where your story goes in the story list
export default {
  title: "ProductList",
  component: ProductList,
};

const Template = (args: any) => <ProductList {...args} />;

export const FirstStory = Template.bind({});
