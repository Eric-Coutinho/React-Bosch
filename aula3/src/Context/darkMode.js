import React, { useState} from 'react';

export const DarkModeContext = React.createContext();
DarkModeContext.displayName = 'DarkMode';

export const DarkModeProvider = ({ children }) => {
    const [mode, setMode] = useState(true);

    function changeMode() {
        setMode(!mode)
    }

    return(
        <DarkModeContext.Provider
            value={{
                mode,
                setMode,
                changeMode
            }}
        >
            { children }
        </DarkModeContext.Provider>
    )
}
