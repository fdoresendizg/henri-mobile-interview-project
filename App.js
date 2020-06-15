import React from 'react'

import { Provider } from 'react-redux';

import AppContainer from './src/navigator';

import store from './src/utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App
