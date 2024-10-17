import {colors} from '../utilities/colors';
import {appStyles} from '../utilities/appStyles';
import {TestIds} from 'react-native-google-mobile-ads';
export const baseURL = 'https://brainbooks.pk/';
export const endPoints = {
  mcqs: {
    url_1: 'free_mcqs',
  },
  policies: {
    url_1: 'policies',
  },
  generate_paper: {
    url_1: 'generate_paper',
  },
};
export const routes = {
  //main stacks
  auth: 'auth',
  app: 'app',
  common: 'common',

  //auth
  splash: 'splash',
  signin: 'signin',
  createAccount: 'createAccount',

  //app
  bottomTab: 'bottomTab',
  Books: 'Books',
  account: 'account',
  home: 'home',
  community: 'community',
  postDetail: 'postDetail',
  Pdf: 'Pdf',
  quiz: 'quiz',
  quizModal: 'quizModal',
  Classes: 'Classes',
  Chapters: 'Chapters',
  Settings: 'Settings',
  GeneratePaperWebView: 'GeneratePaperWebView',
  Board: 'Board',

  //common
  AboutUs: 'AboutUs',
};
export const headers = {
  screenOptions: {
    // headerShown: false,
    title: 'Title',
    headerTitleAlign: 'left',
    headerStyle: [appStyles.headerStyle],
    headerTitleStyle: appStyles.headerTitleStyle,
    headerTintColor: colors.appTextColor4,
    headerBackTitle: ' ',
  },
};
export const tabs = {
  tabBarOptions: {
    showLabel: false,
    tabBarActiveTintColor: colors.appBgColor1,
    tabBarInactiveTintColor: colors.appBgColor1 + '60',
    allowFontScaling: true,
    tabBarStyle: [appStyles.tabBarStyle, appStyles.shadowExtraDark],
    activeBackgroundColor: '#FFFFFF40',
    //tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
  },
};

export const imagePickerOptions = {
  title: 'Select Photo',
  quality: 1,
  maxWidth: 500,
  maxHeight: 500,
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const adUnitIdINTERSTITIAL = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
export const adUnitIdBanner = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-YOUR_AD_UNIT_ID';
