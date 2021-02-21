import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DrawerComponent from '../components/drawer.component';
import TextWrapperComponent from '../components/text-wrapper.component';
import Colors from '../colors';

const style = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
    backgroundColor: Colors.PAPER,
    height: '100%',
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
        <TextWrapperComponent style={style.detail}>
          Name: {params.name}
        </TextWrapperComponent>
        <TextWrapperComponent style={style.detail}>
          Email: {params.email}
        </TextWrapperComponent>
        <TextWrapperComponent style={style.detail}>
          Phone: {params.phone}
        </TextWrapperComponent>
        <TextWrapperComponent style={style.detail}>
          Address: {params.address.street} {params.address.suite}{' '}
          {params.address.city}
        </TextWrapperComponent>
        <TextWrapperComponent style={style.detail}>
          Zip: {params.address.zipcode}
        </TextWrapperComponent>
      </SafeAreaView>
    </DrawerComponent>
  );
};

export default UserDetailScreen;
