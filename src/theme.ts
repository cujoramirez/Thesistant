import { createTheme } from '@mui/material/styles';

// Color palette from colourpalette.txt
const colorPalette = {
  primary: {
    main: '#10a2e0',
    light: '#6bd3fe',
    dark: '#0b446c',
  },
  secondary: {
    main: '#0d608e',
    light: '#41bff5',
    dark: '#083c61',
  },
  info: {
    main: '#11a2e0',
    light: '#6bd3fe',
    dark: '#0a4168',
  },
};

export const theme = createTheme({
  palette: {
    primary: colorPalette.primary,
    secondary: colorPalette.secondary,
    info: colorPalette.info,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    // Allow Tailwind classes to work with MUI
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
  },
});
