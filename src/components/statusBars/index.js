import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../../services';

export const Dark = ({hidden}) => {
  return (
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor={colors.transparent}
      hidden={hidden}
    />
  );
};

export const Light = () => {
  return (
    <StatusBar
      translucent
      barStyle="light-content"
      // backgroundColor={colors.appBgColor6 + '40'}
      backgroundColor={colors.transparent}
    />
  );
};
