import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {Typography} from '../../atom-components';
import { ErrorIcon } from '../../assets';

const InputField = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = '',
      //   value = '',
      error = 'Invalid Email or Password',
      placeholder = '',
      handleChange = e => {},
      mb = 18,
      mt = 0,
      light = false,
      numPad = false,
      editable = true,
      color = '#000',
      leftIcon = '',
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState();
    const errorText = err => (
      <Text
        style={{
          color: COLORS.danger,
          fontSize: sizer.fontScale(10),
          paddingTop: sizer.moderateScale(8),
          alignSelf:'flex-end',
          alignItems:'center',
          ...Fonts.semiBold(),
        }}>
       <View  >
       <ErrorIcon />
       
       </View> {err}
      </Text>
    );

    return (
      <View
        style={{
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}>
        <Typography
          size={14}
          color={error ? COLORS.dangerV2 : COLORS.dark}
          mB={12}>
          {label}
        </Typography>
        <View>
          {!!leftIcon && (
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                bottom: 0,
                top: 0,
                left: sizer.moderateScale(13),
              }}>
              {leftIcon}
            </View>
          )}
          <TextInput
            keyboardType={numPad ? 'numeric' : 'default'}
            placeholder={placeholder}
            ref={ref}
            value={value}
            editable={editable}
            onChangeText={e => {
              setValue(e);
              handleChange(e);
            }}
            style={{
              ...Fonts.regular(),
              fontSize: sizer.fontScale(15),
              paddingVertical: sizer.moderateVerticalScale(14),
              paddingHorizontal: sizer.moderateScale(10),
              borderRadius: sizer.fontScale(6),
              backgroundColor: COLORS.light,
              borderWidth: sizer.fontScale(1),
              borderColor: error ? COLORS.danger : COLORS.dark,
              paddingLeft: leftIcon ? sizer.moderateScale(44) : 12,
              color: color,
              ...inputStyle,
            }}
            placeholderTextColor={COLORS.dark}
            {...props}
          />
        </View>
        {Boolean(error !== '') ? errorText(error) : null}
      </View>
    );
  },
);

export default InputField;
