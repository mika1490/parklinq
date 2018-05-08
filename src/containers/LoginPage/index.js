import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, TextInput, View, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { Container, Button, Text } from 'native-base';
import SvgUri from 'react-native-svg-uri';
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
        colors={['#05E4F7', '#0475B6']}
        style={[styles.flex, styles.background]}
        start={[0, 0]}
        end={[1, 0]}
      >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.navigate(`Home`)}>
        <SvgUri width="30" height="30" source={require('../../assets/left-arrow.svg')} />
      </TouchableOpacity>
      <TouchableOpacity
              style={styles.button2}
              onPress={this.handleSubmit.bind(this)}>
              <FontAwesome name='google' size={30} style={styles.icon} color='#39c1ef' />
              <Text style={{ color: '#39c1ef', paddingRight: 60 }}>Log In with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button3}
              onPress={this.handleSubmit.bind(this)}>
              <FontAwesome name='facebook' size={30} style={styles.icon} color='#39c1ef' />
              <Text style={{ color: '#39c1ef', paddingRight: 60 }}>Log In with Facebook</Text>
            </TouchableOpacity>
            <Text style={styles.textRegister}> ───────  Or  ───────</Text>
            {/* <View style = {styles.lineStyle} /> */}
      <Container style={[styles.flex]}>
         
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
          <Text style={{ color: 'white', marginBottom: 10 }}>Forgot Password?</Text>
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
    height: 45,
    margin: 10,
    width: 300,
    borderColor: `white`,
    borderWidth: 2,
    borderStyle: `solid`,
    borderRadius: 30
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
    height: 45,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  },
  button2: {
    flexDirection: 'row',
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    marginTop: 100,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  },
  button3: {
    flexDirection: 'row',
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    marginTop: 30,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  },
  textRegister:{
    color: 'white',
    marginTop: 40
},
  backButton: {
    alignSelf: `flex-start`,
    justifyContent: `center`,
    alignItems: `center`,
    height: 50,
    marginTop: 20,
    width: 50,
    borderStyle: `solid`,
    borderRadius: 30
  }
});