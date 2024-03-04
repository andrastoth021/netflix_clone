import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Application />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
