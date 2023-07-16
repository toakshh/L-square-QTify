import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#97df99',
      main: '#34c94b',
      dark: '#006b00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d45fc0',
      main: '#c934b3',
      dark: '#6e0089',
      contrastText: '#000',
    },
  },
});
export default theme