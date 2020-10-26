import React from "react";
import Form from "./form";

// This default export determines where your story goes in the story list
export default {
  title: "form",
  component: Form,
  
};


export const FirstStory = (onLogin:() => void) => <Form onLogin={onLogin} />;
