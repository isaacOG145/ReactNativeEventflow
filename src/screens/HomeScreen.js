import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Sidebar from '../components/Sidebar';

const { width: screenWidth } = Dimensions.get('window');

const scienceFairImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWnA3NBGZUwzeaVnfJNnXNSEGGZmF0NgSPQ&s',
  'https://cdn.www.gob.pe/uploads/document/file/5475160/871844-000137814m.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qEv9LWpzqiqfc47CisLasSv0RBq4hgVDOg&s'
];

const jobFairImages = [
  'https://www.fundacionunam.org.mx/wp-content/uploads/2016/09/feriaempleo_contenido1.jpg',
  'https://cuernavaca.gob.mx/wp-content/uploads/2022/07/1er-Feria-del-Empleo.jpg',
  'https://www.digitalmex.mx/images/2024/JUNIO/20/feria-empleo-huixquilucan.jpg'
];

export default function HomeScreen({ navigation }) {
  const [scienceIndex, setScienceIndex] = useState(0);
  const [jobIndex, setJobIndex] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const scienceScrollRef = useRef(null);
  const jobScrollRef = useRef(null);

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setScienceIndex((prev) => (prev + 1) % scienceFairImages.length);
      }, 3000),
      setInterval(() => {
        setJobIndex((prev) => (prev + 1) % jobFairImages.length);
      }, 3500)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    if (scienceScrollRef.current) {
      scienceScrollRef.current.scrollTo({
        x: screenWidth * 0.9 * scienceIndex,
        animated: true,
      });
    }
  }, [scienceIndex]);

  useEffect(() => {
    if (jobScrollRef.current) {
      jobScrollRef.current.scrollTo({
        x: screenWidth * 0.9 * jobIndex,
        animated: true,
      });
    }
  }, [jobIndex]);

  const renderCarousel = (images, currentIndex, setIndex, title, date, description, scrollRef) => (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.floor(
              event.nativeEvent.contentOffset.x / (screenWidth * 0.9)
            );
            setIndex(newIndex);
          }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={[styles.carouselImage, { width: screenWidth * 0.9 }]}
            />
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.activeDot
              ]}
            />
          ))}
        </View>
      </View>

      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('DetalleUsuario', { 
          eventTitle: title,
          eventDate: date,
          eventDescription: description,
          eventImages: images 
        })}
      >
        <Text style={styles.buttonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderCarousel(
          scienceFairImages,
          scienceIndex,
          setScienceIndex,
          'Feria de Ciencias',
          '12-06-2025',
          'Exposición de proyectos científicos y tecnológicos estudiantiles',
          scienceScrollRef
        )}

        {renderCarousel(
          jobFairImages,
          jobIndex,
          setJobIndex,
          'Feria de Trabajo',
          '15-08-2025',
          'Conectamos empresas con los mejores talentos profesionales',
          jobScrollRef
        )}
      </ScrollView>

      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} navigation={navigation} />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/hogar.png')} style={styles.navIconImage} />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('MisEventos')} // Nombre corregido
        >
          <Image source={require('../../assets/entrada-active.png')} style={styles.navIconImage} />
          <Text style={styles.navText}>Mis eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setSidebarVisible(true)}>
        <Image source={require('../../assets/menu-active.png')} style={styles.navIconImage} />
          <Text style={styles.navText}>Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', paddingBottom: 30 },
  scrollContent: { paddingVertical: 20, alignItems: 'center', paddingBottom: 80 },
  card: { width: '90%', backgroundColor: 'white', borderRadius: 15, padding: 20, elevation: 5, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  description: { fontSize: 14, color: '#666', marginVertical: 10, textAlign: 'center' },
  carouselContainer: { marginBottom: 15, overflow: 'hidden', borderRadius: 10 },
  carouselImage: { height: 200, resizeMode: 'cover', borderRadius: 10 },
  button: { backgroundColor: '#6200EE', padding: 12, borderRadius: 8, marginTop: 15, alignSelf: 'center', width: '100%' },
  buttonText: { color: '#FFF', textAlign: 'center', fontWeight: '600' },
  pagination: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  paginationDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#888', marginHorizontal: 4 },
  activeDot: { backgroundColor: '#6200EE', width: 16 },
  date: { textAlign: 'center', marginVertical: 10, color: '#666', fontSize: 16 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#6200EE', width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0 },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 24, color: 'white' },
  navText: { color: 'white', fontSize: 12, marginTop: 5 },
  navIconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white' // opcional, solo si quieres que se pinte del color del texto
  }
});