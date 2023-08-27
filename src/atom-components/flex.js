import React from 'react';
import { View } from 'react-native';

import sizer from '../helpers/sizer';
export default function Flex({
    children = '',
    direction,
    jusContent,
    algItems,
    flexWrap,
    mt,
    mb,
    gap,
    flexStyle = '',
}) {
    return (
        <View
            style={{
                flexDirection: direction || 'row',
                justifyContent: jusContent || 'flex-start',
                alignItems: algItems || 'flex-start',
                flexWrap: flexWrap || 'nowrap',
                gap: gap || 0,
                marginTop: sizer.moderateVerticalScale(mt) || 0,
                marginBottom: sizer.moderateVerticalScale(mb) || 0,
                ...flexStyle,
            }}>
            {children}
        </View>
    );
}
