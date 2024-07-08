interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
  }
