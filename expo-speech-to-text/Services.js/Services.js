import { React, Component } from "react";
import { Text, View } from "react-native";
import { encode as base64Encode } from 'base-64';

let baseURL = `https://134.122.66.203:8443/`;


let Username = 'cloudservant';
let Password = 'cloudservant1234';
let basicAuth = 'Basic ' + base64Encode(Username + ':' + Password);

export class Services extends Component{


static myInstance = null;

static getInstance() {  
    return new Services();
}

async baseURL() {
    return baseURL;
}





// async refreshToken(obj) {
  
//     try {
//         let response = await fetch(
//             baseURL + (`oauth/token`),
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                         'Access-Control-Allow-Origin': '*',
//                         'Authorization': basicAuth,
//                         },
//                 body:  obj.toString()
//         }
//         )

//         let responseJson = await response.json();
//         return responseJson;
//     } catch (error) {
//         console.error("API Error" + error);
//         return error;
//     }
// }



// async newRegistration(obj) {
  
//     try {
//         let response = await fetch(
//             baseURL + (`user/registrations`),
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                         'Access-Control-Allow-Origin': '*',
//                         'Authorization': basicAuth,
//                         },
//                 body:  obj.toString()
//         }
//         )
        
//         let responseJson = await response.json();
//         return responseJson;
//     } catch (error) {
//         console.error("API Error" + error);
//         return error;
//     }
// }



// async OTP() {
  
//     try {
//         let response = await fetch(
//             'https://134.122.66.203:8443/user/registrations/107/getOTP',
//             {
//                 method: 'GET',
//                 headers: {
//                         'Authorization': 'Bearer 14e7e4a1-3f2e-43ed-b4a0-ec4f15157013',
//                         },
//         }
//         )
//         let responseJson = await response.json();
//         return response;
//     } catch (error) {
//         console.error("API Error" + error);
//         return error;
//     }
// }





    render() 
    
    {
return (
<View>
    <Text>Hello</Text>
</View>
)


    }
}

export default Services