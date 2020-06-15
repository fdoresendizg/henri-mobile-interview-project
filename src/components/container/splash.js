import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const TIMEOUT_SECONDS = 1000;

export default class Splash extends Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, TIMEOUT_SECONDS);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 10, color: Colors.dark }}>Loading</Text>
      </View>
    );
  }
}