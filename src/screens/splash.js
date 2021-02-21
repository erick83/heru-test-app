import React from 'react';
import {View, Image} from 'react-native';
import TextWrapperComponent from '../components/text-wrapper.component';

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
  text: {
    width: 120,
    color: Colors.WHITE,
    textAlign: 'center',
  },
};

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.logo} source={require('../resources/logo.png')} />
      </View>

      <TextWrapperComponent style={styles.text}>
        Aplicacion de Prueba de Heru
      </TextWrapperComponent>
    </View>
  );
};

export default Splash;
