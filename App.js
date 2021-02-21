import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './src/redux/store';
import HomeScreen from './src/screens/home';
import UsersScreen from './src/screens/users';
import UserDetailScreen from './src/screens/user-detail';

const Stack = createStackNavigator();

const styles = {
  headerStyle: {
    backgroundColor: '#2d2c3c',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
};

const MyStack = () => {
  const title = 'Bienvenido';
  const d = new Date();
  const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getFullYear()}`;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: `${title} ${date}`,
              ...styles,
            }}
          />
          <Stack.Screen
            name="Users"
            component={UsersScreen}
            options={{...styles}}
          />
          <Stack.Screen
            name="UserDetail"
            component={UserDetailScreen}
            options={{...styles}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MyStack;
