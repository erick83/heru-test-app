/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from '../redux/users/actions';

const UsersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.data);
  React.useEffect(() => {
    dispatch(actionCreators.getUsers());
  }, []);

  function buttonHandler(user) {
    return () => {
      navigation.navigate('UserDetail', user);
    };
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Users List</Text>
        {users &&
          users.map((user, key) => (
            <Pressable key={key} onPress={buttonHandler(user)}>
              <Text>{user.name}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsersScreen;
