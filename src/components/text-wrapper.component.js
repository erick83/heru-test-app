import React from 'react';
import {Text} from 'react-native';

const styles = {fontFamily: 'Arial'};

const TextWrapperComponent = (props) => {
  return (
    <Text {...props} style={{...props.style, ...styles}}>
      {props.children}
    </Text>
  );
};

export default TextWrapperComponent;
