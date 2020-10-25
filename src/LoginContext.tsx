import React, { createContext } from "react";

interface AppContextInterface {
  name: string;
  password: string;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

// Provider in your app
export interface LayoutProps {
  children: React.ReactNode;
}
const sampleAppContext: AppContextInterface = {
  name: "",
  password: "",
};

export const LoginProvider = (props: LayoutProps) => {
  return (
    <AppCtx.Provider value={sampleAppContext}>{props.children}</AppCtx.Provider>
  );
};
