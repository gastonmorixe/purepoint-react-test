import glamorous from "glamorous"

export const SearchResults = glamorous.div({}, ({ theme, index }) => ({
  marginBottom: theme.spacingBase * 2
}))

export const Empty = glamorous.div(
  {
    fontWeight: 500,
    textAlign: "center"
  },
  ({ theme }) => ({
    marginBottom: theme.spacingBase * 2
  })
)

export const Loading = glamorous.div(
  {
    textAlign: "center"
  },
  ({ theme }) => ({
    marginBottom: theme.spacingBase * 2
  })
)

export const Error = glamorous.div(
  {
    textAlign: "center"
  },
  ({ theme }) => ({
    marginBottom: theme.spacingBase * 2,
    color: theme.colors.error
  })
)
