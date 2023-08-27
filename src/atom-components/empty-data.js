import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {COLORS} from '../globals';
import Typography from './typography';
import sizer from '../helpers/sizer';

function EmptyData() {
  return (
    <View
      style={{
        paddingTop: sizer.moderateVerticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography >No Data Found!</Typography>
    </View>
  );
}

export default EmptyData;
