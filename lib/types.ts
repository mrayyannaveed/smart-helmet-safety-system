export interface SensorData {
  x: number
  y: number
  z: number
  timestamp: number
}

export interface HelmetStatus {
  id: string
  status: 'Normal' | 'Accident' | 'Disconnected'
  batteryLevel: number
  isWifiConnected: boolean
  isBleConnected: boolean
  lastUpdate: number
  location: {
    lat: number
    lng: number
  }
}

export interface RideSession {
  id: string
  startTime: number
  endTime: number
  maxSpeed: number
  avgSpeed: number
  distance: number
  safetyScore: number
  route: { lat: number; lng: number }[]
}

export interface Contact {
  id: string
  name: string
  phone: string
  email: string
  isEmergency: boolean
}
