import React from 'react'
import '../App.css'
import { ThemeProvider, Typography } from "@mui/material";
import { ResponsiveFont } from "../themes/responsiveFontTheme";

function Footer() {
    return (
        <div className="Footer">
            <ThemeProvider theme={ResponsiveFont}>
                <Typography variant="footer">
                Oct 2023 SE FT AU & NZ Cohort IoD Capstone Project &copy; Copyright 2023 Made with ❤ by Akira
                </Typography> 
            </ThemeProvider>
            
        </div>
    )
}

export default Footer;