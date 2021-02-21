/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../redux/users/actions'

const UsersScreen = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actionCreators.getUsers());
  }, []);

  return <Text>Hola</Text>;
};

export default UsersScreen;
