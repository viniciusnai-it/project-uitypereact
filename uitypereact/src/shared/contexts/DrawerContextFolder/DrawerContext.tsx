import { createContext, useCallback, useState } from "react";
  
export const DrawerContext = createContext({} as IDrawerContextData);

  export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
        const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
        const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() =>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
      }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            { children }
        </DrawerContext.Provider>
    );
}