import React, {useEffect, useState} from 'react';
import {Wrapper, Headers, Spacer} from '../../../components';
import {Alert, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import {useHooks} from './hooks';
import {WebView} from 'react-native-webview';

export default function Index({route}) {
  const dataFromPreviousScreen = undefined; //route.params;

  //   const {HandleOnPress, HandleOnPress1} = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
        containerStyle={{
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
        // title={
        //   dataFromPreviousScreen.id === 'Create Test'
        //     ? 'Generate Paper'
        //     : 'Online MCQS'
        // }
        showBackArrow
        shadow
      />
      <Spacer isTiny />

      <WebView
        // textZoom={120}
        setDisplayZoomControls={true}
        source={{
          uri: 'https://brainbooks.pk/chapters?cat=1&bookid=1434&medium=1&chid=172',
          // dataFromPreviousScreen.id === 'Create Test'
          //   ? 'https://brainbooks.pk/generate_paper'
          //   : 'https://brainbooks.pk/free_mcqs',
        }}
        onError={error =>
          __DEV__ &&
          console.log('WebView error:', error.nativeEvent.description)
        }
        style={{
          width: '100%',
          flex: 1,
        }}
        contentMode="mobile"
        lackPermissionToDownloadMessage="Please allow the permission to download"
        downloadingMessage="Downloading"
        // onMessage={handleDownloadMessage}
        allowFileAccess={true}
        showsVerticalScrollIndicator={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        // onLoadStart={() => <Loaders.Primary />}
        //   renderLoading={() => <Loaders.Primary />}
        startInLoadingState={true}

        //  onLoadProgress={() => <Loaders.Primary />}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  //   Container: {
  //     borderTopLeftRadius: responsiveWidth(15),
  //     borderBottomRightRadius: responsiveWidth(15),
  //     borderTopRightRadius: responsiveWidth(3),
  //     borderBottomLeftRadius: responsiveWidth(3),
  //     marginBottom: responsiveHeight(3.5),
  //     padding: responsiveWidth(4),
  //   },
});
