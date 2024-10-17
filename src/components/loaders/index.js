import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Icon} from '@rneui/base';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, appStyles, sizes} from '../../services';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';

export const Primary = ({}) => {
  return (
    <Wrapper isMain>
      <Wrapper
        flex={1}
        style={[{justifyContent: 'center', backgroundColor: 'transparent'}]}>
        <Wrapper style={[appStyles.center, {backgroundColor: 'transparent'}]}>
          <ActivityIndicator color={colors.fire} size={sizes.icons.xxl} />
          {/* <Spacer isBasic /> */}
          <Spacer isTiny />
          <Text alignTextCenter isSmallTitle isMediumFont>
            Loading data, Please wait
          </Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export const Secondary = ({isVisible}) => {
  return (
    <>
      {isVisible ? (
        <Wrapper
          isAbsoluteFill
          animation="fadeIn"
          style={[
            {
              justifyContent: 'center',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: colors.appBgColor1 + 'BF',
            },
          ]}>
          <Wrapper style={[appStyles.center, {backgroundColor: 'transparent'}]}>
            <ActivityIndicator color={colors.fire} size={sizes.icons.xxl} />
            <Spacer isBasic />
            <Text isRegular>Loading</Text>
          </Wrapper>
        </Wrapper>
      ) : null}
    </>
  );
};
