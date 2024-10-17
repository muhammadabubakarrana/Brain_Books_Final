import React from 'react';
import Wrapper from '../../wrapper';
import Text from '../../text';
import {
  appSvgs,
  appStyles,
  colors,
  responsiveWidth,
  sizes,
  adUnitIdBanner,
} from '../../../services';
import * as TextInputs from '../../textInput';
import * as Modals from '../../modals';
import * as Icons from '../../icons';
import {Skeleton} from '@rneui/themed';
import {Loaders} from '../..';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
  AdEventType,
} from 'react-native-google-mobile-ads';

export const ChatInput = ({onPressEmojy, onPressSend, ...props}) => {
  return (
    <Wrapper
      background1
      style={[
        {
          paddingTop: sizes.marginVertical / 2,
          paddingBottom: sizes.marginVertical / 1.5,
        },
        appStyles.shadowExtraDark,
      ]}>
      <Wrapper flexDirectionRow alignItemsFlexEnd>
        <Icons.Button
          iconName={'smile'}
          iconType={'feather'}
          buttonColor={colors.appBgColor1}
          iconColor={colors.appTextColor5}
          iconSize={responsiveWidth(7)}
          buttonSize={responsiveWidth(10)}
          isRound
          buttonStyle={[appStyles.marginHorizontalTiny]}
          onPress={onPressEmojy}
        />
        <Wrapper flex={1}>
          <TextInputs.Colored
            placeholder={'Write a message'}
            placeholderTextColor={colors.appTextColor5}
            containerStyle={{...appStyles.marginHorizontalZero}}
            inputContainerStyle={{
              backgroundColor: colors.appBgColor1,
              borderRadius: sizes.cardRadius / 2,
            }}
            multiline
            inputStyle={[
              {
                height: null,
              },
              appStyles.paddingHorizontalZero,
              appStyles.marginVerticalZero,
              appStyles.paddingVerticalSmall,
              appStyles.fontRegular,
              {},
            ]}
            {...props}
          />
        </Wrapper>
        <Icons.Button
          iconName={'send'}
          iconType={'feather'}
          buttonColor={colors.appColor1}
          iconColor={colors.appTextColor6}
          iconSize={responsiveWidth(6)}
          buttonSize={responsiveWidth(10)}
          isRound
          buttonStyle={[appStyles.marginHorizontalSmall]}
          onPress={onPressSend}
        />
      </Wrapper>
    </Wrapper>
  );
};

export const TitleInfoPrimary = ({
  title,
  info,
  isBold,
  titleStyel,
  infoStyle,
}) => {
  const titleInfoBold = isBold || false;
  return (
    <Wrapper marginHorizontalBase flexDirectionRow justifyContentSpaceBetween>
      <Text isMedium isBoldFont={titleInfoBold} style={titleStyel}>
        {title}
      </Text>
      <Text isMedium isBoldFont={titleInfoBold} style={infoStyle}>
        {info}
      </Text>
    </Wrapper>
  );
};

export const IconButtonPrimary = ({...props}) => {
  return (
    <Icons.Button
      buttonColor={colors.appColor1}
      iconColor={colors.appTextColor6}
      iconSize={responsiveWidth(6)}
      buttonSize={responsiveWidth(10)}
      iconName={'arrow-left'}
      isRound
      {...props}
    />
  );
};

export const NoDataViewPrimary = ({containerStyle, ...props}) => {
  return (
    <Wrapper style={containerStyle}>
      <Icons.WithText
        iconName={'search-off'}
        iconType="material"
        text={'No Data Available'}
        direction="column"
        iconSize={responsiveHeight(15)}
        tintColor={colors.appTextColor4}
        textStyle={[
          appStyles.textRegular,
          appStyles.textGray,
          appStyles.textCenter,
        ]}
        titleStyle={[
          appStyles.textMedium,
          appStyles.fontBold,
          appStyles.textGray,
          appStyles.textCenter,
        ]}
        textContainerStyle={[appStyles.alignItemsCenter]}
        {...props}
      />
    </Wrapper>
  );
};

export const SuccessPopup = ({...PopupPrimaryProps}) => {
  return (
    <Modals.PopupPrimary
      // visible={isFoodLoggedPopupVisible}
      // toggle={toggleFoodLoggedPopup}
      // title={'Food Logged'}
      // buttonText1={'Add More'}
      // buttonText2={'Done'}
      // onPressButton1={() => {
      //     toggleFoodLoggedPopup()
      // }}
      // onPressButton2={() => {
      //     toggleFoodLoggedPopup()
      //     goBack()
      // }}
      titleStyle={[appStyles.h6, appStyles.textPrimaryColor]}
      icon={<Icons.Svg svg={appSvgs.arrow_left} size={responsiveWidth(25)} />}
      // topMargin={responsiveHeight(55)}
      {...PopupPrimaryProps}
    />
  );
};

export const BannerRectangular = () => {
  const keyWidths = ['20%', '100%', '100%', '40%', '100%'];
  const keyHeights = [8, 3, 3, 3, 5];

  return (
    <Wrapper
      style={{width: '100%'}}
      // flex={1}
      //alignItemsCenter
      paddingHorizontalBase
      // marginVerticalSmall
    >
      {[0, 1, 2, 3, 4].map(index => (
        <Wrapper key={index} marginVerticalTiny>
          <Skeleton
            animation="wave"
            width={keyWidths[index]}
            height={responsiveWidth(keyHeights[index])}
          />
        </Wrapper>
      ))}
    </Wrapper>
  );
};

export const ReusableBannerRectangular = ({isLoading, setIsLoading}) => {
  return (
    <Wrapper alignItemsCenter marginVerticalSmall>

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
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }}
        onAdFailedToLoad={error => {
          __DEV__ && console.log('Ad failed to load:', error);
          setIsLoading(false);
        }}
      />
    </Wrapper>
  );
};

export const LoadingSkeleton = ({...props}) => {
  const OptionsSkeleton = () => {
    return (
      <Wrapper
        flexDirectionRow
        alignItemsCenter
        style={{marginBottom: responsiveHeight(0.5)}}>
        <Skeleton
          animation="wave"
          circle
          width={responsiveFontSize(12)}
          height={responsiveFontSize(12)}
        />
        <Spacer horizontal isSmall />
        <Skeleton animation="wave" width={'45%'} height={responsiveHeight(1)} />
      </Wrapper>
    );
  };
  return (
    <Wrapper
      style={{marginTop: responsiveWidth(5)}}
      isCardView
      paddingHorizontalSmall
      paddingVerticalBase
      {...props}>
      <Skeleton animation="wave" width={'95%'} height={responsiveHeight(1.5)} />
      <Spacer isTiny />
      <Skeleton animation="wave" width={'30%'} height={responsiveHeight(1.5)} />
      <Spacer isBasic />
      <OptionsSkeleton />
      <OptionsSkeleton />
      <OptionsSkeleton />
      <OptionsSkeleton />
      <Spacer isTiny />
      <Wrapper
        flexDirectionRow
        alignItemsCenter
        justifyContentFlexend
        marginHorizontalBase>
        <Skeleton animation="wave" width={'20%'} height={responsiveHeight(2)} />
      </Wrapper>
    </Wrapper>
  );
};
