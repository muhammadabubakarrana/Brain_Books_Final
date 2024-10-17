import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {saveBoard} from '../../../../redux';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';

export function useHooks() {
  //UseStates
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  //Redux
  const Dispatch = useDispatch();

  ///functions
  const HandleOnPress = (item, index) => {
    let {images_id} = item;
    Dispatch(saveBoard(images_id));
    navigate(routes.Pdf);
    // console.log(name);
  };

  return {
    HandleOnPress,
  };
}
