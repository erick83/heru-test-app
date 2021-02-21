import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';

const UserDetailScreen = ({route}) => {
  const {params} = route;
  return (
    <SafeAreaView>
      <Text>Name: {params.name}</Text>
      <Text>Email: {params.email}</Text>
      <Text>Phone: {params.phone}</Text>
      <Text>
        Address: {params.address.street} {params.address.suite}{' '}
        {params.address.city}
      </Text>
      <Text>Zip: {params.address.zipcode}</Text>
    </SafeAreaView>
  );
};

export default UserDetailScreen;
