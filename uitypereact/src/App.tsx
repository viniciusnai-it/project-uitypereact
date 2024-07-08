import { AppRoutes } from "./routes"
import { BrowserRouter } from 'react-router-dom';
import {MenuLateral} from './shared/components';
import { AppThemeProvider } from "./shared/contexts/ThemeContextFolder/ThemeContext";
import { DrawerProvider } from "./shared/contexts/DrawerContextFolder/DrawerContext";

function App() {

  return (
    <> 
    
      <AppThemeProvider>
        <DrawerProvider>
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>  
          </BrowserRouter>
        </DrawerProvider>
      </AppThemeProvider>
    </>
  )
}

export default App
