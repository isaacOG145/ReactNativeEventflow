import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';  // Necesario para la navegación
import PublicStack from './src/components/navigation/PublicStack'; // Asegúrate de importar tu stack correctamente

export default function App() {
  // Aquí manejamos el estado de la sesión
  const [session, setSession] = useState(null);

  return (
    <NavigationContainer>
      <PublicStack setSession={setSession} />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
