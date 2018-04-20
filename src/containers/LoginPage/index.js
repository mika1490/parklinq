import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, TextInput, View, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { Container, Button, Text } from 'native-base';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``
    }
  }
  handleSubmit() {
    const {
      email,
      password
    } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (

      <LinearGradient
        colors={['#00ced1', '#39c1ef']}
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
          <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputSection}>
              <FontAwesome name='user' size={20} style={styles.icon} color='white' />
              <TextInput
                style={styles.input}
                placeholder='Email'
                autoCorrect={false}
                autoCapitalize={'none'}
                onChangeText={(email) => this.setState({ email })} />
            </View>
            <View style={styles.inputSection}>
              <Entypo name='key' size={20} style={styles.icon} color='white' />
              <TextInput
                style={{ flex: 1 }}
                placeholder='Password'
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })} />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}>
              <Text style={{ color: '#39c1ef' }}>Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </Container>
      </LinearGradient>

    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.test.test
  }
}

export default ConnectedLoginPage = connect(
  mapStateToProps
)(LoginPage);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  inputSection: {
    flexDirection: 'row',
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
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingBottom: 10,
  },
  icon: {
    padding: 10
  },
  button: {
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