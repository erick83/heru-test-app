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
import Colors from '../colors';

const Stack = createStackNavigator();

const styles = {
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
  },
  headerTintColor: Colors.WHITE,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Arial',
  },
};

const NavigatorComponent = () => {
  const splash = useSelector((store) => store.controls.splash);
  const dispatch = useDispatch();
  const title = 'Test';
  const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
  const [hour, minute] = new Date().toLocaleTimeString('en-US').split(/:| /);

  const fullDate = `${date}-${month}-${year} ${hour}:${minute}`;

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
                title: `${title}  ${fullDate}`,
                ...styles,
                headerRight: () => <HbButtonComponent />,
              }}
            />
            <Stack.Screen
              name="Users"
              component={UsersScreen}
              options={{
                ...styles,
                title: 'Lista de Usuarios',
                headerRight: () => <HbButtonComponent />,
              }}
            />
            <Stack.Screen
              name="UserDetail"
              component={UserDetailScreen}
              options={{
                ...styles,
                title: 'Detalle de Usuario',
                headerRight: () => <HbButtonComponent />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default NavigatorComponent;
