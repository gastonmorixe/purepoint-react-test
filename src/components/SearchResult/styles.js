import glamorous from "glamorous"

export const SearchResult = glamorous.div(
  {
    padding: "2em"
  },
  ({ theme, index }) => ({
    backgroundColor:
      index % 2
        ? theme.search.results.backgroundColorEven
        : theme.search.results.backgroundColorOdd
  })
)
