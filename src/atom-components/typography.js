import React from 'react';
import {Text} from 'react-native';

import {COLORS} from '../globals';
import Gilroy from '../helpers/font-family';
import sizer from '../helpers/sizer';

export default function Typography({
  color = COLORS.dark,
  size = 16,
  pT = 0,
  pB = 0,
  pR = 0,
  pL = 0,
  mT = 0,
  mB = 0,
  mL = 0,
  mR = 0,
  medium = false,
  bold = false,
  semiBold = false,
  upperCase = false,
  textAlign = 'left',
  numberOfLines,
  children,
  style,
  ...props
}) {
  const styleObj = {
    color: color,
    fontSize: sizer.fontScale(size),
    paddingTop: sizer.moderateVerticalScale(pT),
    paddingBottom: sizer.moderateVerticalScale(pB),
    paddingLeft: sizer.moderateScale(pL),
    paddingRight: sizer.moderateScale(pR),
    marginTop: sizer.moderateVerticalScale(mT),
    marginBottom: sizer.moderateVerticalScale(mB),
    marginLeft: sizer.moderateScale(mL),
    marginRight: sizer.moderateScale(mR),
    ...(bold
      ? {...Gilroy.bold()}
      : medium
      ? {...Gilroy.medium()}
      : semiBold
      ? {...Gilroy.semiBold()}
      : {...Gilroy.regular()}),
    ...(upperCase && {textTransform: 'uppercase'}),
    textAlign: textAlign,
    ...style,
    ...props,
  };

  return (
    <Text style={styleObj} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}
