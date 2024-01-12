import React from "react";
import { useState, useContext } from "react";

// 1. Create the context
const SearchContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const SearchProvider = (props) => {
  // store the current user in state at the top level
  const [currentResult, setCurrentResult] = useState(``);
  // sets user object in state, shared via context

  // 2. Provide the context.
  // The Provider component of any context (SearchContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <SearchContext.Provider value={{ currentResult, setCurrentResult}}>
      {props.children}
    </SearchContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useSearchContext = () => {
  return useContext(SearchContext);
};
// Save as SearchContext.jsx in a separate 'context' folder