import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeLanguage, saveChapter} from '../../../../redux';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';

export function useHooks() {
  //UseStates
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  //Redux
  const Dispatch = useDispatch();
  ///functions
  const HandleOnPress = (item, index) => {
    let {name} = item;
    Dispatch(saveChapter(name));
    navigate(routes.Pdf);
  };
  const toggleSwitch = lang => {
    Dispatch(changeLanguage(lang));
  };
  return {
    data,
    setData,
    loading,
    setLoading,
    HandleOnPress,
    toggleSwitch,
  };
}
// useEffect(() => {
//   if (subCategory === 'World History') {
//     let levels = generateLevels(10);
//     setData(levels);
//   } else if (subCategory === 'World Organizations') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'World Wars') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Famous Forts') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'World Continents') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Capitals') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Currencies') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Mountains') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Oceans') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Seas') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Stadiums') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Gardens') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Parks') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Museums') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Streets') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Gates') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'International Days') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Nationals') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Nobel Prizes') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Discoveries') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Famous Books') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Sea Ports') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Intelligence Agencies') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Airlines') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'Airports') {
//     setData(Level_Dummy);
//   } else if (subCategory === 'News Agencies') {
//     setData(Level_Dummy);
//   } else {
//     setData(Level_Dummy);
//   }
//   //  setData(Level_Dummy);
// }, [subCategory]);
