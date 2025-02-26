
import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import Voice from '@react-native-voice/voice';
import Screen from './Speech';


const AudioRecorder = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState(null);
  const [path, setPath] = useState('');
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    const askPermissions = async () => {
      const { status } = await Permissions.askAsync(
        Permissions.AUDIO_RECORDING,
        Permissions.MEDIA_LIBRARY,
        Permissions.NOTIFICATIONS,
      );
      if (status !== 'granted') {
        console.error('Permission to write to media library denied'); 
        }
    };
    askPermissions();
    

  }, []);

  const startRecording = async () => {
    try {
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      setIsRecording(true);
     
      
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    try {
      await recording.stopAndUnloadAsync();
      const audioUri = recording.getURI();
      setRecording(null);
      setIsRecording(false);
      setAudioUri(audioUri);
      saveAudio(audioUri);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  const saveAudio = async (audioUri) => {
    try {
      const fileName = 'recorded_audio.mp3';
      const audioDirectory = `${FileSystem.documentDirectory}Audio/`;
      const destinationUri = audioDirectory + fileName;
      await FileSystem.makeDirectoryAsync(audioDirectory, { intermediates: true });
      await FileSystem.moveAsync({ from: audioUri, to: destinationUri });
      await MediaLibrary.createAssetAsync(destinationUri);
      setPath(audioDirectory + fileName);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
    
        return () => {
          Voice.destroy().then(Voice.removeAllListeners);
        }
      }, []);

  const navigateToVoice = () => {
    navigation.navigate('voice');
  };

  const startSpeechToText = () => {
    Voice.start("en-NZ");
    setStarted(true);
  };

  const stopSpeechToText = () => {
    Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 50 }}>
        <Text>For Audio Recording</Text>
        <Button
          title={isRecording ? 'Stop Recording' : 'Start Recording'}
          onPress={isRecording ? stopRecording : startRecording}
        />
        {audioUri && (
          <View style={{ margin: 20 }}>
            <Text style={{ color: 'green' }}>{path}</Text>
            <Text style={{ color: 'green' }}>Done with Recording</Text>
          </View>
        )}
        <Text style={{marginTop:50}}>For Speech to text</Text>
        {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
        {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
       {results.map((result, index) => <Text key={index}>{result}</Text>)}
       <View style={{marginTop:50}}>
          <Screen/>

        {/* <Button title="Done" onPress={navigateToVoice}  /> */}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AudioRecorder;



