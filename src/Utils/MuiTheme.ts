import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#123444"
    },
    secondary: {
      main: "#FF0"
    }
  },
  typography: {
    allVariants:{
        fontFamily:"Jost",
        fontSize:20
    }
  },
  components: {
    MuiFormControlLabel:{
        styleOverrides:{
            label:{
                fontSize:14,
                transform:"rotate(-5deg)"
            }
        }
    }

  },
});
