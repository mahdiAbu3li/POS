import React from "react";
import LoginPage from "./LoginPage";

// This default export determines where your story goes in the story list
export default {
  title: "LoginPage{",
  component: LoginPage,
};

export const FirstStory = (onLogin: () => void) => (
  <LoginPage onLogin={onLogin} />
);
