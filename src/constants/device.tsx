import {Platform, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';
const isTablet = screenWidth >= 768;

export {isAndroid, isIos, screenWidth, screenHeight, isTablet};
