import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }

});
