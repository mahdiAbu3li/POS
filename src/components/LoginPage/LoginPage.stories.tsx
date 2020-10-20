import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import LoginPage from "./LoginPage";

// This default export determines where your story goes in the story list
export default {
  title: "LoginPage",
  component: LoginPage,
  decorators: [
    (Story:any) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export const FirstStory = () => <LoginPage />;
