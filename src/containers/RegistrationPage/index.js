import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, TextInput, View, KeyboardAvoidingView, Image } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Container, Button, Text } from 'native-base';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ``,
      email: ``,
      password: ``
    }
  }

  handleSubmit() {
    const {
      name,
      email,
      password
    } = this.state;
    this.props.register(name, email, password);
  }

  render() {
    return (
      <LinearGradient
      colors={['#05E4F7', '#1887BF']}
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
            <Text style={{ color: '#39c1ef', paddingRight: 60 }}>Sign Up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button3}
            onPress={this.handleSubmit.bind(this)}>
            <FontAwesome name='facebook' size={30} style={styles.icon} color='#39c1ef' />
            <Text style={{ color: '#39c1ef', paddingRight: 60 }}>Sign Up with Facebook</Text>
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
            <Text style={{ color: '#39c1ef' }}>Sign Up with Email</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Text style={{ color: 'white', marginBottom: 10 }}>By creating an account, you agree to ParkLinq's Terms and Conditions</Text>
      </Container>
    </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (name, email, password) => {
      dispatch(register(name, email, password));
    }
  }
}

export default ConnectedRegistrationPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);

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
