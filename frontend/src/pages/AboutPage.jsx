import { ThemeProvider, Typography } from "@mui/material";
import { ResponsiveFont } from "../themes/responsiveFontTheme";

export default function AboutPage() {
    // Save in pages/AboutPage.jsx
    return (
      <div className="About">
        <ThemeProvider theme={ResponsiveFont}>

        <Typography variant="h1">About</Typography>
        <Typography variant="p">This is Akira Li's capstone project for Institute of Data & AUT Software Engineering Programme, for study use only.</Typography>
        <p></p>
        <Typography variant="p">You're welcome to download the code and play with it. </Typography>
        </ThemeProvider>
      </div>
    );
  }