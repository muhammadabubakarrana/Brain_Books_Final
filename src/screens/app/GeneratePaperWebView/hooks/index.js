import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveClass, saveYear} from '../../../../redux';
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
    let {name} = item;
    Dispatch(saveClass(name));
    navigate(routes.Books);
    //console.log(name);
  };
  const HandleOnPress1 = (item, index) => {
    let {name} = item;
    Dispatch(saveYear(name));
    navigate(routes.Board);

    //  console.log(name);
  };

  return {
    HandleOnPress,
    HandleOnPress1,
  };
}
