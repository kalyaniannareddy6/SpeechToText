import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';





export class Login extends Component {
    constructor(props){
        super(props)
    }

    state={
        phone_number:"",
        password:"",
        error_mobile:false,
        error_password:false,
    }

    onPressLogin=()=>{
        if(this.state.phone_number==""){
            this.setState({
              error_mobile:true,
              error_password:false
            })
          }else if(this.state.password==""){
            this.setState({
              error_password:true,
              error_mobile:false,
            })
          }else{
            this.setState({
              error_mobile:false,
              error_password:false
            })
            //API Calling
            // const obj = {
            //     phone:"",
            //     password:"",
            //   }
            //   Services.getInstance().newLogin(obj).then((result)=>{
            //     console.log(result);
            //     if(result.status === true) {
            //     this.props.navigation.navigate('otp');
            //     }
            // })
            this.props.navigation.navigate('otp');
          }
        }

    onPressSignUp=()=>{
        this.props.navigation.navigate('signUp');
    }

    handleChange=(label,textData)=>{
        if(label=="mobile"){
          this.setState({
            phone_number:textData
          })
        }else if(label=="password"){
          this.setState({
            password:textData
          })
        }else{
    
        }
        console.log(textData);
      }


      componentDidMount = ()=>{
        this.checkUserLoginStatus();
      }
  
  
      async checkUserLoginStatus() {
        const otp = await AsyncStorage.getItem('otp');
      
        if (otp) {
          this.props.navigation.navigate('record')
        } else {
          this.props.navigation.navigate('Login')
        }
      }
    
 

  render() {
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
        <TextInput
        style={styles.inputText}
        value={this.state.phone_number}
        error={this.state.error_mobile}
        onChangeText={(text)=>{this.handleChange("mobile",text)}}
        placeholder="Phone Number"
        placeholderTextColor="#003f5c"
        keyboardType='numeric'
        maxLength={10}
        />
        </View>
        {this.state.error_mobile? 
        <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
        Enter Any 10 Digit Mobile Number
        </Text>:null}
        <View style={styles.inputView}>
        <TextInput
        style={styles.inputText}
        value={this.state.password}
        error={this.state.error_password}
        onChangeText={(text)=>{this.handleChange("password",text)}}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#003f5c"
       />
        </View>
        {this.state.error_password? 
        <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
        Enter Dummy Password
        </Text>:null}
        <TouchableOpacity
        onPress = {this.onPressLogin}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
        <Text style={styles.register}  onPress = {this.onPressSignUp}>Not a Member?  RegisterNow!</Text>
        </View>
        </SafeAreaView>
        );
    }
}

        const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#F1ECEB',
        alignItems: 'center',
        justifyContent: 'center',
        },
        title:{
        fontWeight: "bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom: 40,
        },
        inputView:{
        width:"80%",
        backgroundColor:"#3AB4BA",
        borderRadius:10,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        padding:20
        },
        inputText:{
        height:50,
        color:"white"
        },
        forgotAndSignUpText:{
        color:"white",
        fontSize:11
        },
        loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:10,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
        },
        register:{
        fontSize:15,
        color:"#fb5b5a",  
        marginTop:40 
        }
        });
    
        export default Login;