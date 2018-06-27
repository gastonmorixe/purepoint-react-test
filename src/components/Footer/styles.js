import glamorous from "glamorous"

export const Footer = glamorous.footer(
  {
    padding: "0 2em",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  ({ theme }) => ({
    marginLeft: theme.spacingBase * 2,
    marginRight: theme.spacingBase * 2,
    marginBottom: theme.spacingBase * 2,
    color: theme.layout.main.footer.color,
    fontSize: theme.layout.main.footer.fontSize,
    "&&& a:link, a:visited": {
      color: theme.layout.main.footer.color
    }
  })
)
