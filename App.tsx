import 'intl';
import 'intl/locale-data/jsonp/en';
import { store } from './src/store';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigators';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
