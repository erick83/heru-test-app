import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, UsersScreen, UserDetailScreen} from '../screens';
import HbButtonComponent from './hb-button.component';

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
  const title = 'Bienvenido';
  const d = new Date();
  const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getFullYear()}`;

  return (
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
  );
};

export default NavigatorComponent;
