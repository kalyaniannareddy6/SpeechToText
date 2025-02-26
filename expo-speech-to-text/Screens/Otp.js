import { Text, TextInput, TouchableOpacity, View,StyleSheet, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Otp extends Component {
    constructor(props){
        super(props)
    }

    state={
      otp:"",
      error_otp:false,
    }



    handleChange=(label,textData)=>{
      if(label=="otp"){
        this.setState({
          otp:textData
        })
      }else{
  
      }
      console.log(textData);
    }

    Submit=()=>{
      if(this.state.otp==""){
        this.setState({
          error_otp:true
        })
      }else{
        this.setState({
          error_otp:false,
        })
        AsyncStorage.setItem('otp', this.state.otp);
        this.props.navigation.navigate('record')
      }
        
    }

  //   onPressLogin=()=>{
  //     this.props.navigation.navigate('Login');
  // }

  render() {
    return(
      <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <Text style={styles.header}>Enter OTP</Text>
    <View style={styles.inputView}>
        <TextInput
        style={styles.input}
        value={this.state.otp}
        error={this.state.error_otp}
        onChangeText={(text)=>{this.handleChange("otp",text)}}
        placeholder="Enter OTP"
        placeholderTextColor="#003f5c"
        keyboardType='numeric'
        maxLength={6}
        />
        </View>
        {this.state.error_otp? 
        <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
        Enter Otp
        </Text>:null}
    <TouchableOpacity style={styles.button} onPress={this.Submit}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    <Text style={styles.register} >Enter any 6 digit Number</Text>

  </View>
  </SafeAreaView>
);
};
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
header: {
  fontSize: 24,
  marginBottom: 20,
},
input: {
  width: 200,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  padding: 8,
  marginBottom: 10,
},
button: {
  backgroundColor: '#fb5b5a',
  padding: 10,
  borderRadius: 5,
 
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
register:{
  fontSize:18,
  color:"#3AB4BA",  
  marginTop:40 
  }
});

export default Otp;