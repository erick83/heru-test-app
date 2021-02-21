import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeScreen,
  UsersScreen,
  UserDetailScreen,
  SplashScreen,
} from '../screens';
import HbButtonComponent from './hb-button.component';
import {actionCreators} from '../redux/controls/actions';

const Stack = createStackNavigator();

const styles = {
  headerStyle: {
    backgroundColor: '#2d2c3c',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Arial',
  },
};

const NavigatorComponent = () => {
  const splash = useSelector((store) => store.controls.splash);
  const dispatch = useDispatch();
  const title = 'Bienvenido';
  const d = new Date();
  const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getFullYear()}`;

  if (splash) {
    setTimeout(() => {
      dispatch(actionCreators.hideSplash());
    }, 1000);
  }

  return (
    <>
      {splash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: `${title} ${date}`,
                ...styles,
                headerRight: () => <HbButtonComponent />,
              }}
            />
            <Stack.Screen
              name="Users"
              component={UsersScreen}
              options={{...styles, headerRight: () => <HbButtonComponent />}}
            />
            <Stack.Screen
              name="UserDetail"
              component={UserDetailScreen}
              options={{...styles, headerRight: () => <HbButtonComponent />}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default NavigatorComponent;
