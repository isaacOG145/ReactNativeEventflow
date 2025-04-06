import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RecoverPasswordScreen1({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        
        <Text style={styles.subtitle}>Ingrese su usuario para enviar el código de verificación</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Usuario"
          placeholderTextColor="#999" 
          value={username} 
          onChangeText={setUsername} 
          autoCapitalize="none"
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('RecoverPassword2')}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>Enviar código</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25
  },
  input: { 
    width: '100%', 
    padding: 14,
    marginVertical: 10, 
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333'
  },
  button: { 
    backgroundColor: '#6200EE', 
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '100%'
  },
  buttonText: { 
    color: '#FFF', 
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  }
});