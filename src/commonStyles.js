import {
  grey50,
  cyan100,
  cyan300,
  lightBlue300,
  lightBlueA700
} from 'material-ui/styles/colors';
import './fonts.css';

export const pallete = {
  primary1Color: lightBlueA700,
  primary2Color: lightBlue300,
  primary3Color: grey50,
  accent1Color: cyan300,
  accent2Color: cyan100 /*
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
const fontSizes = {
  appTitle: '300%',
  appSubTitle: '80%',
  pageTitle: '125%',
  pageSubTitle: '80%',
  mainText: '100%',
  subText: '80%',
};

export const bottomNav = {
  height: 56,
  overflow: 'hidden',
  position: 'fixed',
  width: '100%',
  left: 0,
  bottom: 0,
  zIndex: 10,
  margin: 0,
  padding: 0
};
const pageContainerMargins = {
  top: 6,
  bottom: 6
};
export const appField = {
  backgroundColor: pallete.primary3Color,
  paddingBottom: bottomNav.height,
  margin: 0,
};
export const pageContainer = {
  marginTop: pageContainerMargins.top,
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: pageContainerMargins.bottom,
  width: '100%',
  maxWidth: 800,
  minHeight: `calc(100vh - ${bottomNav.height +
    pageContainerMargins.top +
    pageContainerMargins.bottom +
    4}px)`
};
export const mapWrapper = {
  width: '100%',
  height: `calc(100vh - ${bottomNav.height + 1}px)`,
  minHeight: `calc(100vh - ${bottomNav.height + 1}px)`,
  margin: 0,
  padding: 0
};
export const mapContainer = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0
};
export const mapApp = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#fff',
}
export const mapInfo = {
  width: 320,
  maxWidth: '75%',
  position: 'absolute',
  top: '.5em',
  right: '.5em'
};
export const pageHeader = {
  wrapper: {
    textAlign: 'center',
    paddingTop: '2em',
    transition: 'height 0.2s linear'
  },
  appTitle: {
    fontSize: fontSizes.appTitle,
    fontWeight: 100,
    margin: 'auto',
    padding: '.2em'
  },
  appSubTitle: {
    color: '#777',
    fontSize: fontSizes.appSubTitle,
    fontWeight: 300,
    margin: 'auto'
  },
  pageTitle: {
    fontSize: fontSizes.pageTitle,
    fontWeight: 400,
    margin: 'auto'
  },
  pageSubTitle: {
    color: '#777',
    fontSize: fontSizes.pageSubTitle,
    fontWeight: 300,
    margin: 'auto'
  }
};
export const howTo = {
  container: {
    width: '100%',
    maxWidth: 480,
    margin: 'auto',
    padding: '2em .5em 3em .5em'
  },
  label: {
    fontSize: fontSizes.mainText
  },
  text: {
    fontSize: fontSizes.subText
  }
};
export const form = {
  height: 70,
  maxHeight: 70,
  margin: '0 auto',
  padding: '1em .2em',
  textAlign: 'center',
  boxSizing: 'border-box'
};
export const adBelowForm = {
  height: 90,
  maxHeight: 90
};
const resultCardHeight = {
  header: 76,
  actions: 52
};

export const resultCard = {
  resultBg: {
    backgroundColor: '#eee',
    backgroundImage: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
    // Card Bg Height = windowHeight - bottomNav.height - form.height - pageMargin
    height: `calc(100vh - ${bottomNav.height + form.height + adBelowForm.height + 12}px)`,
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '20px .5em 20px .5em',
    transition:
      'background .3s linear, background-image .3s linear, height .3s linear',
    '&::before': {
      content: '""',
      background: 'inherit',
      filter: 'blur(5px)',
      position: 'absolute',
      top: '-5px',
      left: '-5px',
      right: '-5px',
      bottom: '-5px',
      zIndex: -1
    }
  },
  card: {
    margin: '0 auto',
    maxWidth: 400,
    maxHeight: '100%'
  },
  resultHeader: {
    height: resultCardHeight.header
  },
  resultHeaderText: {
    paddingRight: '1em'
  },
  resultActions: {
    height: resultCardHeight.actions
  },
  resultText: {
    // Card Txt Height = Card Bg(windowHeight - bottomNav.height - form.height - pageMargin(12)) - CardBGPadding(20 * 2) - CardHeader - CardActions - CardBottomPadding(8?)
    maxHeight: `calc(100vh - ${bottomNav.height +
      form.height +
      resultCardHeight.header +
      resultCardHeight.actions +
      adBelowForm.height +
      54}px)`,
    overflowY: 'scroll',
    boxSizing: 'border-box'
  }
};

export const basic = {
  margin: '0 auto',
  padding: '1em'
};

const commonStyles = {
  pallete,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic UI", "Original Yu Gothic", "Yu Gothic", YuGothic, Verdana, Meiryo, sans-serif'
};

export default commonStyles;
