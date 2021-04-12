import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import storeConfig from './src/services/redux/storeConfig';
import { Provider } from 'react-redux';
import React from 'react';

const Store = storeConfig();
const Redux = () => (
    <Provider store={Store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
