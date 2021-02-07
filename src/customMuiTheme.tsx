import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

const customMuiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default customMuiTheme;
