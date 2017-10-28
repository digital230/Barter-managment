import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../assets/styles/Home';
import CommonStyles from '../assets/styles/Common';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    return (
      <LinearGradient
      colors={['#1B5E20', '#4CAF50', '#C8E6C9']}
      style={styles.container}
      >
      <TouchableOpacity>
        <Icon name="lock" size={30} color="#4ac6f7" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>scan id card</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Scan IMEI</Text>
      </TouchableOpacity>

      </LinearGradient>
    );
  }
}
