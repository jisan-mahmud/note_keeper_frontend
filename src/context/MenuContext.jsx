import { createContext, useState } from "react";

const menuContext = createContext(true);

const MenuContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <menuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </menuContext.Provider>
    );
};

export { menuContext, MenuContextProvider };
