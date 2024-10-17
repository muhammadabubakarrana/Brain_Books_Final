import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, Image} from 'react-native';
import {
  Headers,
  Images,
  Loaders,
  McqsSkeleton,
  Modals,
  Text,
  Wrapper,
} from '../../../components';
import Pdf from 'react-native-pdf';
import {useHooks} from './hooks';
import {
  adUnitIdBanner,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import {goBack} from '../../../navigation/rootNavigation';
//import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

export default function Index() {
  const {
    numOfPages,
    setnumOfPages,
    currentPage,
    setCurrentPage,
    pdfUri,
    isErrorModalVisible,
    setIsErrorModalVisible,
    errorMessage,
    setErrorMessage,
    progress,
    setProgress,
    book_subject_id,
    //   fetchPdf,
    pdfFetchedRef,
    categoryName,
    board_id,
    chapterName,
    boardName,
  } = useHooks();
  ///getting data from api
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     if (!state.isConnected && !pdfUri) {
  //       setErrorMessage('No internet connection.');
  //       setIsErrorModalVisible(true);
  //     } else if (state.isConnected && !pdfUri) {
  //       // Check for slow connection
  //       if (
  //         (state.type === 'cellular' &&
  //           state.details.cellularGeneration === '2g') ||
  //         (state.type === 'wifi' && !state.isInternetReachable)
  //       ) {
  //         // Alert the user about the slow connection
  //         Alert.alert(
  //           'Slow Connection',
  //           'Your internet connection seems to be slow. This may affect the performance of downloading PDFs. Would you like to continue?',
  //           [
  //             {text: 'Continue Anyway', onPress: () => fetchPdf()},
  //             {text: 'Cancel', onPress: () => {}},
  //           ],
  //           {cancelable: false},
  //         );
  //       } else {
  //         // Connection is good, proceed to fetch PDF
  //         if (!pdfFetchedRef.current) {
  //           fetchPdf();
  //           pdfFetchedRef.current = true;
  //         }
  //       }
  //     }
  //   });

  //   // Fetch the PDF on mount if there's no URI yet and it hasn't been fetched
  //   if (!pdfUri && !pdfFetchedRef.current) {
  //     fetchPdf();
  //     pdfFetchedRef.current = true;
  //   }

  //   return () => {
  //     unsubscribe();
  //     pdfFetchedRef.current = false; // Reset the ref when the component unmounts
  //   };
  // }, [pdfUri]);

  //following is the correct code uncomment it if you want to use it
  // useEffect(() => {
  //   fetchPdf();
  // })
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     if (!state.isConnected && !pdfUri) {
  //       setErrorMessage('No internet connection.');
  //       setIsErrorModalVisible(true);
  //       console.log(state);
  //     } else if (state.isConnected && !pdfUri) {
  //       //console.log(state);
  //       // Connection is back, start loading and try to fetch the PDF
  //       setIsErrorModalVisible(false);
  //       setErrorMessage('');
  //       if (!pdfFetchedRef.current) {
  //         fetchPdf();
  //         pdfFetchedRef.current = true;
  //       }
  //     }
  //   });

  //   // Fetch the PDF on mount if there's no URI yet and it hasn't been fetched
  //   if (!pdfUri && !pdfFetchedRef.current) {
  //     fetchPdf();
  //     pdfFetchedRef.current = true;
  //   }

  //   return () => {
  //     unsubscribe();
  //     pdfFetchedRef.current = false; // Reset the ref when the component unmounts
  //   };
  // }, [pdfUri]);

  return (
    <>
      <Headers.Primary
        containerStyle={{
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
        title={`${
          categoryName === 'Past-Papers'
            ? boardName
            : categoryName === 'Smartly'
            ? book_subject_id
            : chapterName
        } : ( ${currentPage} / ${numOfPages} )`}
        showBackArrow
        shadow
      />
      <Wrapper isMain>
        <Pdf
          spacing={20}
          showsVerticalScrollIndicator
          //enablePaging={true}
          renderActivityIndicator={
            () =>
              errorMessage ? null : progress == null && <Loaders.Primary /> //<Loaders.Primary />
          }
          trustAllCerts={false}
          source={{
            uri: `https://brainbooks.pk/brain-past-papers.php?testid=${board_id}`,
            method: 'GET',
          }}
          // source={{

          //   //   uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
          //   uri: data,
          //   method: 'GET',
          //   // cache: true,
          //   // expiration: 86400,
          // }}
          onLoadProgress={p => {
            const percentage = Math.round(p * 100);
            setProgress(percentage);
            //  console.log(percentage);
          }}
          onLoadComplete={() => setProgress(0)}
          onPageChanged={(page, numberOfPages) => {
            setnumOfPages(numberOfPages);
            setCurrentPage(page);
          }}
          onError={error => {
            //  console.log(error);
          }}
          style={{
            // flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            marginBottom: 80,
            paddingTop: responsiveHeight(2),
            //  height: Dimensions.get('window').height / 1.3,
          }}
        />
        {/* <Wrapper alignItemsCenter isAbsolute style={{bottom: 0}}>
          <BannerAd
            unitId={adUnitIdBanner}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              networkExtras: {
                collapsible: 'bottom',
              },
            }}
          />
        </Wrapper> */}
        {progress > 0 && (
          <Modals.LoadingModal isVisible={progress > 0} progress={progress} />
        )}

        <Modals.ErrorModal
          isVisible={isErrorModalVisible}
          errorMessage={errorMessage}
          onClose={goBack}
        />
      </Wrapper>
    </>
  );
}
