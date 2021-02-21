import React from 'react';
import {TouchableHighlight} from 'react-native';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';

import {actionCreators} from '../redux/controls/actions';

const styles = {
  bgContainer: {
    paddingRight: 15,
  },
  linesContainer: {
    paddingTop: 3,
  },
  hbLine: {
    paddingBottom: 3,
    marginBottom: 3,
    backgroundColor: '#fff',
    width: 20,
  },
};

const HbButtonComponent = () => {
  const dispatch = useDispatch();

  function hbButtonClick() {
    dispatch(actionCreators.toggleDrawer());
  }

  return (
    <View style={styles.bgContainer}>
      <TouchableHighlight onPress={hbButtonClick}>
        <View style={styles.linesContainer}>
          <View style={styles.hbLine} />
          <View style={styles.hbLine} />
          <View style={styles.hbLine} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default HbButtonComponent;
