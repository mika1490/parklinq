import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { LinearGradient } from 'expo';

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
        colors={['#39c1ef', '#1b8ebe']}
        style={[styles.flex, styles.background]}
        start={[0,0]}
        end={[1,0]}
      >
        <Container style={[styles.flex]}>
          <Image
            source={require('../../assets/logo_white.png')}
            style={{
              height: 100,
              width: 300,
              marginBottom: 75
            }}
            resizeMode="contain"
          />
          <Button style={[styles.button]} block light>
            <Text style={[styles.buttonText]}>Create an Account</Text>
          </Button>
          <Button style={[styles.button]} block light>
            <Text style={[styles.buttonText]}>Log In</Text>
          </Button>
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
  background: {
    padding: 30
  },
  button: {
    marginBottom: 15
  },
  buttonText: {
    color: '#39c1ef',
    fontWeight: 'bold'
  }
});


export default HomePage;