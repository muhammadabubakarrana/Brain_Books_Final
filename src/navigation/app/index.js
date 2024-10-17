import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as App from '../../screens/app';
import DrawerNavigation from '../drawerNavigation/DrawerNavigation';
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName={routes.home}>
      <AppStack.Screen name={'drawer'} component={DrawerNavigation} />
      {/* <AppStack.Screen name={routes.home} component={App.Home} /> */}

      <AppStack.Screen
        name={routes.Books}
        options={{animation: 'slide_from_bottom'}}
        component={App.Books}
      />
      <AppStack.Screen name={routes.Classes} component={App.Classes} />
      <AppStack.Screen name={routes.Chapters} component={App.Chapters} />

      <AppStack.Screen name={routes.Pdf} component={App.Pdf} />
      <AppStack.Screen name={routes.Board} component={App.Boards} />
      <AppStack.Screen name={routes.GeneratePaperWebView} component={App.GeneratePaperWebView} />

      {/* 
      <AppStack.Screen
        options={{animation: 'slide_from_bottom', animationDuration: 0.5}}
        name={routes.quiz}
        component={App.Quiz}
      />
      <AppStack.Screen name={routes.quizModal} component={App.QuizModal} /> */}

      {/* <AppStack.Screen name={routes.bottomTab} component={BottomTab} />  */}
      {/* <AppStack.Screen name={routes.Settings} component={App.Settings} /> */}
    </AppStack.Navigator>
  );
};

export default AppNavigation;
