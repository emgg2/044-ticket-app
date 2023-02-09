import React, { createContext, useState } from 'react'

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
    const [ hidenMenu, setHidenMenu ] = useState(false);

    const showMenu = () => {
        setHidenMenu ( false );
    }

    const hideMenu = () => {
        setHidenMenu ( true );
    } 
  return (
    <UiContext.Provider value={{
        hidenMenu,
        showMenu,
        hideMenu
    }}>
        { children }
    </UiContext.Provider>
  )
}
