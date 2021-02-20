import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './src/redux/store';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Heru Test App'}}
          />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MyStack;
