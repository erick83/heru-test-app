import * as React from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: '85%',
    // width: 400,
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
    height: '15%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const HomeScreen = ({navigation}) => {
  const [loc, setloc] = React.useState();
  Geolocation.getCurrentPosition((info) => {
    setloc({
      latitude: info.coords.latitude,
      longitude: info.coords.longitude,
    });
  });

  function buttonHandler() {
    navigation.navigate('Users');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}>
          {loc && <Marker coordinate={loc} />}
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={buttonHandler} color="#2d2c3c" title="Users List" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
