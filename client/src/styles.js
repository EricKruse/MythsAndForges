import { makeStyles } from '@mui/styles';
import theme from './globalStyles';

export default makeStyles(() => ({
  heading: {
    color: 'rgba(255, 165, 0, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{ // For mobile devices, put Form/Login/Register atop cards
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));