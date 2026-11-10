import { createTheme } from '@mui/material/styles'
import { background, deep, muted, primary, secondary, surface, text } from './colors.ts'

const bodyFontFamily = '"Inter", system-ui, sans-serif'
const headingFontFamily = '"Space Grotesk", system-ui, sans-serif'

const heading = {
  fontFamily: headingFontFamily,
  fontWeight: 600,
  color: text,
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: background,
      paper: surface,
    },
    primary: {
      main: primary,
      dark: deep,
      light: secondary,
      contrastText: text,
    },
    secondary: {
      main: secondary,
      contrastText: text,
    },
    text: {
      primary: text,
      secondary: muted,
    },
    divider: '#263449',
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: bodyFontFamily,
    h1: heading,
    h2: heading,
    h3: heading,
    h4: heading,
    h5: heading,
    h6: heading,
    subtitle1: { fontFamily: headingFontFamily },
    subtitle2: { fontFamily: headingFontFamily },
    body1: { fontFamily: bodyFontFamily },
    body2: { fontFamily: bodyFontFamily },
    button: {
      fontFamily: bodyFontFamily,
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: background,
          color: text,
          fontFamily: bodyFontFamily,
        },
      },
    },
  },
})
