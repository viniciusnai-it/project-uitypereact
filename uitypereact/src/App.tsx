import { ThemeProvider } from "@emotion/react"
import { AppRoutes } from "./routes"
import { LightTheme } from "./shared/themes"
function App() {

  return (
    <> 
    <ThemeProvider theme={LightTheme}>
      <AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App
