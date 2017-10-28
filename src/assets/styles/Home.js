import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  intro: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeItems: {
    flexDirection: 'row',
    width: width / 2,
    height: height / 10,
    alignItems: 'center',
    borderWidth: 1,
    margin: 15,
    marginLeft: width / 8,
  }

});
