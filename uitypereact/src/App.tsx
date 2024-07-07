import { AppRoutes } from "./routes"
import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from "./shared/contexts/ThemeContextFolder/ThemeContext";
function App() {

  return (
    <> 
      <AppThemeProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
      </AppThemeProvider>
    </>
  )
}

export default App
