// SplashScreen.js
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Services from '../Services.js/Services';



class Splash extends Component {
  componentDidMount() {
    // const formData = new URLSearchParams();
    // formData.append('grant_type', 'password');
    // formData.append('client_id', 'cloudservant');
    // formData.append('username', 'admin');
    // formData.append('password', 'admin1234');

    // Services.getInstance().refreshToken(formData).then((result)=>{
    //    console.log(JSON.stringify(result));
    //   })

    setTimeout(() => {

      this.props.navigation.navigate('Login'); // Navigate to the main screen
    }, 1000); // Adjust the delay as needed (2 seconds in this example)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/29591237.jpg')} // Replace with the path to your splash screen image
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;
