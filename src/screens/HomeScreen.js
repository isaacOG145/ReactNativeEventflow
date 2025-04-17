import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Colors } from '../kernel/Styles';
import Sidebar from '../components/Sidebar';
import CustomHeader from '../components/CustomHeader';
import ActivityCard from '../components/ActivityCard';

export default function HomeScreen({ navigation }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Talleres disponibles para ti</Text>
        <ActivityCard
          activity={{
            name: "Taller de React Native",
            typeActivity: "EVENT",
            date: "16-04-2025",
            description: "Aprende a desarrollar apps móviles...",
            imageUrls: [
              "http://res.cloudinary.com/dvsmwzs2g/image/upload/v1743956020/vqn9ybkfhai7wc0bfj4n.jpg",
              "http://res.cloudinary.com/dvsmwzs2g/image/upload/v1743956021/qih6uqprdxex6xleqa52.jpg",
              "http://res.cloudinary.com/dvsmwzs2g/image/upload/v1744742521/b1tf2zrudp6vipe9u36e.jpg"]
          }}
          onPressBlue={() => navigation.navigate('Details')}
          textBlue="prueba 1"
        />

        <ActivityCard
          activity={{
            name: "Taller de React Native",
            typeActivity: "WORKSHOP",
            fromActivity: { name: "Conferencia Tech" },
            quota: 30,
            time: "3:00pm",
            description: "Aprende a desarrollar apps móviles...",
            imageUrls: [
              "http://res.cloudinary.com/dvsmwzs2g/image/upload/v1743956020/vqn9ybkfhai7wc0bfj4n.jpg",
              "http://res.cloudinary.com/dvsmwzs2g/image/upload/v1743956021/qih6uqprdxex6xleqa52.jpg",
              "http://res.cloudinary.com/dvsmwzs2g/image/upload/v1744742521/b1tf2zrudp6vipe9u36e.jpg"]
          }}
          onPressBlue={() => navigation.navigate('Details')}
          onPressPurple={() => shareContent()}
          textBlue="prueba 1"
          textPurple="prueba 2"
        />
      </ScrollView>

      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} navigation={navigation} />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/hogar.png')} style={styles.navIconImage} />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('MisEventos')}
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
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 14, color: '#666', marginVertical: 10, textAlign: 'center' },
  button: { backgroundColor: '#6200EE', padding: 12, borderRadius: 8, marginTop: 15, alignSelf: 'center', width: '100%' },
  buttonText: { color: '#FFF', textAlign: 'center', fontWeight: '600' },
  date: { textAlign: 'center', marginVertical: 10, color: '#666', fontSize: 16 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#6200EE', width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0 },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 24, color: 'white' },
  navText: { color: 'white', fontSize: 12, marginTop: 5 },
  navIconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white'
  }
});
