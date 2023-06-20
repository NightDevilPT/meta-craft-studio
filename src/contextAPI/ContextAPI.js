import React, { createContext, useState } from 'react'

export const GlobalData = createContext();

const ContextAPI = ({ children }) => {
    const [hamburger, setHamburger] = useState(false);
  return (
      <GlobalData.Provider value={{
          hamburger,setHamburger
      }}>
          { children} 
      </GlobalData.Provider>
  )
}

export default ContextAPI