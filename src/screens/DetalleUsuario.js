import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

// Componente del botón de navegación con imagen
const NavButton = ({ navigation, name, screen, icon }) => (
  <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate(screen)}>
    <Image source={icon} style={styles.navIconImage} />
    <Text style={styles.navText}>{name}</Text>
  </TouchableOpacity>
);

// Componente principal
export default function DetalleUsuario({ route, navigation }) {
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

        {/* Sección de talleres */}
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

      {/* Barra de navegación inferior */}
      <View style={styles.bottomNav}>
        <NavButton 
          navigation={navigation} 
          name="Inicio" 
          screen="Home" 
          icon={require('../../assets/hogar.png')} 
        />
        <NavButton 
          navigation={navigation} 
          name="MisEventos" 
          screen="MisEventos" 
          icon={require('../../assets/entrada-active.png')} 
        />
        <NavButton 
          navigation={navigation} 
          name="Menú" 
          screen="Menu" 
          icon={require('../../assets/menu-active.png')} 
        />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f0f0', 
    paddingBottom: 60 
  },
  card: { 
    backgroundColor: 'white', 
    margin: 10, 
    padding: 15, 
    borderRadius: 10 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  image: { 
    width: 300, 
    height: 150, 
    borderRadius: 10, 
    marginRight: 10 
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#333'
  },
  button: { 
    backgroundColor: '#6200EE', 
    padding: 10, 
    borderRadius: 8, 
    marginTop: 10 
  },
  buttonText: { 
    color: '#FFF', 
    textAlign: 'center' 
  },
  bottomNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#6200EE', 
    height: 60, 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    width: '100%', 
    paddingVertical: 10 
  },
  navItem: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  navIconImage: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginBottom: 2
  },
  navText: { 
    color: 'white', 
    fontSize: 12 
  }
});
