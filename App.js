import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import NavigatorComponent from './src/components/navigator.component';

const MyStack = () => {
  return (
    <Provider store={store}>
      <NavigatorComponent />
    </Provider>
  );
};

export default MyStack;
