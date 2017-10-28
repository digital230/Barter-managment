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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        <View>
          <View style={styles.intro}>
            <Text style={CommonStyles.fontSize}>Welcome to Barter Managment</Text>
          </View>
          <TouchableOpacity style={styles.homeItems}>
            <MaterialIcons name="list" size={40} color="#E8F5E9" />
            <Text style={CommonStyles.fontSize}>List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeItems}>
            <MaterialIcons name="credit-card" size={40} color="#E8F5E9" />
            <Text style={CommonStyles.fontSize}>Scan id card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeItems}>
            <MaterialIcons name="phone-android" size={40} color="#E8F5E9" />
            <Text style={CommonStyles.fontSize}>Scan IMEI</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
