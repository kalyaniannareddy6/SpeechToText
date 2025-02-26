import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

import Otp from './Screens/Otp';

import 'react-native-gesture-handler';
import Speech from './Screens/Speech';
import Splash from './Screens/Splash';
import VoiceRecordingAndRecognition from './Screens/Record';





const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
       <Stack.Screen
          name="splash"
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
        />
        <Stack.Screen 
        name="otp" 
        component={Otp} />
      <Stack.Screen 
        name="record" 
        component={VoiceRecordingAndRecognition} />
        <Stack.Screen 
        name="voice" 
        component={Speech} />
      </Stack.Navigator>
    </NavigationContainer>
    
    )
  }
}

export default App