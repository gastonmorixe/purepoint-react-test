import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"

import { RouteWithLayout } from "./utils"

// Layout
import LayoutMain from "layouts/Main"

// Scenes
import SceneSearch from "scenes/Search"

export default () => (
  <Router>
    <Switch>
      <RouteWithLayout
        exact
        path="/"
        component={SceneSearch}
        layout={LayoutMain}
      />
    </Switch>
  </Router>
)
