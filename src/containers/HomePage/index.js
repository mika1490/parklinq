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
        colors={['#3BCCF9', '#1887BF']}
        style={[styles.flex, styles.background]}
        start={[0, 0]}
        end={[1, 0]}
      >
        <Container style={[styles.flex]}>
          <Image
            source={require('../../assets/ParkLinq_logo_white.png')}
            style={{
              height: 70,
              width: 300,
              marginBottom: 75
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
    height: 50,
    margin: 10,
    width: 300,
    borderColor: `white`,
    borderWidth: 2,
    borderStyle: `solid`,
    borderRadius: 5
  },
  button1: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 50,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 5
  }
});


export default HomePage;