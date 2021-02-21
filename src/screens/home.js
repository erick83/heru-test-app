import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Dimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import DrawerComponent from '../components/drawer.component';
import Colors from '../colors';

const styles = {
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.PAPER,
  },
};

const HomeScreen = ({navigation}) => {
  const [loc, setloc] = React.useState();
  const [screen, setscreen] = React.useState(Dimensions.get('window'));

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setloc({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    });
  }, []);

  function checkOrientation(portrait, landscape) {
    if (screen.width > screen.height) {
      return landscape;
    }
    return portrait;
  }

  function layoutChange() {
    setscreen(Dimensions.get('window'));
  }

  function buttonHandler() {
    navigation.navigate('Users');
  }

  return (
    <DrawerComponent navigation={navigation}>
      <SafeAreaView>
        <View
          style={{
            ...styles.container,
            height: checkOrientation(
              Dimensions.get('screen').height - 140,
              '75%',
            ),
          }}
          onLayout={layoutChange}>
          {loc && (
            <MapView
              region={{
                latitude: loc.latitude,
                longitude: loc.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}>
              <Marker coordinate={loc} />
            </MapView>
          )}
        </View>
        <View
          style={{
            ...styles.buttonContainer,
            height: checkOrientation(60, '25%'),
          }}>
          <Button onPress={buttonHandler} color="#2d2c3c" title="Lista de Usuarios" />
        </View>
      </SafeAreaView>
    </DrawerComponent>
  );
};

export default HomeScreen;
