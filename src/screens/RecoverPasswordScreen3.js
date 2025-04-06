import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function RecoverPasswordScreen3({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePasswordChange = () => {
    // Aquí iría la lógica de validación y cambio de contraseña
    setShowSuccessModal(true);
  };

  const closeModalAndRedirect = () => {
    setShowSuccessModal(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Nueva contraseña" 
          secureTextEntry 
          value={newPassword} 
          onChangeText={setNewPassword} 
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Confirmar nueva contraseña" 
          secureTextEntry 
          value={confirmPassword} 
          onChangeText={setConfirmPassword} 
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePasswordChange}
        >
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModalAndRedirect}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¡Tu contraseña ha sido cambiada correctamente!</Text>
            <TouchableOpacity 
              style={styles.modalButton}
              onPress={closeModalAndRedirect}
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
  // ... (mantén todos los estilos anteriores iguales)
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center'
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  modalButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    width: '100%'
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },
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
     fontSize: 16 }
   });
