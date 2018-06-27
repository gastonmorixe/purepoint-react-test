import React from "react"

import ThemeProvider from "./ThemeProvider"
import ReduxProvider from "./ReduxProvider"

export default ({ children }) => (
  <ThemeProvider>
    <ReduxProvider>{children}</ReduxProvider>
  </ThemeProvider>
)
