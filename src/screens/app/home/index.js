import React, {useState} from 'react';
import {
  Wrapper,
  Text,
  Spacer,
  ScrollViews,
  McqsSkeleton,
  BannerRectangular,
  ReusableBannerRectangular,
} from '../../../components';
import {
  adUnitIdBanner,
  colors,
  openPlayStore,
  openWebsite,
  openWifiSettings,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  shareApp,
} from '../../../services';
//import Carousel from 'react-native-reanimated-carousel';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from '@rneui/base';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
  AdEventType,
} from 'react-native-google-mobile-ads';

export default function Index() {
  const {HandleOnPress, width, orientation, data} = useHooks();
  const [isLoading, setIsLoading] = useState(true);
  // cosnt a = BannerAd()
  return (
    <ScrollViews.WithKeyboardAvoidingView showsVerticalScrollIndicator>
      <Wrapper isMain background2>
        <Spacer isBasic />
        {/* <Carousel
          style={{marginRight: responsiveWidth(20)}}
          width={width}
          height={orientation ? width / 2.3 : width / 4}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={3000}
          renderItem={({item}) => (
            <Wrapper alignItemsCenter>
              <Image
                style={{
                  borderRadius: 20,
                  width: width * 0.95,

                  height: orientation ? width / 2.3 : width / 4,
                }}
                source={item.img}
              />
            </Wrapper>
          )}
        /> */}
        <Spacer isBasic />
        <Wrapper
          animation={'bounceIn'}
          delay={500}
          // duration={3200}
          flexDirectionRow
          alignItemsCenter
          marginHorizontalSmall>
          <BigBox
            onPress={() => HandleOnPress('Solution')}
            heading={'Solution'}
            iconName={'book-open-variant'}
            paragraph={'(Key-Books)'}
            BgColor={colors.appGradiantColorMcqMainTwo}
          />
          <Spacer horizontal isBasic />
          <BigBox
           onPress={() => HandleOnPress('Up-to-dates')}
            heading={'Up-to-dates'}
            iconName={'school'}
            paragraph={'(Key-Books)'}
          />
        </Wrapper>
        {/* Showing Ad */}
        {/* <ReusableBannerRectangular
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        /> */}
        {/* <Wrapper alignItemsCenter marginVerticalSmall>
      
          {isLoading && <BannerRectangular />}

          <BannerAd
            unitId={adUnitIdBanner}
            size={BannerAdSize.MEDIUM_RECTANGLE}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
              keywords: ['sports', 'technology', 'gaming', 'education'],

              networkExtras: {
                collapsible: 'bottom',
              },
            }}
            onAdLoaded={() => {
              setIsLoading(false);
            }}
            onAdFailedToLoad={error => {
              __DEV__ && console.log('Ad failed to load:', error);
              setIsLoading(false);
            }}
          />
        </Wrapper> */}
        <Spacer isBasic />
        <Wrapper
          animation={'bounceIn'}
          delay={600}
          flexDirectionRow
          alignItemsCenter
          marginHorizontalSmall>
          <BigBox
           onPress={() => HandleOnPress('Past-Papers')}
            heading={'Past-Papers'}
            iconName={'book-education'}
            paragraph={'(All Boards)'}
          />
          <Spacer horizontal isBasic />
          <BigBox
           onPress={() => HandleOnPress('Smartly')}
            heading={'Smartly'}
            iconName={'head-snowflake'}
            paragraph={'(Guess Papers)'}
            BgColor={colors.appGradiantColorMcqMainTwo}
          />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper
          animation={'bounceIn'}
          delay={1200}
          flexDirectionRow
          alignItemsCenter
          marginHorizontalSmall>
          <BigBox
            onPress={() => navigate(routes.GeneratePaperWebView, {id: 'mcqs'})}
            //   onPress={() => openWebsite('mcqs')}
            heading={'Online Mcqs'}
            iconName={'quiz'}
            iconType={'material'}
            paragraph={'(FREE TEST)'}
            BgColor={colors.appGradiantColorMcqMainTwo}
          />
          <Spacer horizontal isBasic />
          <BigBox
            onPress={() =>
              navigate(routes.GeneratePaperWebView, {id: 'Create Test'})
            }
            // onPress={() => openWebsite('generate_paper')}
            heading={'Create Test'}
            iconName={'text-box'}
            paragraph={'(All Types)'}
          />
        </Wrapper>
        <SmallBoxWrapper />
      </Wrapper>
      <Spacer isDoubleBase />
    </ScrollViews.WithKeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  TwoMainBoxes: {
    flex: 3,
    height: responsiveHeight(20),
  },
  TwoMainBoxesWrapper: {
    borderRadius: 15,
    paddingHorizontal: responsiveWidth(3),
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
  ThreeBoxes: {
    //  flex: 3,
    borderRadius: 15,
    paddingHorizontal: responsiveWidth(3),
    height: responsiveHeight(7),
    marginTop: responsiveHeight(2),
  },
});

const SmallBoxWrapper = () => {
  return (
    <Wrapper
      animation={'bounceIn'}
      delay={700}
      flexDirectionRow
      alignItemsCenter
      marginHorizontalSmall>
      <SmallBox
        onPress={shareApp}
        text={'Share App'}
        iconName={'share-variant'}
      />
      <Spacer horizontal isBasic />
      <SmallBox
        onPress={openPlayStore}
        text={'Rate App'}
        appBgColor7
        iconName={'star'}
      />
    </Wrapper>
  );
};

const SmallBox = ({text, iconName, appBgColor7, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{flex: 3}}>
      <Wrapper
        style={styles.ThreeBoxes}
        backgroundColor={appBgColor7 ? colors.appBgColor7 : colors.appBgColor8}
        flexDirectionRow
        alignItemsCenter
        justifyContentCenter>
        <Icon
          type="material-community"
          name={iconName}
          size={responsiveFontSize(35)}
          color={colors.snow}
        />
        <Spacer horizontal isSmall />
        <Text isWhite isBoldFont isMedium>
          {text}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  );
};

const BigBox = ({
  heading,
  paragraph,
  iconName,
  iconType,
  BgColor,
  onPress,
  size,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.TwoMainBoxes}>
      <Wrapper
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        isGradient
        style={styles.TwoMainBoxesWrapper}
        gradiantColors={BgColor ? BgColor : colors.appGradiantColorMcqMain}>
        <Icon
          type={iconType ? iconType : 'material-community'}
          name={iconName}
          size={size ? size : responsiveFontSize(60)}
          color={colors.snow}
        />
        <Wrapper>
          <Text alignTextCenter isTinyTitle isWhite>
            {heading}
          </Text>

          <Text
            alignTextCenter
            isWhite
            isMediumFont
            style={{fontSize: responsiveFontSize(15)}}>
            {paragraph}
          </Text>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};
