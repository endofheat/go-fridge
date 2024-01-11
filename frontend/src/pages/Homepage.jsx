import { ThemeProvider, Typography } from "@mui/material";
import { ResponsiveFont } from "../themes/responsiveFontTheme";

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
      </ThemeProvider>
    </div>
  );
}