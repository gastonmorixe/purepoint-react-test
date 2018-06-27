import glamorous from "glamorous"

export const SearchWrapper = glamorous.div(
  {
    display: "flex",
    justifyContent: "center",
    flex: 1
  },
  ({ theme, index }) => ({})
)

export const Search = glamorous.div(
  {
    flexDirection: "column",
    display: "flex",
    maxWidth: 768
  },
  ({ theme, index }) => ({})
)

export const SearchResultWrapper = glamorous.div(
  {
    padding: "2em"
  },
  ({ theme, index }) => ({
    backgroundColor:
      index % 2
        ? theme.search.results.backgroundColorEven
        : theme.search.results.backgroundColorOdd
    // color: primary ? "#fff" : "#DA233C",
    // ":hover": {
    //   backgroundColor: primary ? "rgba(255, 255, 255, 0.5)" : "#CC3A4B",
    //   color: primary ? "#DA233C" : "#fff"
    // }
  })
)
