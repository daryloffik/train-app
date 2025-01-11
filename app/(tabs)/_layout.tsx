import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Text, View, StyleSheet, Image } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        header: () => (
            <View style={{ backgroundColor: '#ffffff', padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
            </View>
          ),
          
      tabBarActiveTintColor: '#bea9e0',
      headerStyle: {
        //backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      //headerTintColor: '#fff',
      tabBarStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#ffffff', // Couleur de fond de la barre
        borderTopWidth: 0, // Supprime la bordure supérieure (iOS/Android)
      },
      
      
    }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home',
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="playlist" options={{ title: 'Playlist',
      header: () => ( <View style={{ backgroundColor: '#ffffff', padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Playlist</Text>
      </View> ),
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'musical-notes-outline' : 'musical-notes'} color={color} size={24}/>
        ),
       }} />
    </Tabs>
  );
}
