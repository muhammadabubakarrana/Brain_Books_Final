import {useRef, useState} from 'react';
import {getDownloadUrl, useReduxStore} from '../../../../services';

export function useHooks() {
  //UseStates
  const [currentPage, setCurrentPage] = useState(0);
  const [numOfPages, setnumOfPages] = useState(0);
  const [pdfUri, setPdfUri] = useState();
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [progress, setProgress] = useState(null);
  //useRef
  const pdfFetchedRef = useRef(false);
  //redux
  const {
    categoryName,
    book_subject_id,
    chapterName,
    className,
    board_id,
    yearName,
  } = useReduxStore();
  ///functions
  function handleStorageError(errorCode) {
    switch (errorCode) {
      case 'storage/object-not-found':
        return 'The file you are trying to access does not exist.';
      case 'storage/unauthorized':
        return 'You do not have permission to access this file.';
      case 'storage/canceled':
        return 'File upload or download was canceled.';
      case 'storage/unknown':
        return 'An unknown error occurred. Please try again later.';
      default:
        return 'An error occurred during Downloading the file.';
    }
  }
  //fetching pdf from firebase
  // const fetchPdf = async () => {
  //   try {
  //     const url = await getDownloadUrl(
  //       categoryName,
  //       className,
  //       bookName,
  //       yearName,
  //       boardName,
  //       chapterName,
  //     );
  //     __DEV__ && console.log('fetch Pdf function rendering 1');
  //     setPdfUri(url);
  //     //setIsErrorModalVisible(false);
  //   } catch (error) {
  //     let errorMsg = handleStorageError(error.code);
  //     setErrorMessage(errorMsg || 'An error occurred.');
  //     setIsErrorModalVisible(true);
  //   }
  // };
  //variables

  return {
    //  fetchPdf,
    isErrorModalVisible,
    setIsErrorModalVisible,
    errorMessage,
    setErrorMessage,
    numOfPages,
    setnumOfPages,
    currentPage,
    setCurrentPage,
    pdfUri,
    setPdfUri,
    pdfFetchedRef,
    progress,
    setProgress,
    categoryName,
    book_subject_id,
    chapterName,
    board_id,
  };
}
