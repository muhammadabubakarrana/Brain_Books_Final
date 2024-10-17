import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveClass, saveYear} from '../../../../redux';
import {navigate} from '../../../../navigation/rootNavigation';
import {adUnitIdINTERSTITIAL, routes} from '../../../../services';
import {InterstitialAd, AdEventType} from 'react-native-google-mobile-ads';

const interstitial = InterstitialAd.createForAdRequest(adUnitIdINTERSTITIAL, {
  keywords: ['fashion', 'clothing'],
});

export function useHooks() {
  //interstitial
  const [loadInterstitial, setLoadedInterstitial] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(
  //     AdEventType.LOADED,
  //     () => {
  //       setLoadedInterstitial(true);
  //       console.log('interstitial loaded');
  //     },
  //   );
  //   interstitial.load();

  //   return unsubscribe;
  // }, []);
  //Redux
  const Dispatch = useDispatch();

  ///functions
  const HandleOnPress = (item, index) => {
    let {class_id} = item;
    Dispatch(saveClass(class_id));
    if (loadInterstitial) {
      console.log('if');
      interstitial.show();
      interstitial.addAdEventListener(AdEventType.CLOSED, () => {
        navigate(routes.Books);
        interstitial.load();
      });
    } else {
      console.log('else');
      navigate(routes.Books);
      interstitial.load();
    }

    //console.log(name);
  };
  const HandleOnPress1 = (item, index) => {
  //  let {name} = item;
    Dispatch(saveYear(item));
    navigate(routes.Board);

    //  console.log(name);
  };

  return {
    HandleOnPress,
    HandleOnPress1,
  };
}
