const baseColors = {
  primary: "#0099ff"
}

const secondaryColors = {}

export default {
  spacingBase: 10,
  colors: {
    ...baseColors,
    secondaryColors,
    error: "red"
  },
  search: {
    results: {
      backgroundColorEven: "rgba(0,0,0,0.05)",
      backgroundColorOdd: "rgba(0,0,0,0.02)"
    }
  },
  component: {
    searchBox: {
      height: 45,
      borderColor: "rgba(0,0,0,.3)",
      borderRadius: "99em",
      button: {
        backgroundColor: baseColors.primary,
        color: "white"
      }
    }
  },
  layout: {
    main: {
      header: {
        backgroundColor: "rgb(0,0,0,.9)",
        color: "white"
      },
      footer: {
        fontSize: "0.75em",
        color: "rgba(0,0,0,.4)"
      }
    }
  }
}
