import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function LogoutModal({ visible, onClose, onLogout }) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.message}>¿Estás seguro de salir?</Text>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  cancelButton: {
    backgroundColor: '#0044CC',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  cancelText: {
    color: 'white',
    fontSize: 16
  },
  logoutButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  logoutText: {
    color: 'white',
    fontSize: 16
  }
});
