import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {COLORS, baseOpacity} from '../../globals';

function PrimaryButton({
  label = 'Custom Button',
  flag = false,
  btnStyle = '',
  textStyle = '',
  loader = false,
  upperCase = false,
  onClick = () => {},
  icon = true,
  type = 'primary',
  mb = 0,
  fontSize,
  ...props
}) {
  let bgColor;
  let textColor = COLORS.light;
  let loaderColor = COLORS.light;

  if (type === 'primary') {
    bgColor = COLORS.primary;
  } else if (type === 'secondary') {
    bgColor = COLORS.secondary;
  } else if (type === 'danger') {
    bgColor = COLORS.danger;
  } else {
    bgColor = COLORS.light;
    textColor = COLORS.darkV1;
    loaderColor = COLORS.darkV1;
  }

  const styles = {
    btn: {
      borderRadius: sizer.fontScale(40),
      paddingVertical: sizer.moderateVerticalScale(18),
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnTextStyle: {
      ...Fonts.medium(),
      fontSize: sizer.fontScale(14),
      textAlign: 'center',
      textTransform: upperCase ? 'uppercase' : 'capitalize',
    },
  };

  return (
    <TouchableOpacity
      disabled={loader}
      activeOpacity={baseOpacity}
      style={[
        styles.btn,
        {
          backgroundColor: bgColor,
          marginBottom: sizer.moderateVerticalScale(mb),
        },
        btnStyle,
      ]}
      onPress={onClick}
      {...props}>
      {loader ? (
        <ActivityIndicator size={sizer.fontScale(19)} color={loaderColor} />
      ) : (
        <Text style={[styles.btnTextStyle, {color: textColor}, textStyle]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default PrimaryButton;
