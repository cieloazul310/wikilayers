import {
  grey50,
  cyan100, cyan300,
  lightBlue300, lightBlueA700,
} from 'material-ui/styles/colors';
import './fonts.css';

const pallete = {
  primary1Color: lightBlueA700,
  primary2Color: lightBlue300,
  primary3Color: grey50,
  accent1Color: cyan300,
  accent2Color: cyan100,/*
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

export const bottomNav = {
  height: 56,
  overflow: 'hidden',
  position: 'fixed',
  width: '100%',
  left: 0,
  bottom: 0,
  zIndex: 10,
};
export const appField = {
  backgroundColor: pallete.primary3Color,
  overflowY: 'scroll',
  maxHeight: '100vh',
  paddingBottom: bottomNav.height
};
export const pageContainer = {
  marginTop: '6px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: '6px',
  width: '100%',
  maxWidth: 800,
  minHeight: `calc(100vh - ${bottomNav.height}px - 16px)`,
};
export const mapWrapper = {
  width: '100%',
  height: `calc(100vh - ${bottomNav.height}px)`,
  minHeight: `calc(100vh - ${bottomNav.height}px)`
};
export const mapInfo = {
  width: 320,
  maxWidth: '75%',
  position: 'absolute',
  top: '.5em',
  right: '.5em',
};
export const pageHeader = {
  wrapper: {
    textAlign: 'center',
    marginBottom: '2em',
    paddingTop: '2em',
    transition: 'height 0.2s linear'
  },
  appTitle: {
    fontSize: 48,
    fontWeight: 100,
    margin: 'auto'
  },
  appSubTitle: {
    color: '#777',
    fontSize: 14,
    fontWeight: 300,
    margin: 'auto'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 400,
    margin: 'auto'
  },
  pageSubTitle: {
    color: '#777',
    fontSize: 14,
    fontWeight: 300,
    margin: 'auto'
  },
};


const formHeight = 70;
const pageHeightMargin = 22;

const commonStyles = {
  pallete,
  appField,
  bottomNav,
  pageContainer,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic UI", "Original Yu Gothic", "Yu Gothic", YuGothic, Verdana, Meiryo, sans-serif',
  pageHeader: {
    textAlign: 'center',
    marginBottom: '2em',
    paddingTop: '2em',
    transition: 'height 0.2s linear'
  },
  appTitle: {
    fontSize: 48,
    fontWeight: 100,
    margin: 'auto'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 400,
    margin: 'auto'
  },
  containerInner: {
    margin: '0',
    padding: '0',
  },
  components: {
    margin: '0 auto 1em auto',
    padding: '1em',
  },
  form: {
    height: formHeight,
    boxSizing: 'border-box',
  },
  result: {
    margin: '0 auto',
    maxWidth: 400,
    maxHeight: '100%'
  },
  resultText: (windowHeight, status) => ({
    maxHeight: status !== 'failure' ?
      innerMinHeight(windowHeight) - formHeight - 50 - 78 - 52 : innerMinHeight(windowHeight) - formHeight - 50 - 78,
    overflowY: 'scroll',
    boxSizing: 'border-box'
  }),
  resultBg: (featureCard, windowHeight) => ({
    backgroundColor: featureCard.summary.hasOwnProperty('thumbnail') ? 'white' : '#eee',
    backgroundImage: featureCard.summary.hasOwnProperty('thumbnail') ?  `url(${featureCard.summary.thumbnail.source})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
    height: innerMinHeight(windowHeight) - formHeight - 50,
    position: 'relative',
    overflow: 'hidden',
    padding: '20px .5em 20px .5em',
    transition: 'background-image .5s linear, height .2s linear'
  })
};

function innerMinHeight(windowHeight) {
  return windowHeight - bottomNav.height - pageHeightMargin;
}

commonStyles.resultText.maxHeight = commonStyles.containerInner.minHeight - commonStyles.form.height - 50 - 72 - 52;

export default commonStyles;
