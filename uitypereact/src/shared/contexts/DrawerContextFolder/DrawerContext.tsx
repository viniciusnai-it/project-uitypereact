import { createContext, useCallback, useState } from "react";

export const DrawerContext = createContext({} as IDrawerContextData);


  export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
        const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() =>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}> 
            { children }
        </DrawerContext.Provider>
    );
}