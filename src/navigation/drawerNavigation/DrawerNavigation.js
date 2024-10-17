import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {routes, appStyles, colors, responsiveWidth} from '../../services';
import {Home, Settings} from '../../screens/app';
import CustomDrawer from './customDrawer';
import {AboutUs, TermsOfService} from '../../screens/common';
import {Icon} from '@rneui/base';
//import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerLeftContainerStyle: {
          marginLeft: responsiveWidth(2),
        },

        drawerStyle: {
          backgroundColor: colors.transparent,
          width: responsiveWidth(60),
        },
        headerTintColor: colors.appTextColor6,
        headerTitleAlign: 'center',
        title: 'Brain Books',
        headerTitleAllowFontScaling: true,
        headerStyle: {
          backgroundColor: colors.appColor1,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={routes.home}>
      <Drawer.Screen
        options={{
          headerShown: true,
          drawerContentContainerStyle: {marginLeft: 50},
        }}
        name={routes.home}
        component={Home}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name={routes.AboutUs}
        component={AboutUs}
      />
    </Drawer.Navigator>
  );
}
