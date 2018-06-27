import React from "react"

import {
  SearchResult,
  Title,
  Ingredients,
  Ingredient,
  Left,
  Right,
  ThumbPreview
} from "./styles"

export default ({ title, ingredients, thumbnailUrl, href, index }) => (
  <SearchResult index={index}>
    <Left>
      <ThumbPreview thumbnailUrl={thumbnailUrl} />
    </Left>
    <Right>
      <Title>
        <a href={href}>{title}</a>
      </Title>

      {ingredients && (
        <Ingredients>
          {ingredients.map((ingredient, index) => (
            <Ingredient key={index}>{ingredient}</Ingredient>
          ))}
        </Ingredients>
      )}
    </Right>
  </SearchResult>
)
