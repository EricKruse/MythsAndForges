import { createTheme } from '@mui/material/styles';

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'rgba(255, 145, 0, 1)',
          color: 'whitesmoke',
          '&:hover': {
            backgroundColor: 'rgba(255, 100, 0, 1)',
            color: 'white',
          },
        },
        containedSecondary: {
          backgroundColor: 'rgba(255, 122, 0, 1)',
          color: 'whitesmoke',
          '&:hover': {
            backgroundColor: 'rgba(255, 80, 0, 1)',
            color: 'white',
          },
        },
      },
    },
  },
});