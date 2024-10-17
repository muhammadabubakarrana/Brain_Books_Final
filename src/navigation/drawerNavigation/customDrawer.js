import React from 'react';
import {
  Spacer,
  Wrapper,
  Text,
  Lines,
  StatusBars,
  ScrollViews,
} from '../../components';
import {
  appIcons,
  appStyles,
  colors,
  openPlayStore,
  openWebsite,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  shareApp,
} from '../../services';
import {height, totalSize} from 'react-native-dimension';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {useHooks} from './hooks';
import {navigate} from '../rootNavigation';

export default function CustomDrawer(props) {
  const {toggleSwitchTwo, THEME, onPressEmailClick, toggleSwitch} = useHooks();

  return (
    <Wrapper
      isMain
      style={[
        styles.Drawer,
        {
          backgroundColor:
            THEME.data == 'LIGHT' ? colors.appBgColor1 : colors.drawer,
        },
      ]}>
      <StatusBars.Light />
      <Spacer isStatusBarHeigt />
      <Spacer height={height(1)} />
      <ScrollViews.KeyboardAvoiding>
        <Wrapper
          marginHorizontalBase
          marginVerticalSmall
          flexDirectionRow
          justifyContentFlexend>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
            }}>
            <Icon
              color={
                THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6
              }
              type="material-community"
              name={'close'}
              size={totalSize(4)}
            />
          </TouchableOpacity>
        </Wrapper>
        <Wrapper marginHorizontalBase>
          <Wrapper alignItemsCenter>
            <Text
              style={{
                color:
                  THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6,
              }}
              isBoldFont
              isSmallTitle>
              BRAIN BOOKS
            </Text>
          </Wrapper>
          <Wrapper marginVerticalSmall alignItemsCenter>
            <Text
              style={{
                textDecorationLine: 'underline',
                color:
                  THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6,
              }}
              isBoldFont
              isMedium>
              Theme
            </Text>
          </Wrapper>
          <Wrapper
            marginVerticalSmall
            flexDirectionRow
            justifyContentCenter
            alignItemsCenter>
            <TouchableOpacity
              onPress={() => toggleSwitch()}
              style={{
                backgroundColor:
                  THEME.data == 'LIGHT' ? colors.appTextColor6 : colors.warning,
                borderWidth: 2,
                borderColor:
                  THEME.data == 'LIGHT' ? colors.black : colors.transparent,
                width: responsiveWidth(22),
              }}>
              <Text
                style={{
                  marginRight: 5,
                  color: THEME.data == 'LIGHT' ? colors.black : colors.black,
                }}
                alignTextCenter
                isBoldFont
                isMedium>
                Light
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleSwitchTwo()}
              style={{
                backgroundColor:
                  THEME.data == 'LIGHT' ? colors.warning : colors.black,
                borderWidth: 2,
                borderColor:
                  THEME.data == 'LIGHT'
                    ? colors.transparent
                    : colors.appTextColor6,
                width: responsiveWidth(22),
              }}>
              <Text
                style={{
                  marginLeft: 5,
                  color:
                    THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6,
                }}
                alignTextCenter
                isBoldFont
                isMedium>
                Dark
              </Text>
            </TouchableOpacity>
          </Wrapper>
          <Spacer isBasic />

          <Drawer_item1
            onPress={() => navigate(routes.AboutUs)}
            iconName={'information'}
            title={'About Us'}
          />
          <Lines.Horizontal
            color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
            height={1}
          />
          <Drawer_item1
            onPress={shareApp}
            iconName={'share-variant'}
            title={'Share App'}
          />
          <Lines.Horizontal
            color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
            height={1}
          />
          <Drawer_item1
            onPress={openPlayStore}
            title={'Rate App'}
            iconName={'star'}
          />
          <Lines.Horizontal
            color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
            height={1}
          />
          <Drawer_item1
            onPress={onPressEmailClick}
            title={'Feedback'}
            iconName={'message-alert'}
          />
          <Lines.Horizontal
            color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
            height={1}
          />
          <Drawer_item1
            onPress={openWebsite}
            title={'Website'}
            iconName={'web'}
          />
          <Lines.Horizontal
            color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
            height={1}
          />
          <Drawer_item1
            onPress={() => openWebsite('policies')}
            title={'Policies'}
            iconName={'file-sign'}
          />
          <Lines.Horizontal
            color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
            height={1.5}
          />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  Drawer: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
});

const Drawer_item1 = ({
  onPress,
  title,
  iconName,
  iconColor,
  titleStyle,
  iconRightColor,
}) => {
  const {THEME} = useHooks();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(1.5),
      }}
      onPress={onPress}>
      <Wrapper flexDirectionRow alignItemsCenter>
        <Icon
          color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
          //  color={iconColor ? iconColor : colors.appBgColor1}
          type="material-community"
          name={iconName ? iconName : 'menu'}
          size={responsiveFontSize(28)}
        />
        <Spacer horizontal isSmall />
        <Text
          // isWhite
          isTinyTitle
          isMediumFont
          style={[
            //  {...appStyles.marginHorizontalTiny},
            titleStyle,
            {
              color:
                THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6,
            },
          ]}>
          {title}
        </Text>
      </Wrapper>

      <Icon
        color={THEME.data == 'LIGHT' ? colors.black : colors.appTextColor6}
        // color={iconColor ? iconColor : colors.appBgColor1}
        type="material-community"
        name={'chevron-right'}
        size={responsiveFontSize(28)}
      />
    </TouchableOpacity>
  );
};
