import React, {useState, useEffect} from 'react';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
  AdEventType,
} from 'react-native-google-mobile-ads';
import {View, StyleSheet, ActivityIndicator} from 'react-native'; // Import ActivityIndicator

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-YOUR_AD_UNIT_ID'; // Replace with your Ad Unit ID

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}

      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          setIsLoading(false);
        }}
        onAdFailedToLoad={error => {
          __DEV__ && console.log('Ad failed to load:', error);
          setIsLoading(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 0.1, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// import React, {Component, useEffect, useState} from 'react';
// import {
//   Dimensions,
//   Image,
//   Linking,
//   Platform,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {totalSize} from 'react-native-dimension';
// import {
//   Logos,
//   Toasts,
//   Icons,
//   Text,
//   TextInputs,
//   Buttons,
//   ScrollViews,
//   Wrapper,
//   Spacer,
//   Headers,
//   CheckBoxes,
//   Loaders,
// } from '../../../components';
// import {
//   appStyles,
//   colors,
//   responsiveFontSize,
//   responsiveHeight,
//   routes,
//   appSvgs,
//   responsiveWidth,
//   sizes,
// } from '../../../services';
// import {useHooks} from './hooks';
// import {firebase} from '@react-native-firebase/storage';
// import Pdf from 'react-native-pdf';
// //import {firebase} from '@react-native-firebase/storage';

// export default function Index(props) {
//   const {navigate} = props.navigation;
//   const wifiSettingsURL =
//     Platform.OS === 'ios' ? 'app-settings:' : 'wifi://settings'; // Adjust for other platforms if needed
//   const openWifiSettings = async () => {
//     try {
//       const supported = await Linking.canOpenURL(wifiSettingsURL);
//       if (supported) {
//         await Linking.openURL(wifiSettingsURL);
//       } else {
//         console.log(supported);
//       }
//     } catch (err) {
//       console.error('Error opening Wi-Fi settings:', err);
//     }
//   };

//   const {loading, setLoading} = useHooks();
//   const [cPage, setcPage] = useState(1);
//   const [numOfPages, setnumOfPages] = useState(1);

//   const [pdfUri, setPdfUri] = useState();
//   const folderName = 'pdf';
//   const fileName = 'Maths.pdf';
//   useEffect(() => {
//     const fetchPdf = async () => {
//       setLoading(true);
//       const storage = firebase.storage();
//       const storageRef = storage.ref(`${folderName}/${fileName}`);
//       const url = await storageRef.getDownloadURL();
//       setPdfUri(url);
//       setLoading(false);
//       //  console.log(pdfUri);
//     };

//     fetchPdf();
//   }, []);
//   return (
//     <Wrapper isMain style={[{}]}>
//       <Wrapper flexDirectionRow alignItemsCenter>
//         <Text isXLTitle>{cPage}</Text>
//       </Wrapper>
//       {/* <TouchableOpacity
//         onPress={fetchPdf}
//         style={{borderColor: 'black', borderWidth: 1}}>
//         <Text isXLTitle>Open wifi</Text>
//       </TouchableOpacity> */}
//       {/* {loading ? (
//         <Loaders.Primary />
//       ) : (
//         pdfUri && (
//           <Image
//             source={{
//               uri: pdfUri,
//             }}
//             width={400}
//             height={500}
//             resizeMode="contain"
//           />
//         )
//       )} */}

//       <Pdf
//         trustAllCerts={false}
//         horizontal
//         source={{
//           uri: pdfUri,
//           method: 'GET',
//         }}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log(`Number of pages: ${numberOfPages}`);
//           setnumOfPages(numberOfPages);
//         }}
//         onPageChanged={(page, numberOfPages) => {
//           console.log(`Current page: ${page}`);
//           setcPage(page);
//         }}
//         onError={error => {
//           console.log(error);
//         }}
//         onPressLink={uri => {
//           console.log(`Link pressed: ${uri}`);
//         }}
//         style={{
//           flex: 1,
//           width: Dimensions.get('window').width,
//           height: Dimensions.get('window').height,
//         }}
//       />
//     </Wrapper>
//   );
// }
