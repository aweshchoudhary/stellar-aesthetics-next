import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [coursePage, setCoursePage] = useState({});

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        coursePage,
        setCoursePage,
        toggleMobileMenu,
        setToggleMobileMenu,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
