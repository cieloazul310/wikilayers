import getMuiTheme from 'material-ui/styles/getMuiTheme';
import commonStyles from './commonStyles';

const customMuiTheme = getMuiTheme({
  palette: commonStyles.pallete,
});

export default customMuiTheme;
