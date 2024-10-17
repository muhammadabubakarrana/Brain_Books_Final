import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '@rneui/base';
import {height, width} from 'react-native-dimension';
import {colors, sizes, appStyles, fontSize} from '../../services';
import Modal from 'react-native-modal';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Buttons from '../buttons';

export const ErrorModal = ({isVisible, errorMessage, onClose}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <Wrapper style={[styles.modalContainer, appStyles.shadowColored]}>
        <Wrapper flexDirectionRow alignItemsCenter>
          <Text isErrorColor isSmallTitle alignTextCenter>
            Sorry!
          </Text>
          <Spacer isSmall horizontal />
          <Icon
            name="sentiment-very-dissatisfied"
            type="material"
            color={colors.error}
            size={sizes.icons.large}
          />
        </Wrapper>
        <Spacer isSmall />
        <Text isMediumFont isSmallTitle alignTextCenter>
          {errorMessage}
        </Text>
        <Spacer isBasic />
        <Buttons.ColoredSmall
          textStyle={[appStyles.fontExtraBold, {fontSize: fontSize.large}]}
          text={'Go Back'}
          onPress={onClose}
        />
      </Wrapper>
    </Modal>
  );
};

export const LoadingModal = ({isVisible, progress}) => {
  return (
    <Modal isVisible={isVisible}>
      <Wrapper style={[styles.modalContainer, appStyles.shadowColored]}>
        <Text isSmallTitle>Loading... {progress}%</Text>
      </Wrapper>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: width(80),
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: height(2),
    paddingHorizontal: width(2),
    alignItems: 'center',
  },
});
