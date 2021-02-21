import React from 'react';
import {View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

import TextWrapperComponent from './text-wrapper.component';
import Colors from '../colors';

const styles = {
  container: {
    marginBottom: 5,
  },
  text: {
    padding: 5,
    paddingLeft: 15,
  },
};

const DrawerButtonComponent = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={Colors.SECONDARY}
        activeOpacity={0.6}>
        <TextWrapperComponent style={styles.text}>{title}</TextWrapperComponent>
      </TouchableHighlight>
    </View>
  );
};

export default DrawerButtonComponent;
