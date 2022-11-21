import React, {useEffect, useState} from 'react'
import {Button, CssBaseline} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, purple, yellow, red } from '@mui/material/colors';
import Per from './Per';
import PerMui from '../PerMui';

const light_theme = createTheme({
    palette: {
        background: {
            default: "#CFF5E7"
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
            default: "#FEBE8C"
        },
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[700]
        }
    }
});

const list_object = [
    {
        product : "Product 1",
        price : 500,
        available : 1
    },
    {
        product : "Product 2",
        price : 580,
        available : 1
    },
    {
        product : "Product 3",
        price : 349,
        available : 0
    }
]
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
            <div className='lists'>
                <PerMui mode={mode} object={list_object}/>
            </div>
    </ThemeProvider>
  )
}

export default Homepage