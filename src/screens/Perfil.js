import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      
      <View style={styles.profileCard}>
        <Text style={styles.label}>👤 Nombre completo:</Text>
        <Text style={styles.value}>Juan Pérez</Text>

        <Text style={styles.label}>📧 Correo electrónico:</Text>
        <Text style={styles.value}>juan.perez@email.com</Text>

        <Text style={styles.label}>📞 Teléfono:</Text>
        <Text style={styles.value}>+52 777 123 4567</Text>

        <Text style={styles.label}>♂️ Género:</Text>
        <Text style={styles.value}>Masculino</Text>

        <Text style={styles.label}>🏢 Ocupación:</Text>
        <Text style={styles.value}>Ingeniero de Software</Text>

        <Text style={styles.label}>📍 Ubicación:</Text>
        <Text style={styles.value}>Ciudad de México</Text>

        <Text style={styles.label}>📢 Medio de contacto preferido:</Text>
        <Text style={styles.value}>Correo electrónico</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    fontWeight: '500'
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  }
});