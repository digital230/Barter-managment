import { StackNavigator } from 'react-navigation';
import Home from './src/pages/Home';

export default StackNavigator({
  Home: { screen: Home},
}, {
  headerMode: 'none',
});
