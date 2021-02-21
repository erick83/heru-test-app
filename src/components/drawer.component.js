import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, DrawerLayoutAndroid, View} from 'react-native';

import {actionCreators} from '../redux/controls/actions';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
};

const DrawerComponent = ({children, navigation}) => {
  const drawer = useRef(null);
  const dispatch = useDispatch();
  const show = useSelector((store) => store.controls.drawerShow);

  useEffect(() => {
    if (show) {
      drawer.current.openDrawer();
    } else {
      drawer.current.closeDrawer();
    }
  }, [show]);

  function closeDrawerHandler() {
    if (show) {
      dispatch(actionCreators.toggleDrawer());
    }
  }

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
      drawerWidth={200}
      drawerPosition="right"
      onDrawerClose={closeDrawerHandler}
      renderNavigationView={navigationView}>
      {children}
    </DrawerLayoutAndroid>
  );
};

export default DrawerComponent;
