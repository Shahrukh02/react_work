import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {COLORS, baseOpacity} from '../../globals';
import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {Typography} from '../../atom-components';

const PasswordField = React.forwardRef(
  (
    {
      containerSt = {},
      inputStyle = {},
      label = '',
      // value = '',
      error = '',
      placeholder = '',
      handleChange = e => {},
      mt = 0,
      mb = 18,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState();
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const errorText = err => (
      <Text
        style={{
          color: COLORS.danger,
          fontSize: sizer.fontScale(10),
          paddingTop: sizer.moderateScale(8),
          ...Fonts.semiBold(),
        }}>
        {err}
      </Text>
    );

    return (
      <View
        style={{
          marginBottom: sizer.moderateVerticalScale(mb),
          marginTop: sizer.moderateVerticalScale(mt),
          ...containerSt,
        }}>
        <Typography size={16} color={COLORS.greyV1} mB={12}>
          {label}
        </Typography>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.light,
            borderRadius: sizer.fontScale(4),
            paddingHorizontal: sizer.moderateScale(10),
            // paddingVertical: sizer.moderateVerticalScale(20),
            borderWidth: sizer.fontScale(1),
            borderColor: COLORS.greyV1,
          }}>
          <TextInput
            placeholder={placeholder}
            ref={ref}
            value={value}
            onChangeText={e => {
              setValue(e);
              handleChange(e);
            }}
            style={{
              flex: 1,
              ...Fonts.regular(),
              fontSize: sizer.fontScale(14),
              // paddingLeft: sizer.moderateScale(2),
              paddingVertical: sizer.moderateVerticalScale(14),
              color: COLORS.darkV1,
              ...inputStyle,
            }}
            placeholderTextColor={COLORS.greyV1}
            secureTextEntry={secureTextEntry}
            {...props}
          />
          <TouchableOpacity
            hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
            activeOpacity={baseOpacity}
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            {/* {secureTextEntry ? <EyeSlash /> : <EyeSvg />} */}
          </TouchableOpacity>
        </View>
        {Boolean(error !== '') ? errorText(error) : null}
      </View>
    );
  },
);

export default PasswordField;
