import React, { createContext, useState } from 'react'

export const GlobalData = createContext();

const ContextAPI = ({ children }) => {
    const [hamburger, setHamburger] = useState(false);
    const [activeNav, setActiveNav] = useState("home");
  return (
      <GlobalData.Provider value={{
          hamburger, setHamburger,
          activeNav, setActiveNav
      }}>
          { children} 
      </GlobalData.Provider>
  )
}

export default ContextAPI