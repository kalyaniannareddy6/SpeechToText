import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
const gender = ["Male", "Female" ,"Others"];
const cities = ["Hyderabad", "Banglore" ,"Chennai"];
const states = ["Telangana", "Andhra Pradesh" ,"Tamil Nadu"]

export class SignUp extends Component {
    constructor(props){
        super(props)
    }

    state={
        firstname:"",
        email:"",
        phone_number:"",
        password:"",
        dob:"",
        lastname:"",
        line1:"",
        line2:"",
        zip:"",
        gender:"",
        state:"",
        s_line1:"",
        s_line2:"",
        username:"",
        city:"",
        error_firstname:false,
        error_lastname:false,
        error_email:false,
        error_mobile:false,
        error_password:false,
        error_dob:false,
        error_line1:false,
        error_line2:false,
        error_zip:false,
        error_s_line1:false,
        error_s_line2:false,
        error_state:false,
        error_gender:false,
        error_username:false,
        error_city:false,

    }

    handleChange=(label,textData)=>{
        if(label=="firstname"){
          this.setState({
            firstname:textData
          })
        } else if(label=="lastname"){
          this.setState({
            lastname:textData
          })
        } else if(label=="username"){
          this.setState({
            username:textData
          })
        } else if(label=="dob"){
          this.setState({
            dob:textData
          })
        } else if(label=="gender"){
          this.setState({
            gender:textData
          })
        }else if(label=="mobile"){
            this.setState({
              phone_number:textData
            })
        }else if(label=="email"){
            this.setState({
              email:textData
            })
        }else if(label=="password"){
          this.setState({
            password:textData
          })
        }else if(label=="line1"){
          this.setState({
            line1:textData
          })
        }else if(label=="line2"){
          this.setState({
            line2:textData
          })
        }else if(label=="sline1"){
          this.setState({
            s_line1:textData
          })
        }else if(label=="sline2"){
          this.setState({
            s_line2:textData
          })
        }else if(label=="city"){
          this.setState({
            city:textData
          })
        }else if(label=="state"){
          this.setState({
            state:textData
          })
        }
        
        else{
    
        }
        console.log(textData);
      }
    

    onPressOtp=()=>{
        // if(this.state.firstname==""){
        //     this.setState({
        //       error_firstname:true,
        //       error_lastname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.lastname==""){
        //     this.setState({
        //       error_lastname:true,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.username==""){
        //     this.setState({
        //       error_username:true,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_lastname:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.dob==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:true,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.gender==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:true,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:true,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.phone_number==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:true,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.email==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:true,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.password==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:true,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.line1==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:true,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.line2==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:true,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.s_line1==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:true,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.s_line2==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:true,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.city==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:true,
        //     })
        //   }else if(this.state.state==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:true,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else if(this.state.zip==""){
        //     this.setState({
        //       error_lastname:false,
        //       error_firstname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:true,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
        //   }else{
        //      this.setState({
        //       error_firstname:false,
        //       error_lastname:false,
        //       error_email:false,
        //       error_mobile:false,
        //       error_password:false,
        //       error_dob:false,
        //       error_line1:false,
        //       error_line2:false,
        //       error_zip:false,
        //       error_s_line1:false,
        //       error_s_line2:false,
        //       error_state:false,
        //       error_gender:false,
        //       error_username:false,
        //       error_city:false,
        //     })
            

        //     // const obj={
        //     //   dob : this.state.dob,
        //     //   email : this.state.email,
        //     //   firstName : this.state.firstname,
        //     //   gender : this.state.gender,
        //     //   lastName : this.state.lastname,
        //     //   pa_city : this.state.city,
        //     //   pa_line1 : this.state.line1,
        //     //   pa_line2 : this.state.line2,
        //     //   pa_state : this.state.state,
        //     //   pa_zip : this.state.zip,
        //     //   password : this.state.password,
        //     //   phone : this.state.phone_number,
        //     //   sa_line1 : this.state.s_line1,
        //     //   sa_line2 : this.state.s_line2,
        //     //   userName : this.state.username,
        //     // }
        //     // Services.getInstance().newRegistration(obj).then((result)=>{
        //     //   console.log(result);
        //     // })



            this.props.navigation.navigate('otp');
          // }
        
    }

    onPressLogin=()=>{
        this.props.navigation.navigate('Login');
    }
    
 

