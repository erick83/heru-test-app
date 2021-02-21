import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
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

const DrawerComponent = ({children, navigation}) => {
  const drawer = useRef(null);
  const show = useSelector((store) => store.controls.drawerShow);
  useEffect(() => {
    if (show) {
      drawer.current.openDrawer();
    } else {
      drawer.current.closeDrawer();
    }
  }, [show]);

  const navigationView = () => {
    return (
      <View style={[styles.container, styles.navigationContainer]}>
        <Button title="X" onPress={() => drawer.current.closeDrawer()} />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button
          title="Users List"
          onPress={() => navigation.navigate('Users')}
        />
      </View>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerPosition="right"
      renderNavigationView={navigationView}>
      {children}
    </DrawerLayoutAndroid>
  );
};

export default DrawerComponent;
