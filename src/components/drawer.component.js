import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerLayoutAndroid, View} from 'react-native';

import {actionCreators} from '../redux/controls/actions';
import DrawerButtonComponent from './drawer-button.component';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 5,
  },
  button: {
    width: '100%',
    marginBottom: 5,
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

  function nav(view) {
    return () => {
      navigation.navigate(view);
      dispatch(actionCreators.toggleDrawer());
    };
  }

  const navigationView = () => {
    return (
      <View style={styles.container}>
        {/* <Button title="Home" style={styles.button} onPress={nav('Home')} /> */}
        {/* <Button title="Users List" onPress={nav('Users')} /> */}
        <DrawerButtonComponent title="Home" onPress={nav('Home')} />
        <DrawerButtonComponent title="Users" onPress={nav('Users')} />
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
