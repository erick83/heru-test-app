import React, {useRef, useState} from 'react';
import {Button, DrawerLayoutAndroid, View} from 'react-native';

const styles = {
  headerStyle: {
    backgroundColor: '#2d2c3c',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
};

const DrawerComponent = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => {
    return (
      <View style={[styles.container, styles.navigationContainer]}>
        <Button title="X" onPress={() => drawer.current.closeDrawer()} />
        <Button title="Home" onPress={() => drawer.current.closeDrawer()} />
        <Button
          title="Users List"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    />
  );
};

export default DrawerComponent;
