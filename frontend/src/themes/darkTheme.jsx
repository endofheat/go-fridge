import { createTheme } from "@mui/material/styles";

export const darkThemeSettings = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#8de2f1',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d77',
      contrastText: '#4ba6aa',
    },
    divider: 'rgba(0,79,94,0.75)',
    background: {
      default: '#223b50',
    },
  },
  
  typography: {
    // see https://blog.logrocket.com/add-custom-fonts-mui/#google-fonts-cdn for custom fonts
    // need to add <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"> to index.html
    fontFamily: "monospace",
    fontSize: 16,
    h1: {
      fontSize: 30,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            a {
                color: #0b64c5;
            }
            `,
    },
    MuiButton: {
      defaultProps: {
        variant: "text",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
  },
};

// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/#theme-configuration-variables for more
export const darkTheme = createTheme(darkThemeSettings) ;