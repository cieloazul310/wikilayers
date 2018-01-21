import {
  blueGrey100,
  cyan300,
  lightBlue100, lightBlue500, lightBlueA700,
  white
} from 'material-ui/styles/colors';

const bottomNavHeight = 56;
const pallete = {
  primary1Color: lightBlueA700,
  primary2Color: lightBlue500,
  primary3Color: lightBlue100,
  accent1Color: cyan300,/*
  accent2Color: grey100,
  accent3Color: grey500,
  textColor: darkBlack,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  pickerHeaderColor: cyan500,
  clockCircleColor: fade(darkBlack, 0.07),
  shadowColor: fullBlack,*/
};

const commonStyles = {
  pallete,
  appField: {
    backgroundColor: pallete.primary3Color,
    height: window.innerHeight - bottomNavHeight,
    overflowY: 'scroll'
  },
  bottomNav: {
    height: bottomNavHeight,
    overflow: 'hidden'
  },
  container: {
    backgroundColor: white,
    margin: '0 auto',
    maxWidth: 800,
  },
  map: {
    width: '100%',
    height: window.innerHeight - bottomNavHeight,
    backgroundColor: '#fff',
  },
  mapInfo: {
    width: 320,
    maxWidth: '75%',
    position: 'absolute',
    top: '.5em',
    right: '.5em',
  },
  result: {
    margin: '0 auto',
    width: '90%'
  }
};

export default commonStyles;
