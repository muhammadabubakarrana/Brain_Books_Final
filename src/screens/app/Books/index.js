import React, {useEffect, useState} from 'react';
import {
  Wrapper,
  Text,
  Icons,
  Spacer,
  Headers,
  ReusableBannerRectangular,
  Images,
} from '../../../components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  Matric,
  fontFamily,
  InterPartOne,
  InterPartTwo,
  useReduxStore,
  Matric_Part_Two,
  Matric_Part_One,
} from '../../../services';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {navigate} from '../../../navigation/rootNavigation';
import {useDispatch} from 'react-redux';
import {saveBooks} from '../../../redux';
import axios from 'axios';
import {height, totalSize, width} from 'react-native-dimension';

export default function Index() {
  const {className} = useReduxStore();
  const [Actualdata, setActualdata] = useState([]);
  // useEffect(() => {
  //   const fetchBookData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://brainbooks.pk/api/subjectsjsonlist?class_id=${className}`,
  //       );
  //       //   const data = response;

  //       // Access the book_id from the data
  //       // const bookId = response?.data?.data?.slice(-1);
  //       // setActualdata(bookId);
  //       // console.log(bookId); // Output: 1502
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchBookData();
  // }, []);
  return (
    <Wrapper isMain background2>
      <Headers.Primary
        containerStyle={{
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
        title={'Books'}
        showBackArrow
        shadow
      />
      {/* remove following it's just testing */}
      {/* <Wrapper marginHorizontalLarge>
        {Actualdata?.map((item, index) => (
          <Wrapper alignItemsCenter key={index}>
            {item?.subject_icon ? (
              <Images.SqareRound
                size={totalSize(20)}
                source={{
                  uri: `https://old.brainbooks.pk/newtest-system${item.subject_icon}`,
                }}
              />
            ) : (
              <Text>No image</Text>
            )}
            <Text>{item?.subject}</Text>
          </Wrapper>
        ))}
      </Wrapper> */}
      <ScrollView>
        <Spacer isBasic />
        {className == 3 ? (
          <Card data={InterPartOne} title={`Brain Books ${11}`} />
        ) : className == 4 ? (
          <Card data={InterPartTwo} title={`Brain Books ${12}`} />
        ) : className == 2 ? (
          <Card data={Matric_Part_Two} title={`Brain Books ${10}`} />
        ) : (
          <Card data={Matric_Part_One} title={`Brain Books ${9}`} />
        )}
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  urdu: {
    fontFamily: fontFamily.appTextUrdu,
    fontSize: responsiveFontSize(19),
    marginVertical: -11,
  },
});

const Card = ({data, title}) => {
  const Dispatch = useDispatch();
  const {categoryName, className} = useReduxStore();
  const [isLoading, setIsLoading] = useState(true);

  const HandleOnPress = (item, index) => {
    let {route, name, subject_id} = item;
    Dispatch(saveBooks(subject_id));
    if (categoryName === 'Past-Papers') {
      navigate(routes.Classes, {year: 'year', subject_id: subject_id});
    } else if (categoryName === 'Smartly') {
      navigate(routes.Pdf);
    } else {
      navigate(routes.Chapters);
    }
    //  console.log(itemName);
  };

  return (
    <Wrapper
      style={{marginBottom: responsiveHeight(3)}}
      isCardView
      marginHorizontalSmall
      paddingHorizontalSmall>
      <Wrapper animation={'fadeInRight'} delay={200}>
        <Text
          style={{
            color: 'green',
            paddingLeft: responsiveWidth(3),
            paddingTop: responsiveHeight(2),
          }}
          isTinyTitle
          // isLarge
          // isMediumFont
        >
          {title}
        </Text>
      </Wrapper>

      <Wrapper
        animation={'fadeInRight'}
        delay={200}
        // animation={'fadeInRight'}
        flexDirectionRow
        style={{flexWrap: 'wrap'}}>
        {data.map((item, i) => {
          const {name, image} = item;
          return (
            <Wrapper
              key={i}
              style={[
                {
                  flexBasis: '33.33%',
                },
              ]}
              alignItemsCenter
              marginVerticalBase>
              <TouchableOpacity onPress={() => HandleOnPress(item, i)}>
                <Wrapper
                  background2
                  alignItemsCenter
                  justifyContentCenter
                  style={{
                    height: responsiveWidth(20),
                    width: responsiveWidth(20),
                    borderRadius: responsiveWidth(20 / 2),
                  }}>
                  <Icons.Svg size={responsiveFontSize(45)} svg={image} />
                </Wrapper>
                <Spacer isTiny />
                <Text
                  style={[
                    className === 'Class 9'
                      ? (i === 0 ||
                          i === 2 ||
                          i === 10 ||
                          i === 11 ||
                          i === 12 ||
                          i === 13 ||
                          i === 16 ||
                          i === 17 ||
                          i === 18 ||
                          i === 19) &&
                        styles.urdu
                      : className === 'Class 10'
                      ? (i === 0 ||
                          i === 2 ||
                          i === 10 ||
                          i === 11 ||
                          i === 12 ||
                          i === 13 ||
                          i === 16 ||
                          i === 17 ||
                          i === 18 ||
                          i === 19) &&
                        styles.urdu
                      : className === 'Class 11'
                      ? (i === 0 ||
                          i === 2 ||
                          i === 11 ||
                          i === 12 ||
                          i === 13 ||
                          i === 14 ||
                          i === 16 ||
                          i === 17 ||
                          i === 19 ||
                          i === 20 ||
                          i === 21 ||
                          i === 23 ||
                          i === 25 ||
                          i === 26) &&
                        styles.urdu
                      : className === 'Class 12'
                      ? (i === 0 ||
                          i === 11 ||
                          i === 12 ||
                          i === 13 ||
                          i === 14 ||
                          i === 16 ||
                          i === 17 ||
                          i === 19 ||
                          i === 20 ||
                          i === 21 ||
                          i === 25 ||
                          i === 26) &&
                        styles.urdu
                      : null,
                  ]}
                  //    style={i === 0 && styles.a}
                  alignTextCenter
                  isMedium
                  isMediumFont>
                  {/* Display the first word on its own line */}
                  {name.split(' ')[0]}

                  {/* If there are more than one word, display the remaining words on the second line */}
                  {name.split(' ').length > 1 && (
                    <Text>
                      {'\n'}
                      {name.split(' ').slice(1).join(' ')}
                    </Text>
                  )}
                  {/* Split text into an array of words */}
                  {/* {name.split(' ').slice(0, 2).join(' ')} */}
                  {/* If there are three words, add a newline and the third word */}
                  {/* {name.split(' ').length === 3 && (
                  <Text>
                    {'\n'}
                    {name.split(' ')[2]}
                  </Text>
                )} */}
                  {/* {name} */}
                </Text>
              </TouchableOpacity>
              {/* uncomment following banner in production mode. */}
              {/* {i === 2 && (
                <Wrapper
                  marginVerticalSmall
                  style={{marginLeft: responsiveWidth(-60)}}>
                  <ReusableBannerRectangular
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                </Wrapper>
              )} */}
            </Wrapper>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};
