# Smart Helmet Safety System

A complete full-stack solution for smart helmet monitoring, accident detection, and ride analytics.

## Project Structure

- **/app**: Next.js Web Dashboard (Admin/User Portal)
- **/mobile-app**: React Native Mobile App Source Code (Android/iOS)
- **/lib**: Shared utilities and types

## 🚀 Getting Started

### Web Dashboard (Next.js)

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
3. Open [http://localhost:3000](http://localhost:3000)

### Mobile App (React Native)

The mobile app source code is located in the `mobile-app` directory. To run it:

1. Navigate to the mobile directory (you may need to move it to a separate folder outside this Next.js project for best results):
   \`\`\`bash
   cd mobile-app
   \`\`\`
2. Install dependencies (requires Node.js & Expo CLI):
   \`\`\`bash
   npm install
   \`\`\`
3. Start the Expo server:
   \`\`\`bash
   npx expo start
   \`\`\`
4. Scan the QR code with the Expo Go app on your phone.

## 🛠 Configuration

### Firebase Setup

1. Create a project at [firebase.google.com](https://firebase.google.com)
2. Enable **Authentication** (Email/Password)
3. Enable **Firestore Database**
4. Enable **Realtime Database**
5. Copy your config keys to `lib/firebase.ts` (Web) and `mobile-app/src/services/firebaseService.js` (Mobile)

## 📱 Features

- **Real-time Monitoring**: Live G-force data and helmet status
- **Accident Detection**: Auto-detects high impact and triggers alerts
- **Emergency Alerts**: SMS/Push notifications to contacts
- **Ride Analytics**: History, maps, and safety scores
