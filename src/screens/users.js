/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DrawerComponent from '../components/drawer.component';
import {actionCreators} from '../redux/users/actions';

const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
  },
  list: {
    fontWeight: '500',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    fontSize: 12,
  },
});

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
    <DrawerComponent navigation={navigation}>
      <SafeAreaView>
        <ScrollView>
          <Text style={style.title}>Users List</Text>
          {users &&
            users.map((user, key) => (
              <TouchableHighlight
                key={key}
                onPress={buttonHandler(user)}
                underlayColor="#ccc"
                activeOpacity={0.6}>
                <Text style={style.list}>{user.name}</Text>
              </TouchableHighlight>
            ))}
        </ScrollView>
      </SafeAreaView>
    </DrawerComponent>
  );
};

export default UsersScreen;
