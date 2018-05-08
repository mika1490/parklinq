import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Container, Button, Text } from 'native-base';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <LinearGradient
        colors={['#05E4F7', '#0475B6']}
        style={[styles.flex, styles.background]}
        start={[0, 0]}
        end={[1, 0]}
      >
        <Container style={[styles.flex]}>
          <Image
            source={require('../../assets/ParkLinq_Logo.png')}
            style={{
              marginTop: 100,
              height: 100,
              width: 300,
              marginBottom: 15
            }}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate(`Register`)}>
            <Text style={{ color: '#39c1ef' }}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate(`Login`)}>
            <Text style={{ color: `white` }}>Log In</Text>
          </TouchableOpacity>
        </Container>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  button2: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    borderColor: `white`,
    borderWidth: 2,
    borderStyle: `solid`,
    borderRadius: 30
  },
  button1: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  }
});


export default HomePage;