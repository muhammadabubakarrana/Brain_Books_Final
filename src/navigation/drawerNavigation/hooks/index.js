import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Linking} from 'react-native';
import {changeTheme} from '../../../redux';

export function useHooks(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const Dispatch = useDispatch();
  const THEME = useSelector(state => state.theme);
  const onPressEmailClick = () => {
    Linking.openURL('mailto:info@brainbooks.pk');
  };

  const toggleSwitch = () => {
    //   isDarkMode ?
    Dispatch(changeTheme('LIGHT'));
    // : Dispatch(changeTheme('DARK'));
    // setIsDarkMode(!isDarkMode);
  };
  const toggleSwitchTwo = () => {
    //   isDarkMode ?
    Dispatch(changeTheme('DARK'));
    // : Dispatch(changeTheme('DARK'));
    // setIsDarkMode(!isDarkMode);
  };

  return {
    isDarkMode,
    setIsDarkMode,
    Dispatch,
    THEME,
    onPressEmailClick,
    toggleSwitch,
    toggleSwitchTwo,
  };
}
