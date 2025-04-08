import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

export default function Sidebar({ visible, onClose, navigation }) {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.sidebar}>
              {/* Encabezado */}
              <View style={styles.header}>
                <Text style={styles.profileTitle}>Nombre de usuario</Text>
                <Text style={styles.email}>correo@email.com</Text>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Text style={styles.closeIcon}>×</Text>
                </TouchableOpacity>
              </View>

              {/* Menú principal */}
              <View style={styles.menuContainer}>
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={() => {
                    navigation.navigate('Perfil');
                    onClose();
                  }}>
                  <Text style={styles.menuText}>👤 Ver Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={() => {
                    navigation.navigate('EditarPerfil');
                    onClose();
                  }}>
                  <Text style={styles.menuText}>✏️ Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={() => {
                    navigation.navigate('ChangePasswordScreen');
                    onClose();
                  }}>
                  <Text style={styles.menuText}>🔑 Cambiar Contraseña</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.menuItem, styles.logout]}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={[styles.menuText, styles.logoutText]}>🚪 Cerrar Sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
  },
  sidebar: {
    width: '75%',
    height: '100%',
    backgroundColor: 'white',
    marginLeft: '25%',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 25,
    paddingBottom: 35,
    borderBottomRightRadius: 20,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  email: {
    color: '#e0e0e0',
    fontSize: 14,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    padding: 5,
  },
  closeIcon: {
    fontSize: 28,
    color: 'white',
    fontWeight: '200',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  logout: {
    marginTop: 30,
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#ff4444',
    fontWeight: '500',
  },
});