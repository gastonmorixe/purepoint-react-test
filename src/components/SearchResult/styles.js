import glamorous from "glamorous"

export const SearchResult = glamorous.article(
  {
    padding: "2em",
    display: "flex"
  },
  ({ theme, index }) => ({
    backgroundColor:
      index % 2
        ? theme.search.results.backgroundColorEven
        : theme.search.results.backgroundColorOdd
  })
)

export const Left = glamorous.div({}, ({ theme }) => ({
  marginRight: theme.spacingBase * 2,
  display: "flex",
  flexDirection: "column"
}))

export const Right = glamorous.div(
  {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  ({ theme }) => ({})
)

export const Title = glamorous.header({}, ({ theme }) => ({
  marginBottom: theme.spacingBase
}))

export const Ingredients = glamorous.ul(
  {
    margin: 0,
    padding: 0
  },
  ({ theme }) => ({})
)

export const Ingredient = glamorous.li(
  {
    marginLeft: "1em"
  },
  ({ theme }) => ({})
)

export const ThumbPreview = glamorous.div(
  {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,.1)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  ({ theme, thumbnailUrl }) => ({
    backgroundImage: `url(${thumbnailUrl})`
  })
)
