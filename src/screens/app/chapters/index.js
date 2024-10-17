import React, {useEffect} from 'react';
import {Wrapper, Text, Headers, Spacer} from '../../../components';
import {
  colors,
  fontFamily,
  generateChapters,
  responsiveHeight,
  responsiveWidth,
  useReduxStore,
} from '../../../services';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useHooks} from './hooks';
import axios from 'axios';

export default function Index() {
  const {data, setData, HandleOnPress, toggleSwitch} = useHooks();
  const {Language, bookName, className, book_subject_id} = useReduxStore();
  //at the end of screen data
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          `https://brainbooks.pk/api/bookchapterlistjason?subject_id=${book_subject_id}&cat_id=1`,
        );
        //   const data = response;

        // Access the book_id from the data
        const bookId = response?.data?.data?.eng;
        setData(bookId);
        console.log(bookId); // Output: 1502
      } catch (error) {
        console.error(error);
      }
    };
    fetchChapters();
  }, []);
  return (
    <Wrapper isMain isGradient gradiantColors={colors.appGradiantColors5}>
      <Headers.Primary
        containerStyle={{
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
        title={'Chapters'}
        showBackArrow
        shadow
      />
      <Spacer isSmall />
      {bookName == 'اردو' ||
      bookName == 'English' ||
      bookName === 'پنجابی الف' ||
      bookName === 'اسلامیات (اختیاری)' ||
      bookName === 'Al-Quran' ||
      (bookName === 'Physics' &&
        (className == 'Class 11' || className == 'Class 12')) ||
      (bookName === 'Chemistry' &&
        (className == 'Class 11' || className == 'Class 12')) ||
      (bookName === 'Biology' &&
        (className == 'Class 11' || className == 'Class 12')) ||
      (bookName === 'Maths' &&
        (className == 'Class 11' || className == 'Class 12')) ||
      (bookName === 'Computer' &&
        (className == 'Class 11' || className == 'Class 12')) ? null : (
        <Wrapper
          marginVerticalSmall
          flexDirectionRow
          justifyContentCenter
          alignItemsCenter>
          <TouchableOpacity
            onPress={() => toggleSwitch('English')}
            style={{
              backgroundColor:
                Language == 'English' ? colors.warning : colors.black,
              borderWidth: 2,
              borderColor:
                Language == 'English' ? colors.black : colors.transparent,
              width: responsiveWidth(22),
              padding: 3,
            }}>
            <Text
              style={{
                marginRight: 5,
                color: Language == 'English' ? colors.black : colors.snow,
              }}
              alignTextCenter
              isBoldFont
              isMedium>
              English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => toggleSwitch('Urdu')}
            style={{
              backgroundColor:
                Language == 'Urdu' ? colors.warning : colors.black,
              borderWidth: 2,
              borderColor:
                Language == 'Urdu' ? colors.black : colors.transparent,
              width: responsiveWidth(22),
              padding: 3,
            }}>
            <Text
              style={{
                marginLeft: 5,
                color: Language == 'Urdu' ? colors.black : colors.snow,
              }}
              alignTextCenter
              isBoldFont
              isMedium>
              Urdu
            </Text>
          </TouchableOpacity>
        </Wrapper>
      )}

      <Wrapper animation={'fadeInUp'}>
        <FlatList
          ListHeaderComponent={<Spacer isBasic />}
          ListFooterComponent={<Spacer height={responsiveHeight(3)} />}
          ItemSeparatorComponent={<Spacer isBasic />}
          //  keyExtractor={item => item?.subject_id}
          style={{paddingHorizontal: responsiveWidth(4)}}
          showsVerticalScrollIndicator={true}
          data={data}
          renderItem={({item, index}) => {
            // const {id, name} = item;
            return (
              <TouchableOpacity
                onPress={() => HandleOnPress(item)} //console.log(subCategory)
                key={index}>
                <Wrapper
                  isGradient
                  gradiantColors={colors.appGradiantColors2}
                  style={[
                    styles.Container,
                    {
                      padding:
                        Language == 'Urdu'
                          ? responsiveWidth(2.5)
                          : responsiveWidth(4),
                    },
                  ]}>
                  <Text
                    style={{
                      fontFamily:
                        Language == 'Urdu'
                          ? fontFamily.appTextUrdu
                          : fontFamily.appTextMedium,
                      //fontSize: Language == 'Urdu' ? fontSize.h2 : fontSize.h6,
                      //   marginVertical: Language == 'Urdu' ? -7 : 0,
                    }}
                    isWhite
                    isSmallTitle
                    alignTextCenter>
                    {item?.chapter}
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            );
          }}
        />
      </Wrapper>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderTopRightRadius: responsiveWidth(15),
    borderBottomLeftRadius: responsiveWidth(15),
    borderTopLeftRadius: responsiveWidth(3),
    borderBottomRightRadius: responsiveWidth(3),
    //   marginBottom: responsiveHeight(3.5),
    //    padding: responsiveWidth(4),
  },
});

