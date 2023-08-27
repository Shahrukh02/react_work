import {Platform} from 'react-native';

const regular = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Regular',
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Gilroy-Regular',
      },
    }),
  };
};

const bold = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Bold',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'Gilroy-Bold',
      },
    }),
  };
};

const semiBold = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-SemiBold',
        fontWeight: '600',
      },
      android: {
        fontFamily: 'Gilroy-SemiBold',
      },
    }),
  };
};
const extraBold = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-ExtraBold',
        fontWeight: '800',
      },
      android: {
        fontFamily: 'Gilroy-ExtraBold',
      },
    }),
  };
};

const medium = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Medium',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'Gilroy-Medium',
      },
    }),
  };
};

export default {
  regular,
  bold,
  semiBold,
  extraBold,
  medium,
};
