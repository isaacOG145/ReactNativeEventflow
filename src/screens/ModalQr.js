import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalQR({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>QR de acceso</Text>
        <Text>📷 [Aquí iría el QR]</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container: { flex: 1, backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  qrBox: { backgroundColor: '#FFF', padding: 50, borderRadius: 10, marginBottom: 20 },
  qrText: { fontSize: 18 },
  button: { backgroundColor: '#6200EE', padding: 10, borderRadius: 8 },
  buttonText: { color: '#FFF', textAlign: 'center', fontSize: 16 },
 });
