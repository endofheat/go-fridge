import { createTheme } from "@mui/material/styles";

export const ResponsiveFont = createTheme();

ResponsiveFont.typography.h1 = {
    fontSize: '5rem',
        '@media (min-width:600px)': {
            fontSize: '3rem',
        },
    [ResponsiveFont.breakpoints.up('xs')]: {
        fontSize: '1.5rem',
        },
};

ResponsiveFont.typography.h3 = {
    fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
    [ResponsiveFont.breakpoints.up('xs')]: {
        fontSize: '1.2rem',
        },
    [ResponsiveFont.breakpoints.up('md')]: {
        fontSize: '1rem',
        },
};

ResponsiveFont.typography.p = {
    fontSize: '0.8rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
    [ResponsiveFont.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
        },
    [ResponsiveFont.breakpoints.up('md')]: {
        fontSize: '1rem',
        },
};

ResponsiveFont.typography.footer = {
    fontSize: '0.8rem',
        '@media (min-width:600px)': {
            fontSize: '0.8rem',
        },
    [ResponsiveFont.breakpoints.up('xs')]: {
        fontSize: '0.4rem',
        },
    [ResponsiveFont.breakpoints.up('md')]: {
        fontSize: '0.6rem',
        },
};
