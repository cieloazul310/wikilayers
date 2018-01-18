import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueGrey500, blueGrey700,
  cyan100,
  lightBlueA700,
} from 'material-ui/styles/colors';
import commonStyles from './commonStyles';

const customMuiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    primary3Color: cyan100,
    accent1Color: lightBlueA700
  },
  toolbar: commonStyles.toolbar,
});

export default customMuiTheme;
