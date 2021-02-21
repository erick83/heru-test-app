import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import DrawerComponent from '../components/drawer.component';

const style = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  detail: {
    fontWeight: '500',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
  },
});

const UserDetailScreen = ({route, navigation}) => {
  const {params} = route;
  return (
    <DrawerComponent navigation={navigation}>
      <SafeAreaView style={style.container}>
        <Text style={style.detail}>Name: {params.name}</Text>
        <Text style={style.detail}>Email: {params.email}</Text>
        <Text style={style.detail}>Phone: {params.phone}</Text>
        <Text style={style.detail}>
          Address: {params.address.street} {params.address.suite}{' '}
          {params.address.city}
        </Text>
        <Text style={style.detail}>Zip: {params.address.zipcode}</Text>
      </SafeAreaView>
    </DrawerComponent>
  );
};

export default UserDetailScreen;
