import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { ApplicationRoutes } from './Routes/ApplicationRoutes';

const theme = createTheme({
  palette: {
      mode: 'light',
  },
});

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ApplicationRoutes />
            </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App
