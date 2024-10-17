import React, {useEffect, useState} from 'react';
import {Wrapper, Text, Headers, Spacer, Loaders} from '../../../components';
import {
  Boards,
  colors,
  responsiveHeight,
  responsiveWidth,
  useReduxStore,
} from '../../../services';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useHooks} from './hooks';
import {totalSize} from 'react-native-dimension';
import axios from 'axios';

export default function Index() {
  const {yearName, book_subject_id} = useReduxStore();
  const {HandleOnPress} = useHooks();
  const [data, setData] = useState([]);
  const regex = /([A-Z]{3}-\(G1\+G2\)-\d{2})(?=\.pdf)/;
  // const matches =

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          `https://brainbooks.pk/api/pastpaperjsonlist?subject_id=${book_subject_id}`,
        );
        //   const data = response;

        // Access the book_id from the data
        const Pappers = response?.data?.data[yearName]?.paper;
        // const names = Pappers.map(item => item?.name); // Get only the matched part
        setData(Pappers);
        console.log(Pappers); // Output: 1502
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookData();
  }, []);

  return (
    <Wrapper isMain isGradient gradiantColors={colors.appGradiantColors6}>
      <Headers.Primary
        containerStyle={{
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
        title={'Boards'}
        showBackArrow
        shadow
      />

      <Wrapper animation={'fadeInUp'}>
        <FlatList
          keyExtractor={item => item?.images_id}
          ListHeaderComponent={<Spacer isBasic />}
          ListFooterComponent={<Spacer height={totalSize(15)} />}
          ItemSeparatorComponent={<Spacer isBasic />}
          // ListHeaderComponentStyle={<Loaders.Secondary isVisible={true} />}
          style={{paddingHorizontal: responsiveWidth(4)}}
          showsVerticalScrollIndicator={true}
          data={data}
          renderItem={({item, index}) => {
            //const {id, name} = item;
            return (
              <TouchableOpacity onPress={() => HandleOnPress(item)} key={index}>
                <Wrapper
                  isGradient
                  gradiantColors={colors.appGradiantColors3}
                  style={styles.Container}>
                  <Text isDarkGray isTinyTitle alignTextCenter>
                    {item?.name}
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
    //  marginBottom: responsiveHeight(3.5),
    padding: responsiveWidth(4),
  },
});
