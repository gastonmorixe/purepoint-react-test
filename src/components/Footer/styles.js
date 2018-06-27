import glamorous from "glamorous"

export const Footer = glamorous.header(
  {
    padding: "1.5em 2em",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  ({ theme }) => ({
    color: theme.layout.main.footer.color,
    fontSize: theme.layout.main.footer.fontSize,
    "&&& a:link, a:visited": {
      color: theme.layout.main.footer.color
    }
  })
)
