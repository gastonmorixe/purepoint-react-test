import React from "react"

import SearchResult from "components/SearchResult"

import { SearchResults, Empty, Loading, Error } from "./styles"

export default ({ data, isLoading, error, isEmpty }) => (
  <SearchResults>
    {error && <Error>Opss... Something went wrong.</Error>}
    {isEmpty && <Empty>No recipe found.</Empty>}
    {isLoading && <Loading>Loading...</Loading>}
    {data &&
      data.map((result, index) => {
        return (
          <SearchResult
            index={index}
            key={result["title"]}
            title={result["title"]}
            ingredients={result["ingredients"]}
            thumbnailUrl={result["thumbnail"]}
            href={result["href"]}
          />
        )
      })}
  </SearchResults>
)
