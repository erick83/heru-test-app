import React from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

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
        underlayColor="#ccc"
        activeOpacity={0.6}>
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default DrawerButtonComponent;
