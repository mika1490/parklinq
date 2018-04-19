import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ``
    }
  }
  
  render() {
    return (
      // <Container navigation={this.props.navigation}>
        <View style={styles.container}>
          <Image source={require('../../../parklinq.png')}
            style={{ alignSelf: 'center',
            height: 350,
            width: 350,
            bottom: 220 }} />
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate(`Login`)}>
            {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
            <Text style={{ color: `lightgrey` }}>Login</Text>
            {/* </LinearGradient> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate(`Register`)}>
            <Text style={{ color: `white` }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 50
  },
  button1: {
  justifyContent: `center`,
  alignItems: `center`,
  height: 40,
  margin: 10,
  width: 250,
  borderColor: `lightgrey`,
  borderWidth: 2,
  borderStyle: `solid`,
  borderRadius: 5
  },
  button2: {
  justifyContent: `center`,
  alignItems: `center`,
  height: 40,
  margin: 10,
  width: 250,
  backgroundColor: `powderblue`,
  borderWidth: 1,
  borderStyle: `solid`,
  borderRadius: 5
  }
  });
  

export default HomePage;