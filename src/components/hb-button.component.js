import React, {useState, useEffect} from 'react';
import {TouchableHighlight, Animation} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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
  const [close, setclose] = useState(null);
  const show = useSelector((store) => store.controls.drawerShow);

  function hbButtonClick() {
    dispatch(actionCreators.toggleDrawer());
  }

  useEffect(() => {
    if (show) {
      setclose({
        top: {
          transform: [{rotate: '-45deg'}, {translateX: -2}, {translateY: 2}],
        },
        bottom: {
          transform: [{rotate: '45deg'}, {translateX: -2}, {translateY: -2}],
        },
        mid: {
          display: 'none',
        },
      });
    } else {
      setclose(null);
    }
  }, [show]);

  return (
    <View style={styles.bgContainer}>
      <TouchableHighlight onPress={hbButtonClick}>
        <View style={styles.linesContainer}>
          <View style={[styles.hbLine, close ? close.top : null]} />
          <View style={[styles.hbLine, close ? close.mid : null]} />
          <View style={[styles.hbLine, close ? close.bottom : null]} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default HbButtonComponent;
