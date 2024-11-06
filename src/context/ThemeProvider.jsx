import { createContext, useState } from "react";

export const Theme = createContext()

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return(
        <Theme.Provider value={{dark, setDark}}>{children}</Theme.Provider>
    )
}

export default ThemeProvider