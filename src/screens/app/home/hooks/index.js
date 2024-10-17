import {useDispatch} from 'react-redux';
import {saveCategory} from '../../../../redux';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes, useOrientation, appImages} from '../../../../services';
import {Dimensions} from 'react-native';

export function useHooks() {
  //UseStates
  // const [loading, setLoading] = useState(false);
  //Redux
  const Dispatch = useDispatch();
  // const Language = useSelector(state => state.lang.data);
  ///functions
  const HandleOnPress = item => {
    Dispatch(saveCategory(item));
    navigate(routes.Classes);
  };
  const width = Dimensions.get('window').width;
  const orientation = useOrientation();
  //array
  const data = [
    {
      img: appImages.OneB,
    },
    // {
    //   img: appImages.TwoB,
    // },
    {
      img: appImages.ThreeB,
    },
    {
      img: appImages.FourB,
    },
    {
      img: appImages.FiveB,
    },
  ];
  return {
    HandleOnPress,
    width,
    orientation,
    data,
  };
}
