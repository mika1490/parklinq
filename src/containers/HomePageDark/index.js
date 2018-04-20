import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { LinearGradient } from 'expo';

class HomePageDark extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={[styles.flex, styles.background]}>
        <Image
          source={require('../../assets/logo_blue.png')}
          style={{
            height: 100,
            width: 300,
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
    backgroundColor: '#222222',
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

export default HomePageDark;