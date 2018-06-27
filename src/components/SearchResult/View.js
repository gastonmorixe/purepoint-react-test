import React from "react"

import { SearchResult } from "./styles"

export default ({ title, ingredients, thumbnailUrl, href, index }) => (
  <SearchResult index={index}>
    <div>
      <a href={href}>{title}</a>
    </div>
    <div>{ingredients}</div>
    <div>{thumbnailUrl}</div>
    <div>{href}</div>
  </SearchResult>
)
