import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: '90%',
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
    console.log('press button', navigation);
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
      <Button onPress={buttonHandler} title="Users List" />
    </SafeAreaView>
  );
};

export default HomeScreen;
