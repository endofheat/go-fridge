import { ThemeProvider, Typography } from "@mui/material";
import { ResponsiveFont } from "../themes/responsiveFontTheme";
import fridge from '../assets/fridge.png';

export default function Homepage() {

  return (
    <div className="Homepage">
      <ThemeProvider theme={ResponsiveFont}>
        <Typography variant="h1">
          Welcome to Go Fridge 
        </Typography>
        <Typography variant="h3">
          the only fridge management app you will ever need.
        </Typography>
        <Typography variant="p">
          Sounds pretty cool, but apparently it's not that good.. not yet, but will be awesome in future / after I become an experienced software engineer. YAY 
        </Typography>
        <p></p>
        <img src = {fridge} width = "50%" height = "50%" alt = 'A opened fridge. '/>
      </ThemeProvider>
    </div>
  );
}