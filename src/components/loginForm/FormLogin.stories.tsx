import React from "react";
import FormLogin from "./FormLogin";

// This default export determines where your story goes in the story list
export default {
  title: "form",
  component: FormLogin,
  
};


export const FirstStory = (onLogin:() => void) => <FormLogin onLogin={onLogin} />;
