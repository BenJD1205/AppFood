import React from 'react';
import {View,Text} from 'react-native';

import {FONTS} from '../constants';

const Header = ({containerStyle, title, leftComponent, rightComponent}) => {
    return (
        <View
            style={{
                flexDirection:'row',
                ...containerStyle
            }}
        >
            {/*Left */}
            {leftComponent}
            {/*Left */}
            <View
                style={{
                    flex:1,
                    alignItems: 'center',
                }}
            >
                <Text style={{...FONTS.h3}}>
                    {title}
                </Text>
            </View>
            {/*Right*/}
            {rightComponent}
        </View>
    )
}

export default Header;