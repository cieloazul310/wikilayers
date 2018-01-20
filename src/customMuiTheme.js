import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueGrey500, blueGrey700,
  cyan100,
  lightBlueA700, lightBlue500
} from 'material-ui/styles/colors';
import commonStyles from './commonStyles';

const customMuiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlueA700,
    primary2Color: lightBlue500,
    primary3Color: cyan100,
    accent1Color: lightBlueA700
  },
  toolbar: commonStyles.toolbar,
  card: {
    width: 320
  }
});

export default customMuiTheme;
