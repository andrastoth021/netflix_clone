import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application.tsx'
import { ThemeProvider } from "@/components/theme-provider"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Application />
    </ThemeProvider>
  </React.StrictMode>,
)
