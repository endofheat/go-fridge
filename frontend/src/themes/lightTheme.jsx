import { createTheme } from "@mui/material";

export const lightThemeSettings = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      light: '#dcf3ff',
      dark: '#94a8b2',
/*       main: '#134243',
      light: '#252354',
      dark: '#3234ff', */
      contrastText: '#999999'
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
      default: '#d4f0ff',
    },
  },
  typography: {
    fontFamily: "monospace",
    fontSize: 16,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #4f91b4; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
};
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const lightTheme = createTheme(lightThemeSettings);