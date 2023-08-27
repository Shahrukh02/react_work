import React from 'react';
import {Container, Typography} from '../../atom-components';
import {View, StyleSheet} from 'react-native';
import {InputField} from '../../components';
import {DealLogo, EmailIcon} from '../../assets';
import sizer from '../../helpers/sizer';

function SignIn() {
  return (
    <Container>
      <View style={styles.center}>
        <DealLogo />
      </View>
      <InputField
        leftIcon={
          <EmailIcon
            width={sizer.moderateScale(20)}
            height={sizer.moderateVerticalScale(20)}
          />
        }
        label="Email Address"
        placeholder={'Smith@example.co|'}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  center: {
    marginTop: sizer.moderateVerticalScale(32),
    alignItems: 'center',
  },
});

export default SignIn;
