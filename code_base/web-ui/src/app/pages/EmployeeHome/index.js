import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#407BFF'
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif"
  }
});

const EmployeeHome = () =>{
  return (
    <ThemeProvider theme={theme}>
      <div>
        Employee Home
      </div>
    </ThemeProvider>

  );
}

export default EmployeeHome