// import {firebase} from '@react-native-firebase/storage';

// export const getDownloadUrl = async (
//   categoryName,
//   className,
//   bookName,
//   yearName,
//   boardName,
//   chapterName,
// ) => {
//   const storage = firebase.storage();
//   let storageRef;

//   if (categoryName === 'Past-Papers') {
//     storageRef = storage.ref(
//       `${categoryName}/${className}/${bookName}/${yearName}/${boardName}.pdf`,
//     );
//   } else if (categoryName === 'Smartly') {
//     storageRef = storage.ref(`${categoryName}/${className}/${bookName}.pdf`);
//   } else {
//     storageRef = storage.ref(
//       `${categoryName}/${className}/${bookName}/${chapterName}.pdf`,
//     );
//   }

//   const url = await storageRef.getDownloadURL();
//   return url;
// };
