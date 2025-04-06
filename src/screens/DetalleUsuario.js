import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetalleUsuario({ route, navigation }) {
  // Recibir parámetros de la navegación
  const { eventTitle, eventDate, eventDescription, eventImages } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.title}>{eventTitle}</Text>
          
          {/* Galería de imágenes */}
          <ScrollView horizontal pagingEnabled>
            {eventImages.map((img, index) => (
              <Image 
                key={index}
                source={{ uri: img }}
                style={styles.image}
              />
            ))}
          </ScrollView>
          
          <Text style={styles.date}>📅 {eventDate}</Text>
          <Text style={styles.description}>{eventDescription}</Text>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Inscribirse</Text>
          </TouchableOpacity>
        </View>

        {/* Sección de talleres (puedes dinamizar esto también) */}
        <View style={styles.card}>
          <Text style={styles.title}>Talleres del evento</Text>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qEv9LWpzqiqfc47CisLasSv0RBq4hgVDOg&s' }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Inscribirse</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavButton navigation={navigation} name="Inicio" screen="Home" icon="🏠" />
        <NavButton navigation={navigation} name="MisEventos" screen="MisEventos" icon="📅" />
        <NavButton navigation={navigation} name="Menú" screen="Menu" icon="📋" />
      </View>
    </View>
  );
}

const NavButton = ({ navigation, name, screen, icon }) => (
  <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate(screen)}>
    <Text style={styles.navIcon}>{icon}</Text>
    <Text style={styles.navText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', paddingBottom: 60 },
  card: { backgroundColor: 'white', margin: 10, padding: 15, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  button: { backgroundColor: '#6200EE', padding: 10, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#FFF', textAlign: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#6200EE', height: 60, position: 'absolute', bottom: 0, left: 0, width: '100%' },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 24, color: 'white' },
  navText: { color: 'white', fontSize: 12 }
});
