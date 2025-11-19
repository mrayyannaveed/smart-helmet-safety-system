// This is a shared configuration file for both Web and Mobile
// In a real app, you would replace these with your actual Firebase config keys

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "mock-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "smart-helmet.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL || "https://smart-helmet.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "smart-helmet",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "smart-helmet.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef",
};

// Mock service for the preview environment since we can't connect to real Firebase
export const mockHelmetData: HelmetStatus = {
  id: "HELMET_001",
  status: "Normal",
  batteryLevel: 85,
  isWifiConnected: true,
  isBleConnected: true,
  lastUpdate: Date.now(),
  location: {
    lat: 37.7749,
    lng: -122.4194
  }
};
