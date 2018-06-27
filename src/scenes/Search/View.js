import React from "react"

import SearchBox from "components/SearchBox"
import SearchResults from "components/SearchResults"

import { SearchWrapper, SearchContent } from "./styles.js"

export default () => (
  <SearchWrapper>
    <SearchContent>
      <SearchBox />
      <SearchResults />
    </SearchContent>
  </SearchWrapper>
)
