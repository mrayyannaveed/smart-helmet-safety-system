import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

export default function AccidentAlertScreen({ navigation }) {
  const [countdown, setCountdown] = useState(10);
  const [sound, setSound] = useState();

  useEffect(() => {
    let timer;
    
    // Start alarm sound and vibration
    const startAlarm = async () => {
      // In a real app, load and play a sound file
      // const { sound } = await Audio.Sound.createAsync(require('../../assets/alarm.mp3'));
      // setSound(sound);
      // await sound.playAsync();
      
      // Vibrate pattern
      Vibration.vibrate([1000, 1000, 1000], true);
    };

    startAlarm();

    // Countdown logic
    timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          sendEmergencyAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      Vibration.cancel();
      if (sound) sound.unloadAsync();
    };
  }, []);

  const sendEmergencyAlert = () => {
    // Logic to send SMS/Notification via Firebase
    console.log('Sending emergency alert to contacts...');
    alert('Emergency Alert Sent!');
    navigation.goBack();
  };

  const cancelAlert = () => {
    Vibration.cancel();
    if (sound) sound.stopAsync();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="warning" size={80} color="white" />
        <Text style={styles.title}>ACCIDENT DETECTED</Text>
        <Text style={styles.subtitle}>Sending alert in</Text>
        
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>{countdown}</Text>
        </View>

        <Text style={styles.description}>
          We detected a high impact. Emergency contacts will be notified with your location.
        </Text>

        <TouchableOpacity style={styles.cancelButton} onPress={cancelAlert}>
          <Text style={styles.cancelButtonText}>I'M OKAY - CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 10,
  },
  timerContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  cancelButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
  },
  cancelButtonText: {
    color: '#ef4444',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
