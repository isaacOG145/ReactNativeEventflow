import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RecoverPasswordScreen2({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Ingresar código" 
          value={code} 
          onChangeText={setCode} 
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('RecoverPassword3')}
        >
          <Text style={styles.buttonText}>Confirmar código</Text>
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
    marginBottom: 25,
    color: '#333'
  },
  input: { 
    width: '100%', 
    padding: 12,
    marginVertical: 10, 
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16
  },
  button: { 
    backgroundColor: '#6200EE', 
    padding: 14,
    borderRadius: 8,
    marginTop: 15,
    width: '100%'
  },
  buttonText: { 
    color: '#FFF', 
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  }
});