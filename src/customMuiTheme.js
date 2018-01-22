import getMuiTheme from 'material-ui/styles/getMuiTheme';
import commonStyles from './commonStyles';

const customMuiTheme = getMuiTheme({
  palette: commonStyles.pallete,
  fontFamily: commonStyles.fontFamily
});

export default customMuiTheme;
