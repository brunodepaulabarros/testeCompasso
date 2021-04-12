import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../App';
import storeConfig from '../services/redux/storeConfig';

const Store = storeConfig();
test('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={Store}>
      <App />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
