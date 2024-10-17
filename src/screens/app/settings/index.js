import React, {Component} from 'react';
import {Wrapper, Text, Headers, Buttons, Spacer} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {appImages, fontSize, responsiveWidth} from '../../../services';
// import Carousel from 'react-native-reanimated-carousel';
import {Dimensions, Image} from 'react-native';
import {saveBooks} from '../../../redux';

export default function Index() {
  const width = Dimensions.get('window').width;

  const Dispatch = useDispatch();
  const THEME = useSelector(state => state.category);

  const HandleLog = () => {
    console.log(THEME);
  };
  const toggleSwitch = () => {
    console.log(THEME);
    Dispatch(saveBooks('Muhammad Ali Akbar'));
  };
  const data = [
    {
      img: appImages.dio,
    },
    {
      img: appImages.home1,
    },
    {
      img: appImages.home2,
    },
  ];
  return (
    <Wrapper isMain>
      <Headers.Primary title={'Index'} showBackArrow />
      {/* <Text>Settings</Text> */}
      <Spacer isBasic />
      {/* <Buttons.Bordered text={'Submit'} onPress={() => toggleSwitch()} /> */}

      {/* <CircularProgress
        duration={1000}
        radius={40}
        value={30}
        activeStrokeWidth={12}
        progressValueFontSize={fontSize.large}
        // progressValueColor={'#ecf0f1'}
        valueSuffix={'%'}
      /> */}
      <Spacer isBasic />
      {/* uncomment it */}
      {/* <Carousel
        //   Dimensions.get('window').width
        // loop
        style={{marginRight: 50}}
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={2000}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({item}) => (
          <Wrapper alignItemsCenter>
            <Image
              style={{width: responsiveWidth(95), height: width / 2}}
              // height={width / 2}
              // width={{width: 1000}}
              source={item.img}
              resizeMode="stretch"
            />
          </Wrapper>
        )}
      /> */}
      {/* <CircularProgress
        value={50}
        activeStrokeColor={'#2465FD'}
        activeStrokeSecondaryColor={'#C25AFF'}
      /> */}
      {/* <Buttons.Bordered text={'Submit'} onPress={() => HandleLog()} /> */}
    </Wrapper>
  );
}
