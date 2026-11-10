import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactLenis } from 'lenis/react'
import App from './App.tsx'
import { theme } from './theme/theme.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactLenis root options={{ autoRaf: true, lerp: 0.085 }}>
        <App />
      </ReactLenis>
    </ThemeProvider>
  </StrictMode>,
)
