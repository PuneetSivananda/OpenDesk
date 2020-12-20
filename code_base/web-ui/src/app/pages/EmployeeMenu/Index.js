import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./components/SideDrawer";
import Card from '../../components/Card/Card';

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

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SideDrawer />
       <Card/>
      </div>
    </ThemeProvider>

  );
}
