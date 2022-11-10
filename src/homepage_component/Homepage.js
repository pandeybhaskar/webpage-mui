import React, {useState} from 'react'
import {Button, CssBaseline} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, purple, yellow, red } from '@mui/material/colors';

const light_theme = createTheme({
    palette: {
        background: {
            default: "#FEAFFF"
        },
        primary: {
            main: yellow[500],
            contrastText: red[500]
        },
        secondary: {
            main: green[500]
        }
    }
});
const dark_theme = createTheme({
    palette: {
        background: {
            default: "#000000"
        },
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[700]
        }
    }
});
const Homepage = () => {
    const [mode, setmode] = useState(true);

  return (
    <ThemeProvider theme={ mode ? light_theme : dark_theme}>
        <CssBaseline/>
            <Button 
                variant='contained'
                color='primary'                
                onClick={() => setmode(!mode) }
            >Toggle Theme
            </Button>
    </ThemeProvider>
  )
}

export default Homepage