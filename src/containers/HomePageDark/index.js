import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
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
            marginBottom: 50
          }}
          resizeMode="contain"
        />
        <LinearGradient
          colors={['#39c1ef', '#12729b']}
          style={styles.gradient}
          start={[0,0]}
          end={[1,0]}
        >
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText2}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={['#39c1ef', '#12729b']}
          style={styles.gradient}
          start={[0,0]}
          end={[1,0]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
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
  buttonText: {
    color: '#222222',
    fontWeight: 'bold'
  },
  buttonText2: {
    color: '#39c1ef',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#39c1ef',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 300,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#39c1ef',
    marginBottom: 15
  },
  buttonContainer: {
    backgroundColor: '#222222',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 296,
  },
  gradient: {
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 15
  }
});

export default HomePageDark;