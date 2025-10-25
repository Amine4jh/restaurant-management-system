import { createContext, useContext } from "react";

export const SideBarContext = createContext();

// Create custom hook to know the error
export const useExpandedContext = () => {
  const expanded = useContext(SideBarContext);
  if (expanded === undefined) {
    throw new Error("useExpandedContext must be used with a SideBarContext");
  }
  return expanded;
};
