import React from "react"
import { compose, pure } from "recompose"

import SearchBox from "components/SearchBox"

import { SearchWrapper, Search, SearchResultWrapper } from "./styles.js"

const SearchResult = compose(pure)(
  ({ title, ingredients, thumbnailUrl, href, index }) => (
    <SearchResultWrapper index={index}>
      <div>
        <a href={href}>{title}</a>
      </div>
      <div>{ingredients}</div>
      <div>{thumbnailUrl}</div>
      <div>{href}</div>
    </SearchResultWrapper>
  )
)

const fakeData = [
  {
    title: "Mushroom Swiss Cheese Omelet",
    href: "http://www.recipezaar.com/Mushroom-Swiss-Cheese-Omelet-160338",
    ingredients:
      "butter, cream, eggs, chives, thyme, garlic, mushroom, red pepper flakes, swiss cheese",
    thumbnail: "http://img.recipepuppy.com/36569.jpg"
  },
  {
    title: "Jarlsberg Oven Omelet",
    href: "http://www.recipezaar.com/Jarlsberg-Oven-Omelet-8555",
    ingredients:
      "butter, eggs, cheese, milk, nutmeg, prosciutto, salt, white pepper",
    thumbnail: ""
  }
]

export default () => (
  <SearchWrapper>
    <Search>
      <SearchBox />
      {fakeData.map((result, index) => {
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
    </Search>
  </SearchWrapper>
)
