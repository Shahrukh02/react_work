import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {COLORS, baseOpacity} from '../../globals';
import {Flex} from '../../atom-components';

const CustomButton = React.forwardRef(
  (
    {
      btnText = 'Continue',
      flag = false,
      btnStyle = '',
      textStyle = '',
      loader = false,
      upperCase = false,
      onClick = () => {},
      icon = true,
      type = 'contained',
      mb = 0,
      fontSize,
      danger,
      reversePosition = false,
      ...props
    },

    ref,
  ) => {
    let bgColor;
    let textColor;
    let loaderColor;
    if (type === 'contained') {
      bgColor = COLORS.darkv1;
      textColor = COLORS.white;
      loaderColor = COLORS.white;
    } else {
      bgColor = 'transparent';
      textColor = danger ? COLORS.danger : COLORS.primary;
      loaderColor = COLORS.primary;
    }

    const styles = {
      btn: {
        borderRadius: sizer.fontScale(44),
        paddingVertical: sizer.moderateVerticalScale(15),
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnTextStyle: {
        fontSize: sizer.fontScale(15),
        ...Fonts.medium(),
        textAlign: 'center',
        textTransform: upperCase ? 'uppercase' : 'capitalize',
        letterSpacing: 1.25,
      },
    };

    return (
      <View>
        <TouchableOpacity
          ref={ref}
          activeOpacity={baseOpacity}
          style={[
            styles.btn,
            {
              backgroundColor: bgColor,
              borderWidth: type !== 'contained' ? 1 : 0,
              borderColor: danger ? COLORS.danger : COLORS.primary,
              marginBottom: sizer.moderateVerticalScale(mb),
            },
            btnStyle,
          ]}
          onPress={onClick}
          {...props}>
          {loader ? (
            <ActivityIndicator size={sizer.fontScale(22)} color={loaderColor} />
          ) : icon ? (
            reversePosition ? (
              <Flex algItems="center" gap={10}>
                {icon}
                <Text
                  style={[
                    styles.btnTextStyle,
                    flag && {flex: 0.8},
                    {color: textColor, fontSize: fontSize},
                    textStyle,
                  ]}>
                  {btnText}
                </Text>
              </Flex>
            ) : (
              <Flex algItems="center" gap={10}>
                <Text
                  style={[
                    styles.btnTextStyle,
                    flag && {flex: 0.8},
                    {color: textColor, fontSize: fontSize},
                    textStyle,
                  ]}>
                  {btnText}
                </Text>
                {icon}
              </Flex>
            )
          ) : (
            <Text
              style={[
                styles.btnTextStyle,
                flag && {flex: 0.8},
                {color: textColor},
                textStyle,
              ]}>
              {btnText}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  },
);

export default CustomButton;
