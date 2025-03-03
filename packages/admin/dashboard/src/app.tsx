import { Toaster, TooltipProvider } from "@medusajs/ui"
import { QueryClientProvider } from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"

import { I18n } from "./components/utilities/i18n"
import { queryClient } from "./lib/query-client"
import { I18nProvider } from "./providers/i18n-provider"
import { RouterProvider } from "./providers/router-provider"
import { ThemeProvider } from "./providers/theme-provider"

import "./index.css"

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <I18n />
          <TooltipProvider>
            <I18nProvider>
              <RouterProvider />
            </I18nProvider>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
