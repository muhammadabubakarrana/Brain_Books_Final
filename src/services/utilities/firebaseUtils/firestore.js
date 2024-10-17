// import firestore from '@react-native-firebase/firestore';

// export const fetchDocs = async (collection, doc, level, docsPerPage) => {
//   const first = await firestore()
//     .collection(collection)
//     .doc(doc)
//     .collection(level)
//     .orderBy('createdAt')
//     .limit(docsPerPage)
//     .get();
//   let posts = first.docs.map(doc => ({id: doc.id, ...doc.data()}));
//   let lastVisible = first.docs[first.docs.length - 1];
//   return {posts, lastVisible};
// };

// export const fetchNextDocs = async (
//   collection,
//   doc,
//   level,
//   lastDoc,
//   docsPerPage,
// ) => {
//   const next = await firestore()
//     .collection(collection)
//     .doc(doc)
//     .collection(level)
//     .orderBy('createdAt')
//     .startAfter(lastDoc)
//     .limit(docsPerPage)
//     .get();
//   let nextPosts = next.docs.map(doc => ({id: doc.id, ...doc.data()}));
//   let lastVisible = next.docs[next.docs.length - 1];
//   let firstVisible = next.docs[0];
//   return {nextPosts, lastVisible, firstVisible};
// };
