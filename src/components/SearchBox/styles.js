import glamorous from "glamorous"

export const SearchBox = glamorous.div(
  {
    display: "flex",
    flex: 1
  },
  ({ theme }) => ({
    marginBottom: theme.spacingBase * 2
  })
)

export const Form = glamorous.form(
  {
    display: "flex",
    flex: 1
  },
  ({ theme }) => ({})
)
export const Input = glamorous.input(
  {
    display: "inline-flex",
    flex: 1,
    borderWidth: 1,
    outline: 0,
    margin: 0,
    fontSize: "1em"
  },
  ({ theme }) => ({
    height: theme.component.searchBox.height,
    paddingLeft: theme.component.searchBox.height / 2,
    borderBottomLeftRadius: theme.component.searchBox.borderRadius,
    borderTopLeftRadius: theme.component.searchBox.borderRadius,
    borderRightWidth: 0,
    borderColor: theme.component.searchBox.borderColor
  })
)
export const Button = glamorous.button(
  {
    fontSize: "1em",
    display: "inline-flex",
    borderWidth: 1,
    outline: 0,
    margin: 0,
    cursor: "pointer",
    ":hover": {
      opacity: 0.95
    }
  },
  ({ theme }) => ({
    backgroundColor: theme.component.searchBox.button.backgroundColor,
    color: theme.component.searchBox.button.color,
    paddingLeft: theme.component.searchBox.height / 2,
    paddingRight: theme.component.searchBox.height / 2,
    height: theme.component.searchBox.height,
    borderBottomRightRadius: theme.component.searchBox.borderRadius,
    borderTopRightRadius: theme.component.searchBox.borderRadius,
    borderColor: theme.component.searchBox.borderColor
  })
)
