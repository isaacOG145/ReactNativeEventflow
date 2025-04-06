import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavButton = ({ navigation, name, screen, icon }) => (
  <TouchableOpacity 
    style={styles.navItem} 
    onPress={() => navigation.navigate(screen)}
  >
    <Text style={styles.navIcon}>{icon}</Text>
    <Text style={styles.navText}>{name}</Text>
  </TouchableOpacity>
);

export default function DashboardUsuario({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Eventos Registrados</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feria de Ciencias 2024</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ModalQR')}
        >
          <Text style={styles.buttonText}>Ver QR de acceso</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('DetalleUsuario', {
            eventTitle: 'Feria de Ciencias 2024',
            eventDate: '12-06-2025',
            eventDescription: 'Descripción detallada del evento...',
            eventImages: [
              'https://cdn.www.gob.pe/uploads/document/file/5475160/871844-000137814m.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qEv9LWpzqiqfc47CisLasSv0RBq4hgVDOg&s'
            ]
          })}
        >
          <Text style={styles.buttonText}>Ver detalles del evento</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <NavButton navigation={navigation} name="Inicio" screen="Home" icon="🏠" />
        <NavButton navigation={navigation} name="Menú" screen="Menu" icon="📋" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f0f0', 
    padding: 20,
    paddingBottom: 60 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333'
  },
  button: { 
    backgroundColor: '#6200EE', 
    padding: 12,
    borderRadius: 8,
    marginVertical: 8
  },
  buttonText: { 
    color: '#FFF', 
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6200EE',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  navItem: {
    alignItems: 'center'
  },
  navIcon: {
    fontSize: 24,
    color: 'white'
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 2
  }
});