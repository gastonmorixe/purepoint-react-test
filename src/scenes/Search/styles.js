import glamorous from "glamorous"

export const SearchWrapper = glamorous.div(
  {
    display: "flex",
    justifyContent: "center",
    flex: 1
  },
  ({ theme, index }) => ({
    marginLeft: theme.spacingBase * 2,
    marginRight: theme.spacingBase * 2
  })
)

export const SearchContent = glamorous.div(
  {
    flexDirection: "column",
    display: "flex",
    width: 768
  },
  ({ theme, index }) => ({})
)
