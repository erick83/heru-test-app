import React from 'react';
import {Text} from 'react-native';

const TextWrapperComponent = (props) => {
  const styles = {fontFamily: 'Arial'};

  return (
    <Text {...props} style={[props.style, styles]}>
      {props.children}
    </Text>
  );
};

export default TextWrapperComponent;
