import React from 'react'
import Blog from './components/Blog'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <Blog />
      </div>
    </ThemeProvider>
  )
}

export default App
