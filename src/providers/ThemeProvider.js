import React from "react"
import { ThemeProvider } from "glamorous"

import theme from "theme"

export default props => <ThemeProvider theme={theme} {...props} />
