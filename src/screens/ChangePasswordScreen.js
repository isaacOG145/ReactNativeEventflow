import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function ChangePasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePasswordChange = () => {
    // Validaciones básicas
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Simular cambio exitoso de contraseña
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cambiar contraseña</Text>
        
        <Text style={styles.label}>Nueva contraseña*</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu nueva contraseña"
        />
        
        <Text style={styles.label}>Confirmar nueva contraseña*</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirma tu nueva contraseña"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handlePasswordChange}
        >
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de confirmación */}
      <Modal
        transparent
        visible={showSuccessModal}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¡Contraseña actualizada!</Text>
            <Text style={styles.modalText}>Tu contraseña se ha cambiado correctamente</Text>
            
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    padding: 20,
    elevation: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 14
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: '100%'
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600'
  },
  // Estilos para el modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    width: '80%',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 10
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555'
  },
  modalButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
}); 