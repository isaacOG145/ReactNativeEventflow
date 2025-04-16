import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BlueButton from '../components/BlueButton';
import InputComponent from '../components/InputComponent';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar sesión</Text>

        <InputComponent
          type="email"
          
          label="Correo electrónico"
          required
          
          placeholder="ejemplo@correo.com"
          maxLength={50}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingresar contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <BlueButton onPress={() => navigation.navigate('Home')}>
          Iniciar sesión
        </BlueButton>

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('RecoverPassword1')}
        >
          <Text style={styles.link}>¿Has olvidado tu contraseña?</Text>
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
    backgroundColor: '#f0f0f0'
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
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
  },
  linkContainer: {
    marginTop: 20,
    alignSelf: 'center'
  },
  link: {
    color: '#6200EE',
    fontWeight: '500',
    textDecorationLine: 'underline'
  }
});