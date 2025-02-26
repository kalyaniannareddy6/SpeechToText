
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
 });

const Screen = () => {

 const [Utoken, setUtoken] = useState('');


useEffect (()=>{
  registerForPushNotificationsAsync();
},[])



async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo push token:", token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
 
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  setUtoken(token);
  return token;
 }




 async function sendPushNotification(expoPushToken) {
  console.log("Helloo")
  const message = {
    to: Utoken,
    sound: 'default',
    title: 'Hi, Greetings',
    body: 'Welcome to our app',
    data: { testData: 'test data' },
  };
 
  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
 }



  return (
    <View>
      <Text>For Push Notifications Click on this Button</Text>
      <View style={{margin:50}}>
      <Button
        title="Send Push Notification"
        onPress={sendPushNotification}
      />
      </View>
     {/* <Text selectable={true}>{Utoken}</Text> */}
    </View>
  );
};

export default Screen;
















































