import React from 'react';
import {Wrapper, Text, Spacer, StatusBars} from '../../../components';
import {appIcons, colors, responsiveWidth} from '../../../services';
import {Image} from 'react-native';

function Splash() {
  return (
    <Wrapper
      isMain
      style={{
        justifyContent: 'center',
        backgroundColor: colors.appColor1,
      }}>
      <StatusBars.Light />
      <Wrapper alignItemsCenter animation={'slideInLeft'}>
        <Image
          source={appIcons.Brainlogo}
          resizeMode="contain"
          height={responsiveWidth(10)}
          width={responsiveWidth(10)}
        />
        <Text
          style={{
            color: colors.appTextColor6,
          }}
          isMediumFont
          isMedium>
          BRAIN BOOKS
        </Text>
      </Wrapper>
      <Spacer isDoubleBase />
      <Wrapper paddingHorizontalBase animation={'slideInRight'}>
        <Text
          alignTextCenter
          style={{color: colors.appTextColor6}}
          isSmallTitle>
          All in One{'\n'} Study Solution
        </Text>
        <Spacer isSmall />
        <Text
          style={{color: colors.appTextColor6}}
          alignTextCenter
          isMedium
          isMediumFont>
          Only platform for all Board Preparations
        </Text>
      </Wrapper>
    </Wrapper>
  );
}

export default Splash;
