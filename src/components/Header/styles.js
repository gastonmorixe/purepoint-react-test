import glamorous from "glamorous"

export const Header = glamorous.header(
  {
    padding: "1.5em 2em",
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    "&&& a:link, a:visited": {
      color: "white",
      textDecoration: "none"
    }
  },
  ({ theme }) => ({
    marginBottom: theme.spacingBase * 4,
    backgroundColor: theme.layout.main.header.backgroundColor,
    color: theme.layout.main.header.color
  })
)

export const Left = glamorous.header({}, ({ theme }) => ({}))

export const Right = glamorous.header(
  {
    opacity: 0.5
  },
  ({ theme }) => ({})
)

export const Title = glamorous.header(
  {
    fontWeight: 600,
    display: "inline-flex"
  },
  ({ theme }) => ({})
)

export const Nav = glamorous.div(
  {
    display: "inline-flex"
  },
  ({ theme }) => ({
    marginLeft: theme.spacingBase * 3
  })
)
