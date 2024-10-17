import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
// import 'react-native-gesture-handler';
import store, {persistor} from './src/redux/store';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {
  Books,
  Home,
  Pdf,
  Classes,
  Chapters,
  Boards,
  GeneratePaperWebView,
} from './src/screens/app';
import {CreateAccount} from './src/screens/auth';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  // LogBox.ignoreLogs([
  //   'Non-serializable values were found in the navigation state.',
  // ]);
  //3.4.2, reanimated version: 3.5.4
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider style={{flex: 1}}>
            {/* <Navigation /> */}
            <GeneratePaperWebView />
            {/* <Boards /> */}
            {/* <Home /> */}
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
