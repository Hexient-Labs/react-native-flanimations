import React from 'react'
import { Provider } from 'mobx-react'
import { AppRegistry } from 'react-native'
import stores from './src/stores'
import App from './src/App'

const Root = () => (
  <Provider {...stores}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('Flanimations', () => Root)
