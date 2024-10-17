import React, {useEffect, useState} from 'react';
import {Wrapper, Text, Headers, Spacer} from '../../../components';
import {Classes, colors, responsiveWidth} from '../../../services';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useHooks} from './hooks';
import axios from 'axios';
import {totalSize} from 'react-native-dimension';

export default function Index({route}) {
  const b = route.params;
  const {HandleOnPress, HandleOnPress1} = useHooks();
  const [Years, setYears] = useState([]);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          ` https://brainbooks.pk/api/pastpaperjsonlist?subject_id=${b?.subject_id}`,
        );
        // Access the image_id from the data
        const Get_image_id = response?.data?.data;
        // Access the years from the data
        const yearsData = response?.data?.data;
        const years = Object.keys(yearsData);

        setYears(years);
     //   console.log(Get_image_id); // Output: 1502
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookData();
  }, [b?.subject_id]);
  return (
    <Wrapper isMain isGradient gradiantColors={colors.appGradiantColors6}>
      <Headers.Primary
        containerStyle={styles.Header}
        title={b?.year === undefined ? 'Classes' : 'Years'}
        showBackArrow
        // onBackPress={b?.year === undefined ? goBack : navigate(routes.Classes)}
        shadow
      />
      <Wrapper animation={'fadeInUp'}>
        {/* following was the previous one you can uncomment it */}
        <FlatList
          keyExtractor={item => item.class_id || item}
          ListHeaderComponent={<Spacer isBasic />}
          ListFooterComponent={<Spacer height={totalSize(15)} />}
          ItemSeparatorComponent={<Spacer isBasic />}
          style={{paddingHorizontal: responsiveWidth(4)}}
          showsVerticalScrollIndicator={true}
          data={b?.year === undefined ? Classes : Years}
          renderItem={({item, index}) => {
            //  const {id, name} = item;
            return (
              <TouchableOpacity
                onPress={() =>
                  b?.year === undefined
                    ? HandleOnPress(item)
                    : HandleOnPress1(item)
                }
                key={index}>
                <Wrapper
                  isGradient
                  gradiantColors={colors.appGradiantColors3}
                  style={styles.Container}>
                  <Text isDarkGray isTinyTitle alignTextCenter>
                    {item?.name || item}
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
    borderTopLeftRadius: responsiveWidth(15),
    borderBottomRightRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(3),
    borderBottomLeftRadius: responsiveWidth(3),
    // borderRadius: responsiveWidth(15),
    // marginBottom: responsiveHeight(3.5),
    padding: responsiveWidth(6),
    paddingVertical: responsiveWidth(4),
  },
  Header: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});
