import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './src/redux/store';
import HomeScreen from './src/screens/home';
import UsersScreen from './src/screens/users';
import UserDetailScreen from './src/screens/user-detail';

const Stack = createStackNavigator();

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
            options={{title: `${title} ${date}`}}
          />
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MyStack;
