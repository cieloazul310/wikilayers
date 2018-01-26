import {
  grey50,
  cyan100, cyan300,
  lightBlue300, lightBlueA700,
} from 'material-ui/styles/colors';
import './fonts.css';

const bottomNavHeight = 56;
const formHeight = 120;
const pageHeightMargin = 22;
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

const commonStyles = {
  pallete,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic UI", "Original Yu Gothic", "Yu Gothic", YuGothic, Verdana, Meiryo, sans-serif',
  appField: (windowHeight) => ({
    backgroundColor: pallete.primary3Color,
    height: windowHeight - bottomNavHeight,
    overflowY: 'scroll'
  }),
  bottomNav: {
    height: bottomNavHeight,
    overflow: 'hidden'
  },
  pageHeader: {
    textAlign: 'center',
    marginBottom: '2em',
    paddingTop: '2em',
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
  containerOuter: {
    margin: '6px auto .5em auto',
    width: '100%',
    maxWidth: 800,
  },
  containerInner: {
    margin: '0',
    padding: '0',
    minHeight: window.innerHeight - bottomNavHeight - pageHeightMargin,
  },
  components: {
    margin: '0 auto 1em auto',
    padding: '1em',
  },
  form: {
    height: formHeight,
    boxSizing: 'border-box',
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
    maxWidth: 400,
    maxHeight: '100%'
  },
  resultText: (windowHeight) => ({
    maxHeight: innerMinHeight(windowHeight) - formHeight - 50 - 72 - 52,
    overflowY: 'scroll',
    boxSizing: 'border-box'
  }),
  resultBg: (featureCard, windowHeight) => ({
    backgroundColor: featureCard.article.hasOwnProperty('thumbnail') ? 'white' : '#eee',
    backgroundImage: featureCard.article.hasOwnProperty('thumbnail') ?  `url(${featureCard.article.thumbnail.source})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
    height: innerMinHeight(windowHeight) - formHeight - 50,
    position: 'relative',
    overflow: 'hidden',
    padding: '20px .5em 20px .5em',
    transition: 'background-image .5s linear'
  })
};

function innerMinHeight(windowHeight) {
  return windowHeight - bottomNavHeight - pageHeightMargin;
}

commonStyles.resultText.maxHeight = commonStyles.containerInner.minHeight - commonStyles.form.height - 50 - 72 - 52;

export default commonStyles;
