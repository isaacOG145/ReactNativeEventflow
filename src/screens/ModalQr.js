import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // 👈 Siempre al principio

export default function ModalQR({ navigation }) {
  const qrData = 'https://mi-app.com/entrada/usuario123';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>QR de acceso</Text>

        <View style={styles.qrBox}>
          <QRCode value={qrData} size={200} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#f0f0f0', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  card: { 
    backgroundColor: 'white', 
    padding: 30, 
    borderRadius: 10, 
    alignItems: 'center',
    elevation: 5 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  qrBox: { 
    backgroundColor: '#FFF', 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: '#6200EE', 
    padding: 10, 
    borderRadius: 8 
  },
  buttonText: { 
    color: '#FFF', 
    textAlign: 'center', 
    fontSize: 16 
  },
});