// useEffect(() => {
//   const a =
//     Language == 'English'
//       ? 'Chapter No'
//       : Language == 'Urdu'
//       ? 'باب نمبر'
//       : null;
//   if (bookName === 'اردو') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(15, a, 9);
//     setData(chapter);
//   } else if (bookName === 'اسلامیات (لازمی)') {
//     toggleSwitch('Urdu');
//   } else if (bookName === 'Al-Quran') {
//     toggleSwitch('Urdu');
//   } else if (bookName === 'English' && className == 'Class 9') {
//     toggleSwitch('English');
//     let chapter = generateChapters(6, a);
//     setData(chapter);
//   } else if (bookName === 'English' && className == 'Class 10') {
//     toggleSwitch('English');
//     let chapter = generateChapters(13, a, 7);
//     setData(chapter);
//   }
//   //''پنجابی الف'
//   else if (bookName === 'پنجابی الف' && className == 'Class 9') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'پنجابی الف' && className == 'Class 10') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'پنجابی الف' && className == 'Class 11') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'پنجابی الف' && className == 'Class 12') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   }
//   //'اسلامیات (اختیاری)'
//   else if (bookName === 'اسلامیات (اختیاری)' && className == 'Class 9') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'اسلامیات (اختیاری)' && className == 'Class 10') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'اسلامیات (اختیاری)' && className == 'Class 11') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'اسلامیات (اختیاری)' && className == 'Class 12') {
//     toggleSwitch('Urdu');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   }
//   //Physics
//   else if (bookName === 'Physics' && className == 'Class 9') {
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Physics' && className == 'Class 10') {
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'Physics' && className == 'Class 11') {
//     toggleSwitch('English');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Physics' && className == 'Class 12') {
//     toggleSwitch('English');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   }
//   //Maths
//   else if (bookName === 'Maths' && className == 'Class 9') {
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Maths' && className == 'Class 10') {
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'Maths' && className == 'Class 11') {
//     toggleSwitch('English');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Maths' && className == 'Class 12') {
//     toggleSwitch('English');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   }
//   //Biology
//   else if (bookName === 'Biology' && className == 'Class 9') {
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Biology' && className == 'Class 10') {
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'Biology' && className == 'Class 11') {
//     toggleSwitch('English');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Biology' && className == 'Class 12') {
//     toggleSwitch('English');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   }
//   //Chemistry
//   else if (bookName === 'Chemistry' && className == 'Class 9') {
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Chemistry' && className == 'Class 10') {
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'Chemistry' && className == 'Class 11') {
//     toggleSwitch('English');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Chemistry' && className == 'Class 12') {
//     toggleSwitch('English');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   }
//   //Computer
//   else if (bookName === 'Computer' && className == 'Class 9') {
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Computer' && className == 'Class 10') {
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else if (bookName === 'Computer' && className == 'Class 11') {
//     toggleSwitch('English');
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   } else if (bookName === 'Computer' && className == 'Class 12') {
//     toggleSwitch('English');
//     let chapter = generateChapters(13, a, 8);
//     setData(chapter);
//   } else {
//     let chapter = generateChapters(7, a);
//     setData(chapter);
//   }
//   // console.log('when start', Language);
// }, [Language]);