  render() {
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
        {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         style={{flex:1}}> */}
        <View style={styles.container}>
            
            <Text style={styles.title}>SignUp</Text>

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.name}
              error={this.state.error_name}
              onChangeText={(text)=>{this.handleChange("firstname",text)}}
              placeholder="First Name"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_firstname? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter First Name
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.name}
              error={this.state.error_name}
              onChangeText={(text)=>{this.handleChange("lastname",text)}}
              placeholder="Last Name"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_lastname? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter Last Name
            </Text>:null}

            <View style={styles.inputView}>
             <TextInput
              style={styles.inputText}
              value={this.state.username}
              error={this.state.error_username}
              onChangeText={(text)=>{this.handleChange("username",text)}}
              placeholder="UserName"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_username? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter Username
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.dob}
              error={this.state.error_dob}
              onChangeText={(text)=>{this.handleChange("dob",text)}}
              placeholder="DOB"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_dob? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter Date of Birth
            </Text>:null}

          {/* gender */}
          <View style={styles.inputitem}>
            <Text>Gender</Text>
          <SelectDropdown
           
              data={gender}
              onSelect={(selectedItem, index)  => {
                this.setState({
                  gender : selectedItem
                },()=>console.log(this.state.gender))
                
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              buttonStyle={styles.lnslct}
              buttonTextStyle={styles.insclttxt}
              dropdownIconPosition={'right'}
            />
          </View>

      


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
            Enter Mobile Number
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.email}
              error={this.state.error_email}
              onChangeText={(text)=>{this.handleChange("email",text)}}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_email? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter Email
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
            Enter Password
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.line1}
              error={this.state.error_line1}
              onChangeText={(text)=>{this.handleChange("line1",text)}}
              placeholder="P Line 1"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_line1? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter Line 1
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.line2}
              error={this.state.error_line2}
              onChangeText={(text)=>{this.handleChange("line2",text)}}
              placeholder="P Line 2"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_line2? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter Line 2
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.s_line1}
              error={this.state.error_s_line1}
              onChangeText={(text)=>{this.handleChange("sline1",text)}}
              placeholder="S Line 1"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_line2? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter S Line 1
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.s_line2}
              error={this.state.error_s_line2}
              onChangeText={(text)=>{this.handleChange("sline2",text)}}
              placeholder="S Line 2"
              placeholderTextColor="#003f5c"
              />
            </View>
            {this.state.error_line2? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter S Line 2
            </Text>:null}

            {/* city */}
            <View style={styles.inputitem}>
            <Text>City</Text>
          <SelectDropdown
              data={cities}
              onSelect={(selectedItem, index)  => {
                this.setState({
                  cities : selectedItem
                },()=>console.log(this.state.cities))
                
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              buttonStyle={styles.lnslct}
              buttonTextStyle={styles.insclttxt}
              dropdownIconPosition={'right'}
            />
          </View>

            {/* state */}
            <View style={styles.inputitem}>
            <Text>State</Text>
          <SelectDropdown
              data={states}
              onSelect={(selectedItem, index)  => {
                this.setState({
                  state : selectedItem
                },()=>console.log(this.state.state))
                
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              buttonStyle={styles.lnslct}
              buttonTextStyle={styles.insclttxt}
              dropdownIconPosition={'right'}
            />
          </View>

            

          <View style={styles.inputView}>
              <TextInput
              style={styles.inputText}
              value={this.state.zip}
              error={this.state.error_zip}
              onChangeText={(text)=>{this.handleChange("zip",text)}}
              placeholder="Zip Code"
              placeholderTextColor="#003f5c"
              keyboardType='numeric'
              maxLength={6}
              />
            </View>
            {this.state.error_zip? 
            <Text type="error" style={{fontSize:14,marginBottom:10,color:'red'}}>
            Enter ZipCode
            </Text>:null}

            <TouchableOpacity
            onPress = {this.onPressOtp}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>SignUp </Text>
            </TouchableOpacity>
            <Text style={styles.register}  onPress = {this.onPressLogin}>Already Registered?  Login Here!</Text>
            </View>
        
        {/* </KeyboardAvoidingView> */}
        </ScrollView>
        </SafeAreaView>
      
        );
    }
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
        flexDirection:'column',
        height:'100%',
        backgroundColor: '#F1ECEB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:30,
        },
        title:{
        fontWeight: "bold",
        fontSize:30,
        color:"#fb5b5a",
        marginBottom: 20,
        },
        inputView:{
        width:"80%",
        backgroundColor:"#3AB4BA",
        borderRadius:10,
        height:40,
        marginBottom:7,
        justifyContent:"center",
        padding:10
        },
        inputText:{
        height:40,
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
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        marginBottom:5
        },
        register:{
        fontSize:15,
        color:"#fb5b5a",  
        marginTop:30 
        },
        lnslct:{
          width:"80%",
          backgroundColor:"#3AB4BA",
          borderRadius:10,
          height:40,
          marginBottom:7,
          justifyContent:"center",
          padding:10
        },
        insclttxt:{
          color:'#000',
          fontSize:12,
          textAlign:'left',
          inputText:{
          height:40,
          color:"white"
          },
            }
        });
    
        export default SignUp;