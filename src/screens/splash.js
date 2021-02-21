import React from 'react';
import {View, Image} from 'react-native';
import Colors from '../colors';

const styles = {
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  imgWrapper: {
    backgroundColor: Colors.SECONDARY,
    marginBottom: '5%',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
};

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.logo} source={require('../resources/logo.png')} />
      </View>
    </View>
  );
};

export default Splash;
