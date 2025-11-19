import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Sensors from 'expo-sensors';

// Components
import SensorGraph from '../components/SensorGraph';
import StatusCard from '../components/StatusCard';
import MapPreview from '../components/MapPreview';

export default function DashboardScreen({ navigation }) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [status, setStatus] = useState('Normal');

  useEffect(() => {
    const subscription = Sensors.Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      
      // Simple accident detection logic (threshold based)
      const totalForce = Math.sqrt(
        Math.pow(accelerometerData.x, 2) + 
        Math.pow(accelerometerData.y, 2) + 
        Math.pow(accelerometerData.z, 2)
      );

      if (totalForce > 2.5) { // Threshold > 2.5G
        navigation.navigate('AccidentAlert');
      }
    });

    Sensors.Accelerometer.setUpdateInterval(100);

    return () => subscription && subscription.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Helmet</Text>
          <View style={styles.connectionStatus}>
            <Ionicons name="bluetooth" size={20} color="#3b82f6" />
            <Text style={styles.statusText}>Connected</Text>
          </View>
        </View>

        <StatusCard status={status} battery={85} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live G-Force</Text>
          <SensorGraph data={data} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Location</Text>
          <MapPreview />
        </View>

        <TouchableOpacity 
          style={styles.emergencyBtn}
          onPress={() => navigation.navigate('AccidentAlert')}
        >
          <Text style={styles.emergencyBtnText}>TEST EMERGENCY ALERT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  statusText: {
    color: '#1d4ed8',
    fontWeight: '600',
    fontSize: 12,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#374151',
  },
  emergencyBtn: {
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  emergencyBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
