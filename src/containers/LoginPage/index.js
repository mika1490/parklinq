import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

// import Container from '../../components/container';

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
      // <Container navigation={this.props.navigation}>
      <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <Image source={require('../../../parklinq.png')}
            style={{ alignSelf: 'center',
            height: 350,
            width: 350,
            bottom: 120 }} />
            <View style={styles.inputSection}>
              <FontAwesome name='user' size={20} style={styles.icon} color='black' />
              <TextInput
                style={styles.input}
                placeholder='Email'
                autoCorrect={false}
                autoCapitalize={'none'}
                onChangeText={(email) => this.setState({ email })} />
            </View>
            <View style={styles.inputSection}>
              <Entypo name='key' size={20} style={styles.icon} color='black' />
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
              <Text style={{ color: `white` }}>Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      // </Container>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `black`
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '80%',
    backgroundColor: `lightgrey`,
    borderBottomWidth: 1,
    borderColor: 1,
    borderRadius: 10,
    marginBottom: 20
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
    marginTop: 10,
    height: 40,
    width: 250,
    borderWidth: 1,
    borderStyle: `solid`,
    backgroundColor: `powderblue`,
    borderRadius: 5
  }
});